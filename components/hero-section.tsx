"use client"

export function HeroSection() {
  return (
    <section id="inicio" className="bg-background">
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex justify-center">
          <img
            src="/hero-legends.png"
            alt="Guitar Legends"
            loading="eager"
            className="w-full max-w-[1920px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
