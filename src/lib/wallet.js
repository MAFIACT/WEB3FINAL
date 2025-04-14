'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/react'
import { EthereumClient } from '@web3modal/ethereum'
import { base } from 'wagmi/chains'

export const projectId = 'TON_PROJECT_ID' // remplace ici

const metadata = {
  name: 'Web3 Dashboard',
  description: 'Wallet & PNL on Base',
  url: 'https://web3modal.com',
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
