'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { EthereumClient } from '@web3modal/ethereum'
import { base } from 'wagmi/chains'

export const projectId = 'TON_PROJECT_ID' // remplace par le tien

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Wallet & PNL on Base',
  url: 'https://my-web3-dashboard.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const wagmiConfig = defaultWagmiConfig({
  chains: [base],
  projectId,
  metadata
})

export const ethereumClient = new EthereumClient(wagmiConfig, [base])

createWeb3Modal({
  wagmiConfig,
  chains: [base],
  projectId
})
