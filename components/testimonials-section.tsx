import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Wir haben unser Haus ueber Hoffmann Vogt Immobilien verkauft und dabei 42.000 EUR mehr erzielt als von anderen Maklern geschaetzt. Absolut professionell und transparent!",
    name: "Familie Schneider",
    location: "Dortmund-Hoerde",
    extra: "+42.000 EUR ueber Schaetzwert",
  },
  {
    quote:
      "Der gesamte Prozess war unglaublich reibungslos. Von der Bewertung bis zum Notartermin wurden wir hervorragend betreut. Klare Empfehlung!",
    name: "Thomas & Andrea M.",
    location: "Bochum",
    extra: "Verkauf in nur 67 Tagen",
  },
  {
    quote:
      "Ich war skeptisch, ob ein Makler wirklich mehr rausholen kann. Das Ergebnis hat mich ueberzeugt: 35.000 EUR ueber meiner eigenen Preisvorstellung. Danke!",
    name: "Carsten B.",
    location: "Essen-Ruettenscheid",
    extra: "+35.000 EUR ueber Erwartung",
  },
]

export function TestimonialsSection() {
  return (
    <section id="referenzen" className="py-20 md:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans font-semibold text-brand-blue uppercase tracking-wider mb-4">
            Das sagen unsere Kunden
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight text-balance mb-6 tracking-wide">
            Hunderte zufriedener{" "}
            <span className="text-brand-blue">Verkaeufer</span>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-blue text-brand-blue"
                  />
                ))}
              </div>

              <blockquote className="font-sans text-white/90 leading-relaxed mb-6 flex-grow">
                {`"${testimonial.quote}"`}
              </blockquote>

              {/* Highlight badge */}
              <div className="inline-flex self-start items-center bg-brand-blue/15 border border-brand-blue/30 rounded-full px-3 py-1 mb-4">
                <span className="text-xs font-sans font-semibold text-brand-blue">
                  {testimonial.extra}
                </span>
              </div>

              <div>
                <p className="font-sans font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm font-sans text-white/50">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
