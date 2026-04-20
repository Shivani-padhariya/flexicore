"use client"

const updates = [
  "🎉 New Launch: Introducing Aurora Collection - 25 stunning new colors",
  "📍 Visit us at AceTech Mumbai 2026 - Booth A-42",
  "🌿 Flexicore achieves Green Building Certification",
  "🏆 Winner of Best Manufacturer Award 2025",
  "📦 Free shipping on orders above ₹50,000",
  "🔥 Limited offer: 20% off on Marble Collection",
]

export function DailyUpdates() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
        }}
      />
      <div className="relative bg-primary/95 text-primary-foreground py-3 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...updates, ...updates].map((update, index) => (
            <span key={index} className="mx-8 text-sm font-medium">
              {update}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
