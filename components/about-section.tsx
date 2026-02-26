import { Home, Users, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Marktgerechte Preisfindung",
    description:
      "Unsere datenbasierte Bewertung sorgt dafuer, dass Sie den bestmoeglichen Preis fuer Ihre Immobilie erzielen. Kein Raten, kein Bauchgefuehl.",
  },
  {
    icon: Users,
    title: "Exklusives Kaeufernetzwerk",
    description:
      "Ueber 5.000 vorgemerkte Kaufinteressenten in unserer Datenbank, die aktiv nach Immobilien suchen.",
  },
  {
    icon: Home,
    title: "Professionelle Vermarktung",
    description:
      "Hochwertige Fotos, virtuelle Rundgaenge und gezielte Anzeigen auf allen relevanten Plattformen.",
  },
  {
    icon: Shield,
    title: "Rundum-Sorglos-Service",
    description:
      "Von der Bewertung bis zum Notartermin: Wir begleiten Sie durch den gesamten Verkaufsprozess.",
  },
]

export function AboutSection() {
  return (
    <section id="vorteile" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-sans font-semibold text-brand-blue uppercase tracking-wider mb-4">
            Warum wir?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase leading-tight text-balance mb-6 tracking-wide">
            So erzielen unsere Kunden{" "}
            <span className="text-brand-blue">+30.000 EUR mehr</span>
          </h2>
          <p className="text-lg font-sans text-black/60 leading-relaxed">
            Wir wissen: Der Verkauf einer Immobilie ist eine der wichtigsten finanziellen
            Entscheidungen Ihres Lebens. Genau deshalb setzen wir alles daran, den maximalen
            Preis fuer Sie herauszuholen.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black/[0.03] border border-black/10 rounded-2xl p-8 hover:border-brand-blue/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-serif font-bold text-black uppercase tracking-wide mb-3">{feature.title}</h3>
              <p className="font-sans text-black/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
