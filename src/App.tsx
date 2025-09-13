import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Team from './components/Team'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Governance from './components/Governance'
import FAQ from './components/FAQ'
import Community from './components/Community'
import Footer from './components/Footer'
import DreamAvatar from './components/Avatar'
import { WhitepaperModal, ProposalModal } from './components/Modal'
import './App.css'

function App() {
  const [isWhitepaperOpen, setWhitepaperOpen] = useState(false)
  const [isProposalOpen, setProposalOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero onWhitepaperClick={() => setWhitepaperOpen(true)} />
        <About />
        <Features />
        <Team />
        <Tokenomics />
        <Roadmap />
        <Governance onProposalClick={() => setProposalOpen(true)} />
        <FAQ />
        <Community />
      </main>
      <Footer />
      <DreamAvatar />
      
      <WhitepaperModal 
        isOpen={isWhitepaperOpen} 
        onClose={() => setWhitepaperOpen(false)} 
      />
      <ProposalModal 
        isOpen={isProposalOpen} 
        onClose={() => setProposalOpen(false)} 
      />
    </>
  )
}

export default App;