import React, { useState } from "react";

interface DreamAvatarProps {
  onDreamClick: () => void;
}

const DreamAvatar: React.FC<DreamAvatarProps> = ({ onDreamClick }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <div id="dream-avatar-container" onClick={onDreamClick}>
      <svg 
        id="dream-avatar" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setIsChatVisible(!isChatVisible)}
        className="cursor-pointer"
      >
        <defs>
          <radialGradient id="cloudGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#38bdf8", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#0ea5e9", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        {/* Cloud body */}
        <ellipse cx="50" cy="65" rx="35" ry="20" fill="url(#cloudGradient)" />
        {/* Cloud puffs */}
        <circle cx="25" cy="55" r="15" fill="url(#cloudGradient)" />
        <circle cx="50" cy="45" r="18" fill="url(#cloudGradient)" />
        <circle cx="75" cy="55" r="15" fill="url(#cloudGradient)" />
        {/* Eyes */}
        <circle cx="42" cy="50" r="3" fill="#1f2937" />
        <circle cx="58" cy="50" r="3" fill="#1f2937" />
        {/* Smile */}
        <path d="M 40 60 Q 50 70 60 60" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default DreamAvatar;
