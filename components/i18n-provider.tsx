"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "en" | "ar" | "hi"

interface I18nContextValue {
  lang: Language
  setLang: (l: Language) => void
  t: (key: string, fallback?: string) => string
  dir: "ltr" | "rtl"
}

const dictionaries: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.distributors": "Find Distributor",
    "cta.enquire": "Enquire Now",
    "cta.download": "Download Brochure",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.products": "المنتجات",
    "nav.about": "من نحن",
    "nav.gallery": "معرض الصور",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.distributors": "موزعون",
    "cta.enquire": "استفسر الآن",
    "cta.download": "تحميل الكتيب",
  },
  hi: {
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.gallery": "गैलरी",
    "nav.blog": "ब्लॉग",
    "nav.contact": "संपर्क",
    "nav.distributors": "डिस्ट्रीब्यूटर खोजें",
    "cta.enquire": "पूछताछ करें",
    "cta.download": "ब्रोशर डाउनलोड करें",
  },
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("flexicore-lang")) as Language | null
    if (stored && ["en", "ar", "hi"].includes(stored)) {
      setLangState(stored)
    }
  }, [])

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr"

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = dir
      document.documentElement.lang = lang
    }
  }, [dir, lang])

  const setLang = (l: Language) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("flexicore-lang", l)
  }

  const t = (key: string, fallback?: string) => dictionaries[lang][key] ?? fallback ?? key

  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}
