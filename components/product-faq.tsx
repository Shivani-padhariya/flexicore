"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

type FaqItem = { q: string; a: string }

export function ProductFaq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  if (!items?.length) return null

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-accent mb-3">
            Frequently asked
          </span>
          <h2 className="text-balance text-2xl md:text-4xl font-light text-primary">
            Questions we hear often.
          </h2>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const open = openIdx === i
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 text-left py-5 transition-colors duration-250 hover:text-primary"
                >
                  <span className="text-base md:text-lg font-light text-foreground">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 h-9 w-9 flex items-center justify-center border transition-colors duration-250 ${
                      open
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground"
                    }`}
                    aria-hidden="true"
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-sm md:text-base leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
