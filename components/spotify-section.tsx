"use client"

export function SpotifySection() {
  return (
    <section id="playlist" className="py-16 md:py-24 bg-background border-t border-primary/20">
      <div className="container mx-auto px-5 lg:px-8 max-w-5xl">
        <div className="text-center mb-8 md:mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Banda Sonora <span className="text-primary">Legendaria</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Escucha una selección de riffs y solos emblemáticos mientras exploras la galería
          </p>
        </div>

        <div className="group rounded-2xl bg-card/90 border border-primary/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)] shadow-primary/10 p-3 md:p-4 transition-transform duration-500 motion-safe:animate-[fadeUp_0.6s_ease-out_forwards] hover:shadow-[0_0_25px_rgba(0,255,106,0.25)] hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-black">
            <iframe
              src="https://open.spotify.com/embed/playlist/1Xfvzh8rQxpuENAVXz89JJ?utm_source=generator&theme=0&cacheBust=1"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block w-full"
              title="Playlist Guitar Legends"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
