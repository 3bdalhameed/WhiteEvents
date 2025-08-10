import React, { useMemo, useState } from "react";

export default function Appointment({ endpoint }) {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    date: "",
    time: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

    // ✅ define it once, memoized
    const resolvedEndpoint = useMemo(
      () => endpoint || "https://whiteevents.onrender.com/appointments/",

      [endpoint]
    );

  const minDate = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  function validate(values) {
    const e = {};
    if (!values.name.trim()) e.name = "Full name is required";

    if (!values.phoneNumber.trim()) {
      e.phoneNumber = "Phone number is required";
    } else if (!/^[0-9+\-()\s]{7,15}$/.test(values.phoneNumber)) {
      e.phoneNumber = "Enter a valid phone number";
    }

    if (!values.date) {
      e.date = "Date is required";
    } else if (values.date < minDate) {
      e.date = "Date cannot be in the past";
    }

    if (!values.time) {
      e.time = "Time is required";
    }

    try {
      if (values.date && values.time) {
        const selected = new Date(`${values.date}T${values.time}:00`);
        const now = new Date();
        if (selected.getTime() < now.getTime() - 60 * 1000) {
          e.time = e.time || "Time appears to be in the past";
        }
      }
    } catch {}

    return e;
  }

  function handleChange(ev) {
    const { id, value } = ev.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleBlur() {
    setErrors(validate(form));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    if (!resolvedEndpoint) {
      setServerMessage("No endpoint configured for submission.");
      return;
    }

    setSubmitting(true);
    setServerMessage("");

    try {
      const payload = {
        name: form.name.trim(),
        phoneNumber: form.phoneNumber.trim(),
        date: form.date,
        time: form.time,
        details: form.details.trim(),
        source: "web.appointment_form",
      };

      const res = await fetch(resolvedEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let text = await res.text();
        throw new Error(text || `Request failed with ${res.status}`);
      }

      setSubmitted(true);
      setForm({ name: "", phoneNumber: "", date: "", time: "", details: "" });
      setServerMessage("Appointment submitted successfully.");
    } catch (err) {
      setServerMessage(err.message || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="appointment" className="bg-white py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Book Your Appointment
        </h3>

        {submitted && (
          <div className="mb-4 rounded-lg border border-green-300 bg-green-50 p-3 text-green-800 text-left">
            <p className="font-medium">Thanks! We received your request.</p>
            <p className="text-sm">We'll contact you shortly.</p>
          </div>
        )}

        {serverMessage && (
          <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-amber-800 text-left">
            <p className="text-sm">{serverMessage}</p>
          </div>
        )}

        <form className="space-y-6 text-left" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <span className="mt-1 text-sm text-red-600">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-gray-700 font-medium mb-2"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phoneNumber ? "border-red-400" : "border-gray-300"
              }`}
              value={form.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phoneNumber && (
              <span className="mt-1 text-sm text-red-600">
                {errors.phoneNumber}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700 font-medium mb-2">
              Date:
            </label>
            <input
              type="date"
              id="date"
              min={minDate}
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.date ? "border-red-400" : "border-gray-300"
              }`}
              value={form.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.date && (
              <span className="mt-1 text-sm text-red-600">{errors.date}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="time" className="text-gray-700 font-medium mb-2">
              Time:
            </label>
            <input
              type="time"
              id="time"
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.time ? "border-red-400" : "border-gray-300"
              }`}
              value={form.time}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.time && (
              <span className="mt-1 text-sm text-red-600">{errors.time}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="details" className="text-gray-700 font-medium mb-2">
              Additional Details:
            </label>
            <textarea
              id="details"
              placeholder="Enter any specific requirements"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
              value={form.details}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`bg-black text-white py-3 px-6 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-600 transition ${
              submitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
