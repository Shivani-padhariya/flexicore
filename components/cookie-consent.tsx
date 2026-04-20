"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie, X, Check } from "lucide-react"

const STORAGE_KEY = "flexicore.cookie-consent.v1"

type Preferences = {
  essential: true
  analytics: boolean
  marketing: boolean
  timestamp: string
}

/**
 * GDPR-aware cookie consent banner.
 * - Shows on first visit (no stored preference)
 * - Accept all / Reject non-essential / Customize
 * - Persists a JSON preference object in localStorage
 */
export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [customize, setCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        // slight delay so banner doesn't flash during hydration
        const t = setTimeout(() => setOpen(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      setOpen(true)
    }
  }, [])

  const persist = (prefs: Omit<Preferences, "timestamp">) => {
    try {
      const payload: Preferences = { ...prefs, timestamp: new Date().toISOString() }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch {
      // ignore
    }
    setOpen(false)
  }

  const acceptAll = () =>
    persist({ essential: true, analytics: true, marketing: true })
  const rejectAll = () =>
    persist({ essential: true, analytics: false, marketing: false })
  const saveCustom = () =>
    persist({ essential: true, analytics, marketing })

  if (!mounted || !open) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[80] p-3 md:p-6 animate-[cc-rise_0.5s_ease-out]"
    >
      <div className="mx-auto max-w-5xl bg-background border border-border shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        {/* Header */}
        <div className="flex items-start gap-4 p-5 md:p-6 border-b border-border">
          <div className="shrink-0 h-10 w-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base font-medium text-primary">
              We value your privacy
            </p>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalised
              content, and analyse our traffic. Read our{" "}
              <Link href="/privacy" className="underline hover:text-primary">
                privacy policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
          <button
            onClick={rejectAll}
            aria-label="Close and reject non-essential cookies"
            className="shrink-0 h-9 w-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Customize panel */}
        {customize && (
          <div className="px-5 md:px-6 py-5 border-b border-border space-y-4">
            <CookieRow
              title="Strictly necessary"
              description="Required for core site functionality - cannot be disabled."
              checked
              disabled
              onChange={() => {}}
            />
            <CookieRow
              title="Analytics"
              description="Help us understand how visitors use the site so we can improve it."
              checked={analytics}
              onChange={setAnalytics}
            />
            <CookieRow
              title="Marketing"
              description="Used to deliver relevant campaigns and measure their performance."
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        {/* Actions */}
        <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            onClick={() => setCustomize((v) => !v)}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors order-2 sm:order-1"
          >
            {customize ? "Hide preferences" : "Customize"}
          </button>

          <div className="flex flex-col sm:flex-row gap-2 order-1 sm:order-2">
            <button
              onClick={rejectAll}
              className="text-xs uppercase tracking-[0.2em] font-semibold border border-border bg-background px-5 py-3 hover:border-primary hover:text-primary transition-colors duration-250"
            >
              Reject non-essential
            </button>
            {customize ? (
              <button
                onClick={saveCustom}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground px-5 py-3 hover:bg-accent transition-colors duration-250"
              >
                <Check className="h-3.5 w-3.5" />
                Save preferences
              </button>
            ) : (
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold bg-primary text-primary-foreground px-5 py-3 hover:bg-accent transition-colors duration-250"
              >
                <Check className="h-3.5 w-3.5" />
                Accept all
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cc-rise {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function CookieRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`shrink-0 relative h-6 w-11 transition-colors duration-250 ${
          checked ? "bg-primary" : "bg-border"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 bg-white shadow transition-transform duration-250 ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  )
}
