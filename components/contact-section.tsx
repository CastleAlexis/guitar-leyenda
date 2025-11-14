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
    <section id="contacto" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tu opinión <span className="text-primary">importa</span>
          </h2>
          <p className="text-lg text-muted-foreground">¿Qué guitarrista agregarías a la galería?</p>
        </div>

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
              className="bg-background border-border text-foreground"
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
              className="bg-background border-border text-foreground"
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
              className="bg-background border-border text-foreground min-h-32"
              placeholder="Cuéntanos qué guitarrista te gustaría ver en la galería..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
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
    </section>
  )
}

