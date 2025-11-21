"use client"

import { useEffect } from "react"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import type { Guitarist } from "@/lib/guitarists"
import { Instagram, Youtube, Facebook } from "lucide-react"

interface GuitaristModalProps {
  guitarist: Guitarist | null
  onClose: () => void
}

export function GuitaristModal({ guitarist, onClose }: GuitaristModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!guitarist) return null

  return (
    <Dialog open={!!guitarist} onOpenChange={onClose}>
      <DialogContent
        className="modal max-w-4xl w-full rounded-2xl bg-card border-border shadow-2xl shadow-primary/10 p-6 md:p-8"
        overlayClassName="modal-overlay"
      >
        <DialogHeader className="flex flex-row items-start justify-between gap-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">{guitarist.name}</DialogTitle>
          <DialogClose
            className="rounded-full border border-primary/50 text-primary px-3 py-1 text-sm hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(0,255,106,0.5)] transition-colors"
            aria-label="Cerrar"
          >
            ×
          </DialogClose>
        </DialogHeader>

        <div className="modal-content custom-scroll space-y-6 pr-2">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={guitarist.image || "/placeholder.svg"}
              alt={`Foto de ${guitarist.name}`}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-primary">Biografía</h3>
            <p className="text-foreground leading-relaxed md:leading-8 leading-7">{guitarist.bio}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-primary">Bandas Principales</h3>
            <p className="text-foreground whitespace-pre-line leading-7 md:leading-8">{guitarist.band}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-primary">Estilo Musical</h3>
            <p className="text-foreground leading-7 md:leading-8">{guitarist.style}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-primary">Guitarras Icónicas</h3>
            <ul className="space-y-2 leading-7 md:leading-8">
              {guitarist.guitars.map((guitar, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">•</span>
                  {guitar}
                </li>
              ))}
            </ul>
          </div>

          {(guitarist.socials?.facebook || guitarist.socials?.instagram || guitarist.socials?.youtube) && (
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-primary">Redes Sociales</h3>
              <div className="flex items-center gap-4">
                {guitarist.socials?.facebook && (
                  <a
                    href={guitarist.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                )}
                {guitarist.socials?.instagram && (
                  <a
                    href={guitarist.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {guitarist.socials?.youtube && (
                  <a
                    href={guitarist.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
