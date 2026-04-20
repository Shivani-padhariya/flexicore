"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

export function ProductEnquiryForm({ productName }: { productName: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="border border-border bg-white p-6 flex items-start gap-3">
        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div>
          <h3 className="font-semibold text-foreground">Enquiry sent</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Thank you for your interest in {productName}. Our team will get back to you within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="border border-border bg-white p-6 space-y-4">
      <h3 className="font-semibold text-foreground">Enquire about {productName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Full Name</span>
          <input
            required
            type="text"
            className="mt-1 w-full border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Email</span>
          <input
            required
            type="email"
            className="mt-1 w-full border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Phone</span>
          <input
            type="tel"
            className="mt-1 w-full border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Country</span>
          <input
            type="text"
            className="mt-1 w-full border border-border px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">Message</span>
        <textarea
          rows={3}
          defaultValue={`I'd like more information about ${productName}.`}
          className="mt-1 w-full border border-border px-3 py-2 text-sm outline-none focus:border-primary resize-none"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {loading ? "Sending..." : "Send Enquiry"}
        <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  )
}
