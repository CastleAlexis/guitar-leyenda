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
      <section id="guitarristas" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galería de <span className="text-primary">Leyendas</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Los maestros que definieron el sonido del rock moderno
            </p>
          </div>

          <div
            className="grid gap-6 justify-items-center"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
          >
            {guitarists.map((guitarist, index) => (
              <Card
                key={guitarist.id}
                className="group w-full max-w-[360px] bg-card border-border overflow-hidden rounded-[18px] cursor-pointer transition-[transform,shadow,border-color] duration-300 ease-out opacity-0 motion-safe:animate-[fadeUp_0.6s_ease-out_forwards] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,255,100,0.4)]"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setSelectedGuitarist(guitarist)}
              >
                <div className="relative h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden">
                  <Image
                    src={guitarist.image || "/placeholder.svg"}
                    alt={`Foto de ${guitarist.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    priority={guitarist.id === "1"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
                </div>
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{guitarist.name}</h3>
                  <p className="text-primary font-semibold whitespace-pre-line leading-tight">
                    {guitarist.band}
                  </p>
                  <p className="text-muted-foreground text-sm leading-tight">{guitarist.style}</p>
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
