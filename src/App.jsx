import { useState } from 'react'
import { useSDK } from "@metamask/sdk-react";
import './App.css'

function App() {
  const { sdk, connected, account } = useSDK();
  console.log(connected)

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  return (
    <>
      {!account && (
        <button onClick={connect}>
          Login via metamask
        </button>
      )}
      {connected && (
          <p>
            {account && `Connected account: ${account}`}
          </p>
      )}
      <h1>Blockhead</h1>
      <div className="about">
        <p>
        Blockhead is an innovative, decentralized payment processing system built on the Polygon blockchain. It leverages reputation-driven mechanisms, escrow functionality, and oracle integrations to provide safe, trustless crypto transactions. The system is designed to address disputes and ensure transparency, scalability, and robustness
        </p>
      </div>
      <p>
      Built on Polygon for low transaction fees and scalability. Token Support: Initially supports MATIC, with future considerations for multi-token integration. Philosophy: Open-source and permissionless, with a reputation system powered by oracles for dispute resolution and governance. Target Use Case: Marketplace transactions, invoice management for businesses, and decentralized payments.
      </p>
    </>
  )
}

export default App
