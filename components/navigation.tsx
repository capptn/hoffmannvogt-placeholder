"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "So funktioniert's", href: "#prozess" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

function MobileOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[#1565C0]"
      style={{
        zIndex: 9999,
        width: "100vw",
        height: "100dvh",
      }}
    >
      {/* Header with logo and close */}
      <div className="px-4 py-3 flex items-center justify-between">
        <a href="#" onClick={onClose} className="flex items-center gap-3">
          <Image
            src="https://hoffmannvogt.cloud.capptn-online.de/assets/2aeed44d-76bd-4b13-a22d-0caefd830ff2.png?width=290&format=webp"
            alt="Hoffmann Vogt Immobilien Logo"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </a>
        <button
          onClick={onClose}
          className="p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Navigation schliessen"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Centered links */}
      <div
        className="flex flex-col items-center justify-center gap-6 px-6"
        style={{ height: "calc(100dvh - 64px)" }}
      >
        <a
          href="mailto:sv@hoffmann-vogt.de"
          onClick={onClose}
          className="mt-4 bg-white text-[#1565C0] px-8 py-4 rounded-lg text-lg font-serif uppercase tracking-wider font-bold text-center hover:bg-white/90 transition-colors"
        >
          Kostenlose Bewertung
        </a>
      </div>
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll & update colors when mobile menu is open
  useEffect(() => {
    const html = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (isOpen) {
      html.style.overflow = "hidden";
      html.style.backgroundColor = "#1565C0";
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "#1565C0";
      if (themeColorMeta) themeColorMeta.setAttribute("content", "#1565C0");
    } else {
      html.style.overflow = "";
      html.style.backgroundColor = "";
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
      if (themeColorMeta) themeColorMeta.setAttribute("content", "#000000");
    }

    return () => {
      html.style.overflow = "";
      html.style.backgroundColor = "";
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
      if (themeColorMeta) themeColorMeta.setAttribute("content", "#000000");
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 ${scrolled ? "py-0" : "py-3"} flex items-center justify-between`}
        >
          <a href="#" className="flex items-center gap-3">
            <Image
              src="https://hoffmannvogt.cloud.capptn-online.de/assets/2aeed44d-76bd-4b13-a22d-0caefd830ff2.png?width=480&format=webp"
              alt="Hoffmann Vogt Immobilien Logo"
              width={240}
              height={65}
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-20" : "h-20 md:h-36"
              }`}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8"></div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:sv@hoffmann-vogt.de"
              className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-sans font-semibold hover:bg-brand-blue-dark transition-colors"
            >
              Kostenlose Bewertung
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Navigation schliessen" : "Navigation oeffnen"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay - portalled to document.body, outside of fixed nav */}
      {isOpen &&
        mounted &&
        createPortal(
          <MobileOverlay onClose={() => setIsOpen(false)} />,
          document.body,
        )}
    </>
  );
}
