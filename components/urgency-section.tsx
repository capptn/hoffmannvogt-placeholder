import { ArrowRight, AlertTriangle } from "lucide-react"

const reasons = [
  {
    bold: "Ohne professionelle Bewertung",
    text: "verschenken Sie bares Geld. Die meisten Eigentuemer schaetzen ihre Immobilie falsch ein und lassen im Schnitt 30.000 EUR auf dem Tisch liegen.",
  },
  {
    bold: "Ohne gezielte Vermarktung",
    text: "erreichen Sie nicht die richtigen Kaeufer. Ihre Immobilie versauert auf Portalen, der Preis sinkt und Interessenten wittern ein Schnaeppchen.",
  },
  {
    bold: "Ohne erfahrene Verhandlungsfuehrung",
    text: "akzeptieren Sie den erstbesten Preis. Professionelle Preisverhandlung macht den Unterschied zwischen einem guten und einem hervorragenden Verkauf.",
  },
]

export function UrgencySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase leading-tight text-balance mb-6 tracking-wide">
            Hoeren Sie auf, Geld zu verschenken.
          </h2>
          <p className="text-lg font-sans text-black/60 leading-relaxed">
            Gestalten Sie den Verkauf Ihrer Immobilie aktiv - mit den richtigen Experten an Ihrer Seite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.bold}
              className="bg-black/[0.03] border border-black/10 rounded-2xl p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-5 h-5 text-brand-blue" />
              </div>
              <p className="font-sans text-black leading-relaxed">
                <strong className="text-black">{reason.bold}</strong>{" "}
                <span className="text-black/60">{reason.text}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[52px]"
          >
            JETZT Immobilie bewerten lassen
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm font-sans text-black/50 mt-4">
            100% kostenlos und unverbindlich
          </p>
        </div>
      </div>
    </section>
  )
}
