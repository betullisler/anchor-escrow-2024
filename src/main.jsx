import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConnectionProvider, WalletProvider, } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from '@solana/web3.js';

const network = WalletAdapterNetwork.Devnet;

const endpoint = clusterApiUrl(network, "confirmed");

const wallets = [new PhantomWalletAdapter];

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConnectionProvider endpoint={endpoint}>

    <WalletProvider wallets={wallets} autoConnect >
      <App />
    </WalletProvider>
  </ConnectionProvider>
)

