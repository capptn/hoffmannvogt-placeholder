"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactModalProps = {
  buttonText: string;
};

export default function ContactModal({ buttonText }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button zum Öffnen */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg text-base font-sans font-semibold hover:bg-brand-blue-dark transition-colors min-h-[52px]"
      >
        {buttonText}
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl text-black font-semibold mb-6 text-center">
              Wie möchtest du uns kontaktieren?
            </h2>

            <div className="flex flex-col gap-4">
              {/* Mail */}
              <a
                href="mailto:sv@hoffmann-vogt.de"
                className="w-full text-center text-black font-semibold px-6 py-3 rounded-xl border border-black hover:bg-gray-300 hover:text-black transition"
              >
                📧 Per Mail
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/message/HH3TJDAG6FGEN1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 font-semibold rounded-xl bg-green-500 text-black hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
