import { ArrowRight, TrendingUp, Clock, Award } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hoffmannvogt.cloud.capptn-online.de/assets/8f26ccec-8f10-46d7-9800-0ad3a2df9e70.png?width=1920&format=webp"
          alt="Moderne Wohnimmobilie vor blauem Himmel"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Mobile layout: portrait fills bottom, text + button overlaid on top */}
        <div className="relative md:hidden min-h-screen">
          {/* Portrait - large, centered, anchored to bottom */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Image
              src="https://hoffmannvogt.cloud.capptn-online.de/assets/5c4455cb-f26d-4537-a678-e0aff4d841fe.png?width=1920&format=webp"
              alt="Ihr Immobilienexperte"
              width={400}
              height={530}
              className="h-[95vh] w-auto object-contain object-bottom"
              priority
            />
          </div>
          {/* Text + CTA overlaid on top of portrait */}
          <div className="relative z-10 flex flex-col justify-end h-screen ">
            <div className="pt-24">
              {/*<div className="backdrop-blur-xs w-full bg-black/20 px-6 py-4">*/}
              <div className=" w-full px-6 py-4">
                <h1 className="font-serif text-3xl font-bold text-white uppercase leading-[1.1] text-balance pb-3 tracking-wide  whiteTextShadow">
                  Sichern Sie sich jetzt hier Ihre kostenlose
                  Immobilienbewertung
                </h1>
                <h1 className="font-serif text-xl font-bold text-white uppercase leading-[1.1] text-balance mb-3 tracking-wide pl-6">
                  <span className="text-brand-blue highlight px-4 py-1">
                    {"EFH, MFH & Grundstücke."}
                  </span>
                </h1>
                <p className="text-base font-sans text-white leading-relaxed mb-4 whiteTextShadow font-bold">
                  Seit ueber 10 Jahren helfe ich Menschen dabei, die Welt der
                  Immobilien zu verstehen.
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg text-sm font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[44px]"
                >
                  Jetzt kostenlos bewerten lassen
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout: text left, portrait right */}
        <div className="hidden md:flex items-end justify-between">
          <div className="max-w-3xl pb-4 md:pb-8">
            <h1 className="font-serif md:text-3xl lg:text-5xl font-bold text-white uppercase leading-[1.1] text-balance pb-4 tracking-wide whiteTextShadow">
              Sichern Sie sich jetzt hier Ihre kostenlose Immobilienbewertung
              <br className="hidden md:block" />
            </h1>
            <h1 className="font-serif md:text-3xl lg:text-5xl font-bold text-white uppercase leading-[1.1] text-balance mb-6 tracking-wide">
              <span className="text-brand-blue highlight px-12 py-2">
                {"EFH, MFH & Grundstücke."}
              </span>
            </h1>
            <p className="text-2xl font-sans text-white leading-relaxed max-w-xl mb-10 whiteTextShadow">
              Seit ueber 10 Jahren helfe ich Menschen dabei, die Welt der
              Immobilien zu verstehen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="mailto:sv@hoffmann-vogt.de"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[52px]"
              >
                Jetzt kostenlos bewerten lassen
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 relative self-end -mb-4 lg:-mb-8 -mr-8 lg:-mr-16">
            <Image
              src="https://hoffmannvogt.cloud.capptn-online.de/assets/5c4455cb-f26d-4537-a678-e0aff4d841fe.png?width=1920&format=webp"
              alt="Ihr Immobilienexperte"
              width={420}
              height={560}
              className="h-[50vh] lg:h-[65vh] w-auto object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
