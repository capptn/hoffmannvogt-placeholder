"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Was kostet die Immobilienbewertung?",
    answer:
      "Die Bewertung Ihrer Immobilie ist bei uns 100% kostenlos und unverbindlich. Wir erstellen eine fundierte Marktanalyse, damit Sie eine solide Grundlage fuer Ihre Entscheidung haben.",
  },
  {
    question: "Wie erzielen Sie +30.000 EUR mehr als andere?",
    answer:
      "Unsere Kombination aus datenbasierter Preisfindung, professioneller Vermarktung mit hochwertigen Fotos und virtuellen Rundgaengen, einem exklusiven Kaeufernetzwerk mit ueber 5.000 Interessenten und strategischer Verhandlungsfuehrung sorgt nachweislich fuer hoehere Verkaufspreise.",
  },
  {
    question: "Wie lange dauert der Verkauf?",
    answer:
      "Im Durchschnitt verkaufen wir Immobilien in weniger als 90 Tagen. Durch unsere gezielte Vermarktung und unser grosses Netzwerk finden wir schnell die richtigen Kaeufer fuer Ihre Immobilie.",
  },
  {
    question: "Muss ich mich sofort entscheiden?",
    answer:
      "Nein, absolut nicht. Nach der kostenlosen Bewertung haben Sie alle Zeit der Welt. Wir beraten Sie ausfuehrlich und Sie entscheiden ohne Druck, ob und wann Sie verkaufen moechten.",
  },
  {
    question: "In welcher Region sind Sie taetig?",
    answer:
      "Unser Schwerpunkt liegt im Ruhrgebiet und Nordrhein-Westfalen. Durch unser Netzwerk koennen wir jedoch auch ueberregional taetig werden. Sprechen Sie uns einfach an.",
  },
  {
    question: "Was unterscheidet Sie von anderen Maklern?",
    answer:
      "Transparenz, Ehrlichkeit und messbare Ergebnisse. Wir arbeiten nicht mit Lockvogelpreisen, sondern mit realistischen Marktanalysen. Unsere Provision ist erfolgsbasiert, das heisst: Verdienen tun wir nur, wenn Sie zufrieden sind.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <p className="text-sm font-sans font-semibold text-brand-blue uppercase tracking-wider mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight text-balance mb-6 tracking-wide">
              Haeufig gestellte Fragen
            </h2>
            <p className="text-lg font-sans text-white/60 leading-relaxed mb-8">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Verkauf Ihrer Immobilie mit uns.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[44px]"
            >
              Weitere Fragen? Kontaktieren Sie uns
            </a>
          </div>

          {/* Right column */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left font-sans text-white hover:text-brand-blue transition-colors text-base font-semibold py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-white/60 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
