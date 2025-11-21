"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">{guitarist.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={guitarist.image || "/placeholder.svg"}
              alt={guitarist.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Biografía</h3>
            <p className="text-foreground leading-relaxed">{guitarist.bio}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Bandas Principales</h3>
            <p className="text-foreground whitespace-pre-line">{guitarist.band}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Estilo Musical</h3>
            <p className="text-foreground">{guitarist.style}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Guitarras Icónicas</h3>
            <ul className="space-y-2">
              {guitarist.guitars.map((guitar, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground">
                  <span className="text-primary">•</span>
                  {guitar}
                </li>
              ))}
            </ul>
          </div>

          {(guitarist.socials?.facebook || guitarist.socials?.instagram || guitarist.socials?.youtube) && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Redes Sociales</h3>
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
