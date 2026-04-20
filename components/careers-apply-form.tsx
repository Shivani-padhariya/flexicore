"use client"

import { useState } from "react"
import { CheckCircle2, Upload, Send } from "lucide-react"

export function CareersApplyForm({ roles }: { roles: string[] }) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

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
          <h3 className="text-lg font-semibold">Application submitted</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Our talent team reviews every application and will reach out if there&apos;s a match.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="border border-border bg-white p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Full name" required>
          <input required className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Email" required>
          <input required type="email" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Phone">
          <input type="tel" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="LinkedIn URL">
          <input type="url" className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
        </Field>
        <Field label="Position applying for" required>
          <select required className="w-full border border-border px-3 py-2.5 text-sm bg-white outline-none focus:border-primary">
            <option value="">Select a role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
            <option value="open">Open application</option>
          </select>
        </Field>
        <Field label="Years of experience" required>
          <select required className="w-full border border-border px-3 py-2.5 text-sm bg-white outline-none focus:border-primary">
            <option value="">Select</option>
            <option>0–2</option>
            <option>3–5</option>
            <option>6–10</option>
            <option>10+</option>
          </select>
        </Field>
      </div>

      <Field label="Resume (PDF, DOC, DOCX)" required>
        <label className="flex items-center gap-3 border border-dashed border-border px-4 py-4 cursor-pointer hover:border-primary transition-colors">
          <Upload className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {fileName ?? "Click to upload your resume"}
          </span>
          <input
            required
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </label>
      </Field>

      <Field label="Cover letter">
        <textarea rows={4} className="w-full border border-border px-3 py-2.5 text-sm outline-none focus:border-primary resize-none" />
      </Field>

      <label className="flex items-start gap-2 text-xs text-muted-foreground">
        <input required type="checkbox" className="mt-0.5" />
        <span>I consent to Flexicore processing my personal data for the purpose of this application.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {loading ? "Submitting..." : "Submit Application"}
        <Send className="h-4 w-4" />
      </button>
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
