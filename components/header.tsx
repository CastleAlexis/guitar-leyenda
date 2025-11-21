"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { label: "Inicio", id: "inicio" },
  { label: "Guitarristas", id: "guitarristas" },
  { label: "Contacto", id: "contacto" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 border-b border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm"
          : "bg-black/80 border-b border-primary/30"
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2 md:gap-3 text-foreground hover:text-primary transition-colors"
            type="button"
            aria-label="Ir al inicio"
          >
            <svg viewBox="0 0 96 96" className="h-7 w-7 text-primary" aria-hidden="true">
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
            <span className="text-lg md:text-xl font-bold leading-none">Guitar Legends Gallery</span>
          </button>

          <nav className="hidden md:flex items-center gap-4 text-sm md:text-base">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10 rounded-full px-4 py-2"
                type="button"
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Abrir menu"
            type="button"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 border border-primary/30 rounded-xl mt-2 p-4 space-y-2 shadow-lg shadow-primary/10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left text-foreground hover:text-primary hover:bg-primary/10 rounded-md px-3 py-2 transition-colors text-sm"
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
