"use client"

import { useI18n } from "./i18n-provider"
import { Globe } from "lucide-react"
import { useState } from "react"

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "en" as const, label: "English" },
    { code: "ar" as const, label: "العربية" },
    { code: "hi" as const, label: "हिंदी" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
          dark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-primary"
        }`}
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{lang}</span>
      </button>

      {open && (
        <>
          <button
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
            aria-label="Close language menu"
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-white border border-border shadow-lg min-w-[140px]">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                  lang === l.code ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
