"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GuitaristModal } from "@/components/guitarist-modal"
import { guitarists, type Guitarist } from "@/lib/guitarists"

export function GallerySection() {
  const [selectedGuitarist, setSelectedGuitarist] = useState<Guitarist | null>(null)

  return (
    <>
      <section id="guitarristas" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Galería de <span className="text-primary">Leyendas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los maestros que definieron el sonido del rock moderno
            </p>
          </div>

          <div
            className="grid gap-4 justify-center"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {guitarists.map((guitarist, index) => (
              <Card
                key={guitarist.id}
                className="group bg-card border-border overflow-hidden rounded-[18px] cursor-pointer transition-all duration-300 opacity-0 motion-safe:animate-[fadeUp_0.6s_ease-out_forwards] hover:-translate-y-1 hover:scale-[1.02] hover:border-primary hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:shadow-primary/25"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setSelectedGuitarist(guitarist)}
              >
                <div className="relative h-[160px] md:h-[190px] lg:h-[210px] overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={guitarist.image || "/placeholder.svg"}
                      alt={guitarist.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      priority={guitarist.id === "1"}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-card/30 to-transparent" />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-foreground">{guitarist.name}</h3>
                  <p className="text-primary font-semibold whitespace-pre-line text-[11px] leading-tight">
                    {guitarist.band}
                  </p>
                  <p className="text-muted-foreground text-[11px] leading-tight">{guitarist.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <GuitaristModal guitarist={selectedGuitarist} onClose={() => setSelectedGuitarist(null)} />
    </>
  )
}
