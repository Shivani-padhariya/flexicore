"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

export function DistributorApplyForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  if (sent) {
    return (
      <div className="border border-primary/30 bg-primary/5 p-8 flex items-start gap-4">
        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Application received</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Our partnerships team will review your application and respond within 3–5 business days.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="border border-border bg-white p-6 md:p-8 space-y-5">
      <div>
        <h3 className="font-semibold">Company Information</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Company name" required>
            <input required className="inp" />
          </Field>
          <Field label="Year established" required>
            <input required type="number" min="1900" max="2026" className="inp" />
          </Field>
          <Field label="Country / Region" required>
            <input required className="inp" />
          </Field>
          <Field label="Website">
            <input type="url" className="inp" />
          </Field>
          <Field label="Annual revenue (USD)">
            <select className="inp">
              <option value="">Select</option>
              <option>{"< 500K"}</option>
              <option>500K – 2M</option>
              <option>2M – 10M</option>
              <option>10M+</option>
            </select>
          </Field>
          <Field label="Number of employees">
            <select className="inp">
              <option value="">Select</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
          </Field>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Business Profile</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Primary industry" required>
            <select required className="inp">
              <option value="">Select</option>
              <option>Kitchen &amp; Bath</option>
              <option>Commercial Interiors</option>
              <option>Hospitality</option>
              <option>Healthcare</option>
              <option>Retail</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Current brands carried">
            <input className="inp" />
          </Field>
          <Field label="Showroom area (sqft)">
            <input type="number" className="inp" />
          </Field>
          <Field label="Fabrication facility?">
            <select className="inp">
              <option>No</option>
              <option>Yes — in-house</option>
              <option>Yes — partner</option>
            </select>
          </Field>
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Contact Person</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Full name" required>
            <input required className="inp" />
          </Field>
          <Field label="Role / Title" required>
            <input required className="inp" />
          </Field>
          <Field label="Email" required>
            <input required type="email" className="inp" />
          </Field>
          <Field label="Phone / WhatsApp" required>
            <input required type="tel" className="inp" />
          </Field>
        </div>
      </div>

      <Field label="Tell us about your interest in Flexicore" required>
        <textarea required rows={4} className="inp" />
      </Field>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input required type="checkbox" className="mt-0.5" />
        <span>I confirm the information above is accurate and consent to Flexicore contacting me.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {loading ? "Sending..." : "Submit Application"}
        <Send className="h-4 w-4" />
      </button>

      <style jsx>{`
        .inp {
          width: 100%;
          border: 1px solid var(--border);
          padding: 10px 12px;
          font-size: 14px;
          background: white;
          outline: none;
          transition: border-color 0.15s;
        }
        .inp:focus {
          border-color: var(--primary);
        }
      `}</style>
    </form>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
