"use client"

export function SpotifySection() {
  return (
    <section id="playlist" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Banda Sonora <span className="text-primary">Legendaria</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escucha una selección de riffs y solos emblemáticos mientras exploras la galería
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg shadow-primary/10">
          <div className="relative" style={{ paddingBottom: "32%" }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/1Xfvzh8rQxpuENAVXz89JJ?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              title="Playlist Guitar Legends"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
