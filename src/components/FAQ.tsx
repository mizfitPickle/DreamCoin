import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FAQ: React.FC = () => {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the primary mission of Dream?",
      answer: "The primary mission of Dream is to create a self-sustaining ecosystem that funds mental health research, advocates for holistic treatments, and provides direct support to the veteran community through a decentralized platform."
    },
    {
      question: "How can I get Dream tokens?",
      answer: "Dream tokens will be available during our public sale events. After the sale, they can be acquired on decentralized exchanges (DEXs). Follow our social media channels for announcements on listings."
    },
    {
      question: "How is the project governed?",
      answer: "Dream is a community-driven project. Major decisions regarding grants and platform development will be proposed and voted on by token holders, ensuring a decentralized and democratic governance structure."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="py-20 lg:py-32 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mb-12">
            Have questions? We have answers. If you can't find what you're looking for, join our community
            channels.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-effect rounded-lg faq-item">
              <button 
                className="faq-question w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`faq-answer px-6 pb-6 ${
                  openIndex === index ? 'open' : ''
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
