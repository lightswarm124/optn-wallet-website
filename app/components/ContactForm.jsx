"use client";

import { useState } from "react";

const initialState = {
  name: "",
  company: "",
  email: "",
  need: "BCH infrastructure access",
  timeline: "",
  details: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `OPTN Labs inquiry: ${form.need || "General inquiry"}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.name || "-"}`,
        `Company: ${form.company || "-"}`,
        `Email: ${form.email || "-"}`,
        `Need: ${form.need || "-"}`,
        `Timeline: ${form.timeline || "-"}`,
        "",
        "Project details:",
        form.details || "-",
      ].join("\n"),
    );

    window.location.href = `mailto:info@optnlabs.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
    >
      <div className="mb-5 text-left">
        <h3 className="text-xl font-semibold text-white">Send a note</h3>
        <p className="mt-2 text-sm text-white/65">
          This opens a pre-filled email to info@optnlabs.com.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-left">
          <span className="mb-2 block text-sm text-white/70">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-accent-primary/60"
          />
        </label>

        <label className="text-left">
          <span className="mb-2 block text-sm text-white/70">Company</span>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={updateField}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-accent-primary/60"
          />
        </label>

        <label className="text-left">
          <span className="mb-2 block text-sm text-white/70">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-accent-primary/60"
          />
        </label>

        <label className="text-left">
          <span className="mb-2 block text-sm text-white/70">
            What do you need?
          </span>
          <select
            name="need"
            value={form.need}
            onChange={updateField}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors focus:border-accent-primary/60"
          >
            <option>BCH infrastructure access</option>
            <option>Wallet / token implementation help</option>
            <option>Covenant design / transaction planning</option>
            <option>Partnership / ecosystem support</option>
            <option>General inquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-left">
        <span className="mb-2 block text-sm text-white/70">Timeline</span>
        <input
          type="text"
          name="timeline"
          value={form.timeline}
          onChange={updateField}
          placeholder="e.g. within 30 days"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-primary/60"
        />
      </label>

      <label className="mt-4 block text-left">
        <span className="mb-2 block text-sm text-white/70">Project details</span>
        <textarea
          name="details"
          value={form.details}
          onChange={updateField}
          rows={6}
          placeholder="What are you building, what BCH components are involved, and where are you blocked?"
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-primary/60"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-background-dark hover:bg-white/90"
        >
          Open email draft
        </button>
      </div>
    </form>
  );
}
