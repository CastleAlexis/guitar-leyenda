import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-600 py-10 px-6 text-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Galería de Leyendas de la Guitarra</h3>
          <p className="text-sm text-gray-400">
            Explora las leyendas que redefinieron el rock con riffs inolvidables y solos épicos.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-green-400">Inicio</Link></li>
            <li><Link href="#guitaristas" className="hover:text-green-400">Guitarristas</Link></li>
            <li><Link href="#contacto" className="hover:text-green-400">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <div className="flex space-x-4">

            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" className="hover:text-green-400">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
            </a>

            <a href="https://spotify.com" target="_blank" aria-label="Spotify">
              <svg width="24" height="24" fill="currentColor" className="hover:text-green-400">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.47 14.11a.75.75 0 01-1.03.27c-2.82-1.72-6.36-2.11-10.56-1.14a.75.75 0 11-.33-1.46c4.55-1.04 8.45-.6 11.67 1.38a.75.75 0 01.25 1.05zm1.32-2.82a.9.9 0 01-1.24.32c-3.23-1.98-8.14-2.56-11.93-1.38a.9.9 0 11-.52-1.72c4.22-1.28 9.57-.63 13.34 1.74.43.27.57.83.35 1.32zm.12-3.1c-3.67-2.21-9.7-2.42-13.54-1.26a1.1 1.1 0 01-.64-2.1c4.33-1.32 11.1-1.07 15.42 1.56a1.1 1.1 0 11-1.24 1.8z"/>
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <svg width="24" height="24" fill="currentColor" className="hover:text-green-400">
                <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.8-.9C16.7 5 12 5 12 5h-.1s-4.7 0-7.2.1c-.3 0-1.1 0-1.8.9-.6.6-.8 2-.8 2S2 9.6 2 11.1v1.8C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.9.1 6.9.1s4.7 0 7.2-.1c.3 0 1.1 0 1.8-.9.6-.6.8-2 .8-2s.2-1.6.2-3.1v-1.8c0-1.5-.2-3.1-.2-3.1zM9.75 14.02V9.98L14.5 12l-4.75 2.02z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {year} Guitar Legends Gallery · Creado por Castillo Ibáñez Alexis
      </div>
    </footer>
  );
}
