import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SolifyAvatar from "../assets/images/avatar_solify.png";
import MizFitPickleAvatar from "../assets/images/avatar_mizfit.png";
import ElicitAvatar from "../assets/images/avatar_elicit.png";

const Team: React.FC = () => {
  const ref = useScrollAnimation();
  const teamMembers = [
    {
      name: "MizFitPickle",
      role: "Founder & CEO",
      image: MizFitPickleAvatar,
      borderColor: "border-sky-500",
      roleColor: "text-sky-400"
    },
    {
      name: "Solify",
      role: "Co-Founder & Lead Developer",
      image: SolifyAvatar,
      borderColor: "border-emerald-500",
      roleColor: "text-emerald-400"
    },
    {
      name: "Elicit",
      role: "Marketing & Community Management",
      image: ElicitAvatar,
      borderColor: "border-indigo-500",
      roleColor: "text-indigo-400"
    }
  ];

  return (
    <section ref={ref} id="team" className="py-20 lg:py-32 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Meet the Founders
          </h2>
          <p className="text-gray-400 mb-12">
            The dedicated team behind the Dream mission, committed to transparency and community
            empowerment.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 rounded-2xl glass-effect text-center team-card w-full sm:w-64">
              <img 
                src={member.image} 
                alt={member.name}
                className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${member.borderColor}`}
              />
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className={`${member.roleColor} font-semibold`}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
