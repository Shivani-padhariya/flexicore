"use client"

const brands = [
  "Marriott Hotels",
  "Taj Hotels", 
  "Oberoi Group",
  "ITC Hotels",
  "Leela Palace",
  "Radisson",
  "Hyatt",
  "Holiday Inn",
  "JW Marriott",
  "Four Seasons",
  "Ritz Carlton",
  "Westin Hotels",
]

const partnerLogos = [
  {
    name: "Marriott Hotels",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Taj Hotels",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oberoi Group",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hyatt",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
]

const mediaLogos = [
  "Times of India",
  "Economic Times",
  "Business Standard",
  "NDTV",
  "India Today",
  "The Hindu",
]

export function TrustedBy() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Trusted by Leading Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="relative aspect-square overflow-hidden rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${logo.image})` }}
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white text-sm font-semibold">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* Client Brands Marquee */}
        <div className="relative mb-16">
          <div className="flex animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-8 py-4 bg-white border border-border"
              >
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Press & Media Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-foreground">
            Featured In
          </h3>
        </div>

        {/* Media Logos Marquee - Reverse Direction */}
        <div className="relative">
          <div className="flex animate-marquee-reverse">
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 px-8 py-4 bg-white border border-border"
              >
                <span className="text-muted-foreground font-medium whitespace-nowrap">
                  {media}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
