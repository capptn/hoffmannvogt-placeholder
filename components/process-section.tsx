import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Kostenlose Bewertung",
    description:
      "Wir analysieren Ihre Immobilie und den lokalen Markt, um den optimalen Verkaufspreis zu ermitteln. Unverbindlich und kostenfrei.",
  },
  {
    number: "02",
    title: "Professionelle Vermarktung",
    description:
      "Hochwertige Fotos, virtuelle Rundgaenge und zielgerichtete Anzeigen auf allen relevanten Plattformen fuer maximale Reichweite.",
  },
  {
    number: "03",
    title: "Qualifizierte Besichtigungen",
    description:
      "Wir fuehren nur vorab geprueften Interessenten durch Ihre Immobilie. Kein Besichtigungstourismus, nur echte Kaeufer.",
  },
  {
    number: "04",
    title: "Erfolgreicher Verkauf",
    description:
      "Von der Preisverhandlung bis zum Notartermin: Wir begleiten Sie bis zur Schluesseluebergabe. Sicher und stressfrei.",
  },
]

export function ProcessSection() {
  return (
    <section id="prozess" className="py-20 md:py-32 bg-brand-blue">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans font-semibold text-white/70 uppercase tracking-wider mb-4">
            So funktioniert es
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight text-balance mb-6 tracking-wide">
            In 4 Schritten zum Bestpreis
          </h2>
          <p className="text-lg font-sans text-white/80 leading-relaxed">
            Unser bewaehrter Prozess sorgt dafuer, dass Sie den maximalen Verkaufspreis erzielen - stressfrei und transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-colors backdrop-blur-sm">
                <span className="text-5xl font-serif font-bold text-white/20 group-hover:text-white/30 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wide mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-white/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-lg text-base font-sans font-semibold hover:bg-white/90 transition-colors min-h-[52px]"
          >
            Jetzt Schritt 1 starten
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
