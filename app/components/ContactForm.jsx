"use client";

import { useState } from "react";

const endpoint = "https://formsubmit.co/ajax/info@optnlabs.com";
const initialState = {
  name: "",
  email: "",
  company: "",
  topic: "General inquiry",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (form.website) return;

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || "Not provided",
          topic: form.topic,
          message: form.message,
          _subject: `OPTN Labs website inquiry: ${form.topic}`,
          _template: "table",
        }),
      });
      const result = await response.json();

      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error(result.message || "The message could not be sent.");
      }

      setForm(initialState);
      setStatus("success");
      setStatusMessage("Thanks—your message has been sent to the OPTN team.");
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not send your message. Please try again or email info@optnlabs.com.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input name="name" value={form.name} onChange={updateField} autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
        </label>
        <label>
          <span>Company or project <small>Optional</small></span>
          <input name="company" value={form.company} onChange={updateField} autoComplete="organization" />
        </label>
        <label>
          <span>What can we help with?</span>
          <select name="topic" value={form.topic} onChange={updateField}>
            <option>General inquiry</option>
            <option>OPTN Wallet</option>
            <option>BCH ecosystem or infrastructure</option>
            <option>Engineering</option>
            <option>Controlled-payment pilot</option>
            <option>Partnership</option>
          </select>
        </label>
      </div>

      <label className="contact-form-message">
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows={5}
          placeholder="Tell us what you are working on and what you need."
          required
        />
      </label>

      <label className="contact-form-trap" aria-hidden="true">
        Website
        <input name="website" value={form.website} onChange={updateField} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form-footer">
        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && <span aria-hidden="true">→</span>}
        </button>
        <p className="contact-form-privacy">
          Your details are used to respond to this inquiry and are relayed by{" "}
          <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit</a>,
          which may retain submissions for up to 30 days.
        </p>
      </div>

      <p className={`contact-form-status contact-form-status-${status}`} role="status" aria-live="polite">
        {statusMessage}
      </p>
    </form>
  );
}
