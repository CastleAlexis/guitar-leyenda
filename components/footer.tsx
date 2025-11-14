import { Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <p className="text-muted-foreground text-center">
            © 2025 Guitar Legends Gallery | Diseñado por Alexis Castillo
          </p>
        </div>
      </div>
    </footer>
  )
}

