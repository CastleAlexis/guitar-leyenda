"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById("guitarristas")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="bg-background">
      <div className="w-full bg-black">
        <img
          src="/hero-legends.png"
          alt="Guitar Legends"
          loading="eager"
          className="mx-auto block h-auto w-full max-w-[1920px] object-contain"
        />
      </div>

      <div className="px-5 lg:px-8 py-12 md:py-16">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Guitar Legends Gallery</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Explora los guitarristas que transformaron la historia del rock
          </p>
          <div className="flex justify-center">
            <Button
              onClick={scrollToGallery}
              size="lg"
              className="rounded-full border border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_rgba(0,255,106,0.35)] px-6 md:px-8 py-5 text-base md:text-lg"
            >
              Ver Guitarristas
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
