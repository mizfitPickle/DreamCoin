import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, arbitrum, polygon } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
const projectId = "ee112fc08367198d727b9b346d1ab941"

export const config = getDefaultConfig({
  appName: 'Dream Token',
  projectId,
  chains: [mainnet, sepolia, arbitrum, polygon],
  ssr: false, // If your dApp uses server side rendering (SSR)
})
