import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useWallet } from "../hooks/useWallet";

interface GovernanceProps {
  onProposalClick: () => void;
}

const Governance: React.FC<GovernanceProps> = ({ onProposalClick }) => {
  const ref = useScrollAnimation();
  const { address, isConnected, disconnect, formatAddress, openConnectModal } = useWallet();
  const proposals = [
    {
      title: "Select Initial Research Focus",
      description: "Vote on the primary mental health area (e.g., PTSD, TBI) for our first round of grant funding.",
      status: "Upcoming",
      forPercentage: 0,
      againstPercentage: 0
    },
    {
      title: "Ratify Grant Application Framework",
      description: "Vote on our grant selection principles: prioritize speed of impact or long-term innovative research?",
      status: "Upcoming",
      forPercentage: 0,
      againstPercentage: 0
    },
    {
      title: "Initial Marketing Channel Focus",
      description: "Vote on whether our initial marketing budget should focus on X (Twitter) influencers or grassroots Reddit campaigns.",
      status: "Upcoming",
      forPercentage: 0,
      againstPercentage: 0
    }
  ];

  return (
    <section ref={ref} id="governance" className="py-20 lg:py-32 bg-gray-900/50 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
            Community Governance
          </h2>
          <p className="text-gray-400 mb-8">
            Your voice matters. Vote on proposals that shape the future of the Dream project. Voting power
            is proportional to the amount of $DREAM you hold.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button onClick={onProposalClick}
              className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-opacity duration-300 transform hover:scale-105">
              ✨ Draft a Proposal with AI
            </button>
            {isConnected ? (
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm font-semibold">
                  Connected: {formatAddress(address!)}
                </div>
                <button 
                  onClick={() => disconnect()}
                  className="border-2 border-red-500 text-red-400 font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-500/20 transition-all duration-300"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={openConnectModal}
                className="border-2 border-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 pulse-button"
              >
                Connect Wallet to Vote
              </button>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {proposals.map((proposal, index) => (
            <div key={index} className="p-8 rounded-2xl glass-effect proposal-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{proposal.title}</h3>
                <span className="bg-sky-500/20 text-sky-400 text-xs font-semibold px-3 py-1 rounded-full">
                  {proposal.status}
                </span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">{proposal.description}</p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-emerald-400 font-semibold">For</span>
                    <span className="text-gray-300">--%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-emerald-500 h-2.5 rounded-full" 
                      style={{ width: `${proposal.forPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-red-400 font-semibold">Against</span>
                    <span className="text-gray-300">--%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: `${proposal.againstPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <button className="w-full bg-gray-600 text-gray-400 py-2 rounded-lg cursor-not-allowed">
                  Vote For
                </button>
                <button className="w-full bg-gray-600 text-gray-400 py-2 rounded-lg cursor-not-allowed">
                  Vote Against
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governance;
