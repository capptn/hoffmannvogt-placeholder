import { Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"

export function FooterSection() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-blue.png"
              alt="Hoffmann Vogt Immobilien Logo"
              width={200}
              height={55}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="font-sans text-white/60 leading-relaxed mt-4 max-w-sm">
              Ihr Partner fuer den erfolgreichen Immobilienverkauf. Wir erzielen nachweislich
              hoehere Verkaufspreise durch professionelle Vermarktung und strategische
              Verhandlungsfuehrung.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-wide mb-4">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#vorteile" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#prozess" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  So funktioniert es
                </a>
              </li>
              <li>
                <a href="#referenzen" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-sm font-sans text-white/60 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-wide mb-4">Kontakt</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+4923144507100"
                  className="flex items-center gap-2 text-sm font-sans text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  0231 445 071 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hoffmannvogt.de"
                  className="flex items-center gap-2 text-sm font-sans text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@hoffmannvogt.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm font-sans text-white/60">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  Wismarer Str. 2-4, 44143 Dortmund
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sans text-white/50">
            {`\u00A9 ${new Date().getFullYear()} Hoffmann Vogt Immobilien. Alle Rechte vorbehalten.`}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-sans text-white/50 hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="text-sm font-sans text-white/50 hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
