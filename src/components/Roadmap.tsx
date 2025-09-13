import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Roadmap: React.FC = () => {
  const ref = useScrollAnimation();
  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Project Inception",
      description: "Mission development, whitepaper creation, and core team assembly.",
      status: "completed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd" />
        </svg>
      ),
      color: "bg-emerald-500",
      textColor: "text-emerald-400"
    },
    {
      quarter: "Q3 2025 (Current)",
      title: "Token Launch & Community Growth",
      description: "Official contract deployment, public sale, and initial marketing push.",
      status: "current",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      color: "bg-sky-500",
      textColor: "text-sky-400",
      animate: "animate-pulse"
    },
    {
      quarter: "Q4 2025",
      title: "Platform Beta Launch",
      description: "Launch of the beta version of the decentralized platform for veteran support.",
      status: "upcoming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd" />
        </svg>
      ),
      color: "bg-gray-500",
      textColor: "text-gray-400"
    },
    {
      quarter: "Q1-Q2 2026",
      title: "Grant Program Rollout",
      description: "The first round of research grants are distributed to selected projects.",
      status: "upcoming",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      ),
      color: "bg-gray-500",
      textColor: "text-gray-400"
    }
  ];

  return (
    <section ref={ref} id="roadmap" className="py-20 lg:py-32 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Our Roadmap
          </h2>
          <p className="text-gray-400 mb-16">
            We're on a journey to redefine veteran wellness. Here's a look at our key milestones, past,
            present, and future.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto roadmap-line">
          {roadmapItems.map((item, index) => (
            <div key={index} className={`mb-12 md:flex items-center justify-between ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className={`p-6 rounded-lg glass-effect ${index % 2 === 1 ? 'text-left' : 'text-right'}`}>
                  <p className={`${item.textColor} font-semibold mb-1`}>{item.quarter}</p>
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              <div className={`absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 w-8 h-8 rounded-full ${item.color} border-4 border-gray-900 flex items-center justify-center text-white ${item.animate || ''}`}>
                {item.icon}
              </div>
              <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
