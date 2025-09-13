import React, { useState } from "react";

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop visible" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Dream Protocol Whitepaper</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <div className="whitepaper-content text-gray-300 max-h-96 overflow-y-auto">
          <h2 className="text-xl font-bold text-white mb-4">Abstract</h2>
          <p className="mb-4">
            The Dream Protocol is a decentralized, community-governed ecosystem built on the Ethereum blockchain,
            designed to address the critical gaps in mental health support for military veterans. Utilizing the
            $DREAM utility token, the protocol will fund innovative research, champion advocacy for holistic
            treatments, and build a self-sustaining platform dedicated to veteran wellness. Our mission is to
            empower a global community of supporters to directly contribute to healing the heroes who have
            served.
          </p>

          <h2 className="text-xl font-bold text-white mb-4">1. The Problem: A Crisis in Veteran Mental Health</h2>
          <p className="mb-4">
            Upon returning to civilian life, a significant number of veterans face formidable challenges related
            to their mental health. Conditions such as Post-Traumatic Stress Disorder (PTSD), Traumatic Brain
            Injury (TBI), and chronic pain are prevalent, yet access to effective, modern, and holistic
            treatment options remains severely limited. Current centralized systems are often slow,
            bureaucratic, and underfunded, failing to explore or provide access to promising alternative
            therapies. This leaves millions of veterans without the support they need and deserve, creating a
            cycle of suffering that affects individuals, families, and communities.
          </p>

          <h2 className="text-xl font-bold text-white mb-4">2. The Solution: The Dream Protocol</h2>
          <p className="mb-4">
            The Dream Protocol introduces a transparent, decentralized, and community-driven solution to this
            crisis. By leveraging blockchain technology, we can create a self-sustaining ecosystem that directs
            funds and resources where they are most needed, free from the inefficiencies of traditional systems.
            The protocol is built on three core pillars: <strong>Decentralized Grant Funding</strong>,
            <strong>Community Governance (DAO)</strong>, and a <strong>Future Wellness Marketplace</strong>.
          </p>

          <h2 className="text-xl font-bold text-white mb-4">3. The $DREAM Tokenomics</h2>
          <p className="mb-4">
            The $DREAM token is the utility token that powers the entire ecosystem. It is an ERC-20 token on the
            Ethereum blockchain with a fixed total supply.
          </p>
          <p className="mb-2"><strong>Total Supply:</strong> 1,000,000,000 $DREAM</p>
          <p className="mb-4">
            <strong>Token Distribution:</strong><br />
            - <strong>80% - Public Sale:</strong> The majority of tokens are allocated to the community through
            a public sale, ensuring a wide, fair, and decentralized distribution.<br />
            - <strong>20% - Project & Ecosystem Fund:</strong> These tokens are held in a multi-signature
            treasury wallet, managed by the DAO, to fund development, marketing, and research grants.
          </p>
          <p className="mb-4">
            <strong>Token Utility:</strong> The primary utility of the $DREAM token is
            <strong>governance</strong>. It grants holders the right to create proposals and vote on all key
            decisions within the Dream ecosystem.
          </p>

          <h2 className="text-xl font-bold text-white mb-4">4. Roadmap</h2>
          <p className="mb-4">
            <strong>Q2 2025:</strong> Project Inception, whitepaper creation, and core team assembly.<br />
            <strong>Q3 2025:</strong> Token Launch & Community Growth on decentralized exchanges.<br />
            <strong>Q4 2025:</strong> Platform Beta Launch for governance and grant proposals.<br />
            <strong>Q1-Q2 2026:</strong> Grant Program Rollout and distribution of first grants.
          </p>

          <h2 className="text-xl font-bold text-white mb-4">5. Founding Team</h2>
          <p className="mb-4">
            <strong>MizFitPickle:</strong> Founder & CEO<br />
            <strong>Solify:</strong> Co-Founder & Lead Developer<br />
            <strong>Elicit:</strong> Marketing & Community Management
          </p>

          <h2 className="text-xl font-bold text-white mb-4">6. Disclaimer</h2>
          <p className="mb-4">
            The $DREAM token is a utility token intended to be used for governance within the Dream Protocol
            ecosystem. It is not a security or an investment vehicle. The information in this document is for
            informational purposes only and does not constitute financial advice. The value of cryptocurrencies
            is volatile and can go down as well as up. Please conduct your own research before participating in
            the Dream Protocol.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [idea, setIdea] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const generateProposal = async () => {
    if (!idea.trim()) {
      alert('Please enter your proposal idea first.');
      return;
    }

    setIsGenerating(true);
    setShowOutput(false);

    try {
      // Note: In a real implementation, you would need to add your Gemini API key
      const apiKey = ""; // Add your Gemini API key here
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      const systemPrompt = "You are a helpful assistant for a decentralized autonomous organization (DAO) called 'Dream' which is focused on veteran wellness and mental health. A community member wants to create a funding proposal. Their idea is provided below. Draft a formal, well-structured proposal based on their idea. The proposal must include the following sections, each clearly marked: a 'Proposal Title', a one-paragraph 'Summary', a 'Detailed Description' of the initiative, a section for the 'Proposed Budget & Timeline', and a final section on the 'Expected Impact' on the veteran community. The tone should be professional, clear, persuasive, and ready for a community vote.";
      
      const payload = {
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: `Here is the user's idea: "${idea}"` }] }]
      };

      if (!apiKey) {
        setOutput("Please add your Gemini API key to use this feature. The generated proposal would appear here.");
        setShowOutput(true);
        return;
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setOutput(generatedText);
      } else {
        setOutput("Sorry, I couldn't generate a proposal. Please try again with a different idea.");
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setOutput(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please check the console and try again.`);
    } finally {
      setIsGenerating(false);
      setShowOutput(true);
    }
  };

  const copyProposal = () => {
    navigator.clipboard.writeText(output).then(() => {
      // You could add a toast notification here
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop visible" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">✨ AI Proposal Assistant</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <p className="text-gray-400 mb-6">
          Have an idea to help the community? Describe it below, and our AI assistant,
          powered by Gemini, will help you draft a formal proposal.
        </p>

        <div>
          <label htmlFor="proposal-idea" className="block text-sm font-medium text-gray-300 mb-2">Your Idea:</label>
          <textarea 
            id="proposal-idea" 
            rows={3}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
            placeholder="e.g., Fund a wellness retreat for veterans in Colorado"
          />
        </div>

        <div className="mt-6">
          <button 
            onClick={generateProposal}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <div className="spinner"></div>
                <span>Generating...</span>
              </>
            ) : (
              <span>Generate Draft</span>
            )}
          </button>
        </div>

        {showOutput && (
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-300 mb-2">Generated Proposal:</label>
              <button 
                onClick={copyProposal}
                className="text-sm text-sky-400 hover:text-sky-300"
              >
                Copy Text
              </button>
            </div>
            <textarea 
              value={output}
              readOnly
              rows={10}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-300"
            />
            <p className="text-xs text-gray-500 mt-2">
              This is an AI-generated draft. Please review and edit it carefully before submitting to the DAO.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
