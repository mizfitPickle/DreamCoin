import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Mission" },
  { href: "#team", label: "Team" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#governance", label: "Governance" },
  { href: "#faq", label: "FAQ" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect ${
        scrolled ? "bg-black/80 shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.5 17.5c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5c-0.345 0-0.683 0.04-1.013 0.11C15.59 5.015 12.985 3 10 3c-3.585 0-6.5 2.915-6.5 6.5 0 0.445 0.045 0.885 0.13 1.31C2.125 11.235 1 12.765 1 14.5c0 2.485 2.015 4.5 4.5 4.5h12z" />
            </svg>
            <span className="text-2xl font-bold text-white">Dream</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-300 hover:text-sky-400 transition-colors">{l.label}</a>
            ))}
          </nav>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xCfAeC342FAbe4e88E9Cb911Ff85cb9f2cEfc058c"
            target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-block bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            Buy Dream
          </a>
          <button className="md:hidden text-white" onClick={() => setMobileOpen((v) => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${mobileOpen ? "" : "hidden"} md:hidden`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-800" onClick={() => setMobileOpen(false)}>{l.label}</a>
        ))}
        <a href="https://app.uniswap.org/#/swap?outputCurrency=0xCfAeC342FAbe4e88E9Cb911Ff85cb9f2cEfc058c"
          target="_blank" rel="noopener noreferrer"
          className="block py-3 px-4 text-center bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold rounded-lg m-2">
          Buy Dream
        </a>
      </div>
    </header>
  );
};

export default Header;
