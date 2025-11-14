"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
// Using native img for consistent coverage on some JPGs
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guitarists.map((guitarist) => (
              <Card
                key={guitarist.id}
                className="bg-card border-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                onClick={() => setSelectedGuitarist(guitarist)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <div
                    aria-label={guitarist.name}
                    className={`absolute inset-0 bg-center transition-transform duration-300 hover:scale-110 ${
                      guitarist.id === '1' || guitarist.name === 'Paul Gilbert' ? 'scale-[1.10]' : ''
                    }`}
                    style={{
                      backgroundImage: `url("${guitarist.image || '/placeholder.svg'}")`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{guitarist.name}</h3>
                  <p className="text-primary font-semibold mb-1 whitespace-pre-line">{guitarist.band}</p>
                  <p className="text-muted-foreground">{guitarist.style}</p>
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
