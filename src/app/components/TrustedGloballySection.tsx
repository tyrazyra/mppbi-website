'use client'

interface LogoItem {
  alt: string
  subtitle?: string
}

const baseLogos: LogoItem[] = [
  { alt: 'William & Mary', subtitle: 'Washington & Madison' },
  { alt: 'Henrico EDA', subtitle: 'Global Business Gateway' },
  { alt: 'UNDP' },
  { alt: 'Nork Technology Center' },
  { alt: 'Avromic' },
  { alt: 'Stanton Law' },
  { alt: 'Mar Mar Richmond' },
]

// Triple for seamless marquee loop
const logos = [...baseLogos, ...baseLogos, ...baseLogos]

export default function TrustedGloballySection() {
  return (
    <section className="py-14 border-y border-[#E2E8F0] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-[#6B7280] text-sm font-semibold tracking-[0.15em] uppercase">
          Trusted Globally
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="flex gap-20 items-center animate-marquee whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center opacity-60 hover:opacity-95 transition-opacity duration-300"
              style={{ minWidth: 200, gap: 2 }}
            >
              <div className="text-[#9CA3AF] text-sm font-semibold" style={{ filter: 'grayscale(100%)' }}>
                {logo.alt}
              </div>
              {logo.subtitle && (
                <span className="text-[9px] text-[#9CA3AF] font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
                  {logo.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
