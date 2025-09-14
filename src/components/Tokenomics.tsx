import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const allocationData = {
  labels: [
    "Initial Liquidity",
    "Team & Advisors",
    "Private Sale & Early Investors",
    "Ecosystem & Community Fund",
    "Social Impact Fund"
  ],
  datasets: [
    {
      data: [1, 15, 10, 10, 64],
      backgroundColor: [
        "#34d399", // emerald-400
        "#38bdf8", // sky-400
        "#fbbf24", // amber-400
        "#a78bfa", // purple-400
        "#f472b6"  // pink-400
      ],
      borderColor: "#1f2937", // gray-900
      borderWidth: 3,
    }
  ]
};

const vesting = [
  {
    title: "Initial Liquidity",
    schedule: "All 10M tokens available at launch.",
    explanation: "Ensures immediate tradable supply for price discovery and user entry."
  },
  {
    title: "Team & Advisors",
    schedule: "6-month cliff, then linear release over 36 months.",
    explanation: "Long-term commitment with regular distribution after cliff."
  },
  {
    title: "Private Investors & Ecosystem Fund",
    schedule: "6-month cliff, then linear release over 24 months.",
    explanation: "Balances early ROI with ongoing development needs."
  },
  {
    title: "Ecosystem & Community Fund",
    schedule: "1-month cliff, then linear release over 12 months.",
    explanation: "Quick, controlled ecosystem bootstrap."
  },
  {
    title: "Social Impact Fund",
    schedule: "No time schedule; released via governance vote.",
    explanation: "Transparent distribution to partners for social good."
  },
  {
    title: "Access & Rewards Fund",
    schedule: "Released immediately at launch.",
    explanation: "Rapid rollout of rewards for early engagement."
  }
];

const Tokenomics: React.FC = () => (
  <section id="tokenomics" className="py-20 lg:py-32 bg-gray-900/50 fade-in-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text">
          Tokenomics for Dream (DMT)
        </h2>
        <p className="text-gray-400 mb-4">
          A transparent, community-focused token model for long-term growth and impact.
        </p>
        {/* Example image placeholder */}
        <img
          src="https://placehold.co/600x150?text=Dream+Tokenomics+Banner"
          alt="Tokenomics Banner"
          className="mx-auto rounded-lg shadow-lg mb-4"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Pie Chart & Allocation */}
        <div>
          <div className="flex flex-col items-center mb-8">
            <Pie data={allocationData} options={{
              plugins: {
                legend: { display: true, labels: { color: "#fff" } }
              }
            }} />
            <div className="mt-8 w-full">
              <h3 className="font-bold text-lg text-white mb-4">Token Allocation</h3>
              <ul className="divide-y divide-gray-700 text-gray-200">
                {allocationData.labels.map((label, i) => (
                  <li key={label} className="flex justify-between items-center py-2">
                    <span className="flex items-center">
                      <span
                        className="inline-block w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: allocationData.datasets[0].backgroundColor[i] }}
                      ></span>
                      {label}
                    </span>
                    <span className="font-bold">
                      {allocationData.datasets[0].data[i]}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-lg text-white mb-2">Token Details</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong>Name:</strong> Dream</li>
              <li><strong>Symbol:</strong> DMT</li>
              <li><strong>Total Supply:</strong> 1,000,000,000</li>
              <li><strong>Initial Supply:</strong> 10,000,000 DMT (1%)</li>
              <li><strong>Initial Price:</strong> $0.000026</li>
              <li><strong>Initial FDV:</strong> $26,000</li>
              <li><strong>Initial Investment (TVL):</strong> $260 ($130 ETH + $130 DMT)</li>
            </ul>
          </div>
          {/* Example additional image */}
          <img
            src="https://placehold.co/400x150?text=Token+Flow+Chart"
            alt="Token Flow Chart"
            className="mx-auto rounded-lg shadow"
          />
        </div>
        {/* Right: Vesting, Utility, and Rewards */}
        <div>
          <h3 className="font-bold text-lg text-white mb-4">Vesting Schedule</h3>
          <div className="space-y-4 mb-8">
            {vesting.map(v => (
              <div key={v.title} className="bg-gray-800/60 rounded-lg p-4">
                <h4 className="text-emerald-300 font-semibold">{v.title}</h4>
                <p className="text-gray-300 text-sm"><strong>Schedule:</strong> {v.schedule}</p>
                <p className="text-gray-400 text-xs"><em>{v.explanation}</em></p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-lg text-white mb-2">Utility & Purpose</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
            <li>
              <strong>Governance:</strong> DMT holders shape project direction through DAO voting. Proposals and decisions are made on-chain, ensuring true decentralization.
            </li>
            <li>
              <strong>Access & Rewards:</strong> DMT grants premium platform access and is used to reward users, encouraging active participation and engagement.
            </li>
          </ul>
          {/* Example image for rewards or governance */}
          <img
            src="https://placehold.co/400x120?text=Governance+Rewards"
            alt="Governance Rewards"
            className="mx-auto rounded-lg shadow mt-6"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Tokenomics;
