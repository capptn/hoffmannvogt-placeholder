import Image from "next/image"

const team = [
  {
    name: "David Bauer",
    role: "Geschaeftsfuehrer & Immobilienexperte",
    bio: "Seit ueber 12 Jahren in der Immobilienbranche taetig. Spezialisiert auf die Bewertung und den Verkauf von Wohnimmobilien in der Region. Ueber 300 erfolgreiche Verkaeufe.",
  },
  {
    name: "Bastian Reichert",
    role: "Vermarktung & Kundenbetreuung",
    bio: "Experte fuer digitale Immobilienvermarktung und persoenliche Kundenbetreuung. Sorgt dafuer, dass jede Immobilie die richtige Zielgruppe erreicht.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-brand-blue">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-sans font-semibold text-white/70 uppercase tracking-wider mb-4">
            Ihr Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight text-balance mb-6 tracking-wide">
            Die Koepfe hinter Hoffmann Vogt Immobilien
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Team image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto">
            <Image
              src="/images/team-office.jpg"
              alt="Das Team von Hoffmann Vogt Immobilien"
              fill
              className="object-cover"
            />
          </div>

          {/* Team members */}
          <div className="flex flex-col gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 flex-1 backdrop-blur-sm"
              >
                <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-sans text-white/80 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="font-sans text-white/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
