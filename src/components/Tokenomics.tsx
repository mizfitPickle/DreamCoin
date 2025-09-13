import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Tokenomics: React.FC = () => {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} id="tokenomics" className="py-20 lg:py-32 bg-gray-900/50 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Tokenomics
          </h2>
          <p className="text-gray-400 mb-12">
            A simple and fair distribution designed for community growth and long-term project success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <svg className="w-64 h-64 md:w-80 md:h-80" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#1f2937" strokeWidth="12" />
              {/* Public Sale: 80% (272) */}
              <circle cx="60" cy="60" r="54" fill="none" stroke="#34d399" strokeWidth="12"
                strokeLinecap="round" strokeDasharray="272 340" transform="rotate(-90 60 60)" />
              {/* Project Fund: 20% (68) */}
              <circle cx="60" cy="60" r="54" fill="none" stroke="#38bdf8" strokeWidth="12"
                strokeLinecap="round" strokeDasharray="68 340" transform="rotate(198 60 60)" />
            </svg>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-emerald-400 mt-1.5 mr-4 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white text-lg">80% - Public Sale</h4>
                <p className="text-gray-400 text-sm">The majority of tokens are allocated to the community
                  through a public sale, ensuring a wide and decentralized distribution from day one.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-sky-400 mt-1.5 mr-4 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white text-lg">20% - Project & Ecosystem Fund</h4>
                <p className="text-gray-400 text-sm">Held in the project treasury to fund development,
                  marketing, research grants, and future ecosystem initiatives, governed by the
                  community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
