import React, { useEffect, useMemo, useState } from "react";

export default function AppointmentCalendar({
  endpoint,
  stepMinutes = 30,
  businessHours = {
    mon: ["09:00-18:00"],
    tue: ["09:00-18:00"],
    wed: ["09:00-18:00"],
    thu: ["09:00-18:00"],
    fri: ["09:00-18:00"],
    sat: ["10:00-16:00"],
    sun: [],
  },
  blackoutDates = [],
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [serverMessage, setServerMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const resolvedEndpoint = useMemo(
    () => endpoint || "https://whiteevents.onrender.com/appointments/",
    [endpoint]
  );

  const pad = (n) => String(n).padStart(2, "0");
  const toISODate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const isSameDay = (a, b) => a && b && a === b;
  const startOfMonth = useMemo(() => new Date(viewYear, viewMonth, 1), [viewYear, viewMonth]);
  const endOfMonth = useMemo(() => new Date(viewYear, viewMonth + 1, 0), [viewYear, viewMonth]);

  const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const gridDates = useMemo(() => {
    const jsDay = startOfMonth.getDay();
    const monIndex = (jsDay + 6) % 7;
    const daysInMonth = endOfMonth.getDate();
    const dates = [];
    const totalCells = 42;

    for (let i = monIndex - 1; i >= 0; i--) {
      const d = new Date(viewYear, viewMonth, 1 - i - 1);
      dates.push({ date: d, inMonth: false });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(viewYear, viewMonth, day);
      dates.push({ date: d, inMonth: true });
    }
    while (dates.length < totalCells) {
      const last = dates[dates.length - 1].date;
      const d = new Date(last);
      d.setDate(last.getDate() + 1);
      dates.push({ date: d, inMonth: false });
    }
    return dates;
  }, [startOfMonth, endOfMonth, viewYear, viewMonth]);

  const minISO = useMemo(() => toISODate(today), [today]);
  const isPastDate = (d) => toISODate(d) < minISO;
  const isBlackout = (iso) => blackoutDates.includes(iso);

  const weekdayKey = (d) => {
    const js = d.getDay();
    const map = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return map[js];
  };

  const parseRanges = (ranges) => {
    return (ranges || []).map((r) => {
      const [a, b] = r.split("-");
      const [ah, am] = a.split(":").map(Number);
      const [bh, bm] = b.split(":").map(Number);
      return [ah * 60 + am, bh * 60 + bm];
    });
  };

  const generateSlots = (isoDate) => {
    if (!isoDate) return [];
    const [y, m, d] = isoDate.split("-").map(Number);
    const day = new Date(y, m - 1, d);
    const key = weekdayKey(day);
    const ranges = parseRanges(businessHours[key]);
    const slots = [];
    for (const [start, end] of ranges) {
      for (let t = start; t < end; t += stepMinutes) {
        const hh = pad(Math.floor(t / 60));
        const mm = pad(t % 60);
        slots.push(`${hh}:${mm}`);
      }
    }
    return slots;
  };

  const availableSlots = useMemo(() => {
    if (!selectedDate) return [];
    const all = generateSlots(selectedDate);
    const now = new Date();
    const todayISO = toISODate(now);
    if (selectedDate === todayISO) {
      const nowMinutes = now.getHours() * 60 + now.getMinutes();
      return all.filter((s) => {
        const [h, m] = s.split(":").map(Number);
        return h * 60 + m >= nowMinutes + 1;
      });
    }
    return all;
  }, [selectedDate]);

  const errors = useMemo(() => {
    const e = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\-()\s]{7,15}$/.test(phone)) e.phone = "Enter a valid phone number";
    if (!selectedDate) e.date = "Choose a date";
    else if (selectedDate < minISO) e.date = "Date cannot be in the past";
    else if (isBlackout(selectedDate)) e.date = "We are closed on this date";
    else if (generateSlots(selectedDate).length === 0) e.date = "No working hours for this day";
    if (!selectedTime) e.time = "Pick a time";
    try {
      if (selectedDate && selectedTime) {
        const dt = new Date(`${selectedDate}T${selectedTime}:00`);
        if (dt.getTime() < Date.now() - 60 * 1000) e.time = "Time appears to be in the past";
      }
    } catch {}
    return e;
  }, [name, phone, selectedDate, selectedTime, minISO]);

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (Object.keys(errors).length > 0) return;
    setSubmitting(true);
    setServerMessage("Submitting your appointment... please wait.");

    try {
      const payload = {
        name: name.trim(),
        phoneNumber: phone.trim(),
        date: selectedDate,
        time: selectedTime,
        details: details.trim(),
        source: "web.appointment_calendar",
      };

      const res = await fetch(resolvedEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with ${res.status}`);
      }

      setServerMessage("✅ Appointment submitted successfully.");
      setSubmitted(true);
      setName("");
      setPhone("");
      setDetails("");
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (err) {
      setServerMessage(`❌ ${err.message || "Submission failed"}`);
    } finally {
      setSubmitting(false);
    }
  }

  function MonthHeader() {
    const monthName = new Date(viewYear, viewMonth).toLocaleString(undefined, {
      month: "long",
      year: "numeric",
    });
    return (
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => { const d = new Date(viewYear, viewMonth - 1, 1); setViewYear(d.getFullYear()); setViewMonth(d.getMonth()); }} className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/10" aria-label="Previous month"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
        <h4 className="select-none font-serif text-lg font-semibold text-gray-900">{monthName}</h4>
        <button type="button" onClick={() => { const d = new Date(viewYear, viewMonth + 1, 1); setViewYear(d.getFullYear()); setViewMonth(d.getMonth()); }} className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/10" aria-label="Next month"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg></button>
      </div>
    );
  }

  function DayCell({ info }) {
    const iso = toISODate(info.date);
    const disabled = isPastDate(info.date) || isBlackout(iso) || generateSlots(iso).length === 0;
    const isSelected = isSameDay(selectedDate, iso);
    const inMonth = info.inMonth;
    return (
      <button type="button" onClick={() => !disabled && setSelectedDate(iso)} disabled={disabled} className={["h-10 w-full rounded-lg text-sm transition focus:outline-none focus:ring-2 focus:ring-black/20", disabled ? "text-gray-300" : "text-gray-800 hover:bg-gray-100", isSelected ? "bg-black text-white hover:bg-black" : "", !inMonth ? "opacity-50" : ""].join(" ")} aria-pressed={isSelected} aria-label={iso} title={iso}>{info.date.getDate()}</button>
    );
  }

  function TimeSlot({ t }) {
    const selected = selectedTime === t;
    return (
      <button type="button" onClick={() => setSelectedTime(t)} className={["rounded-full border px-4 py-2 text-sm transition", selected ? "border-black bg-black text-white" : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"].join(" ")}>{t}</button>
    );
  }

  return (
    <section id="appointment" className="bg-white py-12">
      <div className="mx-auto mb-6 max-w-6xl px-4 text-sm text-gray-500">Please note: submitting may take a few seconds, do not close this page.</div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-3 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <MonthHeader />
          <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500">{weekdayLabels.map((w) => (<div key={w} className="py-1">{w}</div>))}</div>
          <div className="mt-1 grid grid-cols-7 gap-2">{gridDates.map((d, i) => (<DayCell key={i} info={d} />))}</div>
          {selectedDate && (
            <div className="mt-6">
              <h5 className="mb-3 font-medium text-gray-900">Available times on <span className="font-semibold">{selectedDate}</span></h5>
              {availableSlots.length > 0 ? (
                <div className="flex flex-wrap gap-2">{availableSlots.map((t) => (<TimeSlot key={t} t={t} />))}</div>
              ) : (
                <p className="text-sm text-gray-500">No time slots available for this day.</p>
              )}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} noValidate className="md:col-span-2 space-y-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Book Your Appointment</h3>
          {serverMessage && (<div className={`rounded-lg p-3 text-sm ${serverMessage.startsWith("✅") ? "bg-green-50 text-green-800 border border-green-200" : serverMessage.startsWith("Submitting") ? "bg-blue-50 text-blue-800 border border-blue-200" : "bg-amber-50 text-amber-800 border border-amber-200"}`}>{serverMessage}</div>)}
          <div><label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">Full Name</label><input id="name" type="text" className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.name && !submitted ? "border-red-400" : "border-gray-300"}`} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />{errors.name && !submitted && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}</div>
          <div><label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label><input id="phone" type="tel" className={`w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.phone && !submitted ? "border-red-400" : "border-gray-300"}`} placeholder="e.g. +61 4xx xxx xxx" value={phone} onChange={(e) => setPhone(e.target.value)} />{errors.phone && !submitted && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}</div>
          <div><label className="mb-1 block text-sm font-medium text-gray-700">Selected Date</label><input readOnly value={selectedDate || "—"} className={`w-full cursor-not-allowed rounded-lg border bg-gray-50 p-3 text-gray-700 ${errors.date && !submitted ? "border-red-400" : "border-gray-200"}`} />{errors.date && !submitted && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}</div>
          <div><label className="mb-1 block text-sm font-medium text-gray-700">Selected Time</label><input readOnly value={selectedTime || "—"} className={`w-full cursor-not-allowed rounded-lg border bg-gray-50 p-3 text-gray-700 ${errors.time && !submitted ? "border-red-400" : "border-gray-200"}`} />{errors.time && !submitted && <p className="mt-1 text-xs text-red-600">{errors.time}</p>}</div>
          <div><label htmlFor="details" className="mb-1 block text-sm font-medium text-gray-700">Additional Details</label><textarea id="details" rows={4} className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black/20" placeholder="Any specific requirements" value={details} onChange={(e) => setDetails(e.target.value)} /></div>
          <button type="submit" disabled={submitting} className={`w-full rounded-lg bg-black py-3 text-center text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-black/30 ${submitting ? "opacity-70" : "hover:bg-gray-900"}`}>{submitting ? "Submitting…" : "Confirm Appointment"}</button>
          <p className="text-xs text-gray-500">By confirming, you agree to be contacted about your booking.</p>
        </form>
      </div>
    </section>
  );
}
