"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 md:gap-3 text-foreground hover:text-primary transition-colors"
            type="button"
            aria-label="Ir al inicio"
          >
            {/* Inline SVG icon so it inherits color */}
            <svg
              viewBox="0 0 96 96"
              className="h-7 w-7 md:h-8 md:w-8 text-primary"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                d="M48 6c18 0 36 10 36 30 0 24-24 48-30 54a8 8 0 0 1-12 0C36 84 12 60 12 36 12 16 30 6 48 6Z"
              />
              <circle cx="48" cy="46" r="16" fill="currentColor" />
              <circle cx="42" cy="44" r="4" fill="#0A0A0A" />
              <circle cx="54" cy="44" r="4" fill="#0A0A0A" />
              <path d="M48 60c-2 0-3-1-3-3v-3h6v3c0 2-1 3-3 3Z" fill="#0A0A0A" />
            </svg>
            <span className="text-xl md:text-2xl font-bold">Guitar Legends Gallery</span>
          </button>

          <nav className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary hover:bg-secondary"
              type="button"
              aria-label="Ir a inicio"
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("guitarristas")}
              className="text-foreground hover:text-primary hover:bg-secondary"
              type="button"
              aria-label="Ir a guitarristas"
            >
              Guitarristas
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary hover:bg-secondary"
              type="button"
              aria-label="Ir a contacto"
            >
              Contacto
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
