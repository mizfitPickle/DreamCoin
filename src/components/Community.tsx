import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Community: React.FC = () => {
  const ref = useScrollAnimation();
  const socialLinks = [
    {
      name: "X (formerly Twitter)",
      href: "https://x.com/DreamToken888",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Telegram",
      href: "https://t.me/Dream_Token_Official",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.62 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.51.71l-4.88-3.58-2.32 2.2c-.25.25-.47.47-.97.47l.35-4.95z" />
        </svg>
      )
    },
    {
      name: "Discord",
      href: "https://discord.gg/TFTcURyY",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.54 0c-1.35.66-2.9 1.4-4.2 1.95C13.57 1.27 12 1 12 1s-1.57.27-3.34.95c-1.3-.56-2.85-1.3-4.2-1.95A.4.4 0 004 0a14.7 14.7 0 00-3 6.13c0 4.86 3.06 8.9 7.03 10.45.6.24 1.14.4 1.63.53.03.02.06.03.08.04.16.08.33.15.5.2.14.05.28.08.42.12.18.04.36.08.53.1.32.04.64.06.96.06s.64-.02.96-.06c.17-.02.35-.06.53-.1.14-.04.28-.07.42-.12.17-.05.34-.12.5-.2.02-.01.05-.02.08-.04.5-.13 1.02-.3 1.63-.53 3.97-1.55 7.03-5.6 7.03-10.45A14.7 14.7 0 0020 0a.4.4 0 00-.46 0zM8.5 13.5C7.4 13.5 6.5 12.6 6.5 11.5S7.4 9.5 8.5 9.5s2 1 2 2-1 2-2 2zm7 0c-1.1 0-2-1-2-2s.9-2 2-2 2 1 2 2-1 2-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} id="community" className="py-20 lg:py-32 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-12 text-center rounded-2xl overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-sky-600/20 opacity-50"></div>
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Join the Dream Community</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Connect with veterans, supporters, and our team. Stay up to date with the latest news on
              research grants and platform developments.
            </p>
            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span className="mt-2 text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
