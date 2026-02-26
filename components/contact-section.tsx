"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <p className="text-sm font-sans font-semibold text-brand-blue uppercase tracking-wider mb-4">
              Jetzt starten
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase leading-tight text-balance mb-6 tracking-wide">
              Kostenlose Immobilien&shy;bewertung anfordern
            </h2>
            <p className="text-lg font-sans text-black/60 leading-relaxed mb-10">
              Erfahren Sie in wenigen Minuten, was Ihre Immobilie wirklich wert ist.
              Unverbindlich, kostenfrei und von Experten erstellt.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-black">100% kostenlos</p>
                  <p className="text-sm font-sans text-black/50">
                    Keine versteckten Kosten, kein Kleingedrucktes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-black">Unverbindlich</p>
                  <p className="text-sm font-sans text-black/50">
                    Sie entscheiden ohne Druck, ob Sie verkaufen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-black">Innerhalb von 48 Stunden</p>
                  <p className="text-sm font-sans text-black/50">
                    Schnelle Bewertung durch erfahrene Experten
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="tel:+4923144507100"
                className="flex items-center gap-2 font-sans text-black/60 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">0231 445 071 00</span>
              </a>
              <div className="flex items-center gap-2 font-sans text-black/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Wismarer Str. 2-4, 44143 Dortmund</span>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-black rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wide mb-3">
                  Vielen Dank!
                </h3>
                <p className="font-sans text-white/60 leading-relaxed max-w-sm">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 48 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wide mb-2">
                  Ihre Daten
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-sans font-medium text-white">
                      Vorname *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base min-h-[48px]"
                      placeholder="Max"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-sans font-medium text-white">
                      Nachname *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base min-h-[48px]"
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-sans font-medium text-white">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base min-h-[48px]"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-sans font-medium text-white">
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base min-h-[48px]"
                    placeholder="0123 456 789"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="propertyType" className="text-sm font-sans font-medium text-white">
                    Art der Immobilie
                  </label>
                  <select
                    id="propertyType"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base min-h-[48px]"
                  >
                    <option value="" className="bg-black text-white">Bitte waehlen</option>
                    <option value="house" className="bg-black text-white">Einfamilienhaus</option>
                    <option value="apartment" className="bg-black text-white">Eigentumswohnung</option>
                    <option value="multi" className="bg-black text-white">Mehrfamilienhaus</option>
                    <option value="land" className="bg-black text-white">Grundstueck</option>
                    <option value="commercial" className="bg-black text-white">Gewerbeimmobilie</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-sans font-medium text-white">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue/50 text-base resize-none"
                    placeholder="Erzaehlen Sie uns etwas ueber Ihre Immobilie..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[52px] mt-2"
                >
                  Kostenlose Bewertung anfordern
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs font-sans text-white/40 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklaerung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
