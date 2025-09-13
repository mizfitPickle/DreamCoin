import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-20 lg:py-32 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
              What is Dream?
            </h2>
            <p className="text-gray-400 mb-6">
              Dream is a groundbreaking cryptocurrency and decentralized platform built to serve the
              veteran community. We believe our heroes deserve access to all available holistic treatments
              for mental health issues like PTSD.
            </p>
            <p className="text-gray-400">
              Our mission is to provide a transparent and secure way to fund critical initiatives. The
              Dream token is the engine of this movement, empowering a community-driven project that gives
              veterans and their allies a powerful voice and a direct means to heal, advocate, and build a
              brighter future.
            </p>
            {/* Stats */}
            <div className="mt-12 flex justify-center md:justify-start space-x-8 text-center" id="stats-section">
              <div>
                <p className="text-2xl font-bold text-white">Pre-Launch</p>
                <p className="text-sky-400">Veterans Helped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Pre-Launch</p>
                <p className="text-sky-400">Grants Funded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-sky-400">Community Members</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-8 rounded-2xl glass-effect">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-sky-600 rounded-2xl blur opacity-20"></div>
              <img src="https://placehold.co/600x400/0a0a0a/38bdf8?text=Healing+Veterans"
                alt="Veteran Support Network" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
