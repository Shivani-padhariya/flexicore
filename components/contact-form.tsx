"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

const subjects = ["General enquiry", "Product information", "Distributor opportunity", "Media & press", "Careers", "Other"]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 700)
  }

  if (sent) {
    return (
      <div className="border border-primary/30 bg-primary/5 p-8 flex items-start gap-4">
        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Message received</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Thank you for reaching out. A member of our team will respond within one business day.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="border border-border bg-white p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="First name" required>
          <input required type="text" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Last name" required>
          <input required type="text" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Email" required>
          <input required type="email" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Phone">
          <input type="tel" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Company">
          <input type="text" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Country" required>
          <input required type="text" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
      </div>

      <Field label="Subject" required>
        <select required className="w-full border border-border px-3 py-2.5 text-sm bg-white outline-none focus:border-primary">
          <option value="">Choose a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" required>
        <textarea required rows={5} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary resize-none" />
      </Field>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input required type="checkbox" className="mt-0.5" />
        <span>I agree to the Flexicore privacy policy and consent to being contacted.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
