"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contacto" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu opinión <span className="text-primary">importa</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">¿Qué guitarrista agregarías a la galería?</p>
        </div>

        <div className="group rounded-2xl bg-card/90 border border-primary/30 shadow-[0_10px_35px_rgba(0,0,0,0.35)] shadow-primary/10 p-6 md:p-8 motion-safe:animate-[fadeUp_0.6s_ease-out_forwards]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Nombre
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl bg-background/80 border border-primary/30 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-xl bg-background/80 border border-primary/30 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Mensaje
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="rounded-xl bg-background/80 border border-primary/30 text-foreground min-h-32 focus:border-primary focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all"
                placeholder="Cuéntanos qué guitarrista te gustaría ver en la galería..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(0,255,106,0.4)] hover:scale-[1.01] transition-transform duration-300 text-lg py-5"
            >
              {submitted ? "Enviado" : "Enviar"}
            </Button>

            {submitted && (
              <div className="text-center text-primary font-semibold animate-fade-in">
                ¡Gracias por tu mensaje! Lo revisaremos pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
