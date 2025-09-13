import React, { useState } from "react";

interface HeroProps {
  onWhitepaperClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onWhitepaperClick }) => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopyAddress = () => {
    const contractAddress = "0xCfAeC342FAbe4e88E9Cb911Ff85cb9f2cEfc058c";
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopyMessage("Copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000);
    }).catch(() => {
      setCopyMessage("Failed to copy!");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto hero-animated">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Healing Our Heroes Through Community & Innovation
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Dream is a community-driven project dedicated to funding mental health research and providing
            holistic support for veterans.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xCfAeC342FAbe4e88E9Cb911Ff85cb9f2cEfc058c"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Buy Dream Token
          </a>
          <button onClick={onWhitepaperClick}
            className="border-2 border-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-800 hover:border-gray-800 transition-all duration-300">
            Read Whitepaper
          </button>
        </div>
        <div className="mt-12">
          <p className="text-gray-400 text-sm mb-2">Official Contract Address</p>
          <div className="relative max-w-md mx-auto glass-effect rounded-lg p-3 flex items-center justify-between">
            <input 
              type="text" 
              readOnly
              value="0xCfAeC342FAbe4e88E9Cb911Ff85cb9f2cEfc058c"
              className="bg-transparent text-gray-300 w-full outline-none pr-12 text-center md:text-left"
            />
            <button onClick={handleCopyAddress}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <p className="text-emerald-400 text-sm mt-2 h-4">{copyMessage}</p>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500 rounded-full opacity-10 filter blur-3xl hero-glow"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500 rounded-full opacity-10 filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
