import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["name", "phoneNumber", "date", "time"];

function validate(payload) {
  const errors = {};
  for (const f of REQUIRED_FIELDS) {
    if (!String(payload[f] || "").trim()) {
      errors[f] = `${f} is required`;
    }
  }
  const phone = String(payload.phoneNumber || "").trim();
  if (phone && !/^[0-9+\-()\s]{7,15}$/.test(phone)) {
    errors.phoneNumber = "Enter a valid phone number";
  }
  try {
    const d = payload.date;
    const t = payload.time;
    if (d && t) {
      const dt = new Date(`${d}T${t}:00`);
      if (dt.getTime() < Date.now() - 60_000) {
        errors.time = "Selected date/time is in the past";
      }
    }
  } catch {
    errors.time = "Invalid date/time";
  }
  return errors;
}

async function sendEmail(subject, text) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.BOOKINGS_TO_EMAIL,
    subject,
    text,
  });
}

export async function GET() {
  return NextResponse.json({ ok: true, detail: "POST to create an appointment at this endpoint." });
}

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const { name, phoneNumber: phone, date, time, details = "", source = "web.appointment_form" } = payload;

  const subject = `New Appointment: ${name} — ${date} ${time}`;
  const text = [
    "New appointment request",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Details:\n${details || "-"}`,
    "",
    `Source: ${source}`,
  ].join("\n");

  // Send email in background — don't block the response
  sendEmail(subject, text).catch((err) => console.error("Email send failed:", err));

  return NextResponse.json(
    { ok: true, message: "Appointment submitted successfully." },
    { status: 201 }
  );
}
