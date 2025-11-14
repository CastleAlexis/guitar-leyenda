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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/rock-concert-stage-lights-guitarist-silhouette.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in text-balance">
          Explora el legado de los guitarristas que <span className="text-primary">marcaron la historia</span> del rock
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay text-balance">
          Descubre las leyendas que definieron generaciones con sus riffs inolvidables y solos épicos
        </p>

        <Button
          onClick={scrollToGallery}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-fade-in-delay-2"
        >
          Explorar galería
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

