'use client'

import { Web3Modal, wagmiConfig } from '../lib/wallet'
import { WagmiConfig } from 'wagmi'

export default function Providers({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
      <Web3Modal />
    </WagmiConfig>
  )
}
