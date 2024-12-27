import React, { useState } from 'react';
import { getContract } from '../utils.js';

function Creator() {
  const [amount, setAmount] = useState('');
  const [expiry, setExpiry] = useState('');
  const [releaseAddress, setReleaseAddress] = useState('');
  const [invoiceId, setInvoiceId] = useState('');
  const [invoice2Id, setInvoice2Id] = useState('');

  const handlePay = async () => {
    const contract = await getContract(window.ethereum);
    await contract.createInvoice(amount, expiry, releaseAddress);
  };

  const handleAccept = async () => {
    const contract = await getContract(window.ethereum);
    await contract.acceptInvoice(invoiceId);
  };

  const handleCancel = async () => {
    const contract = await getContract(window.ethereum);
    await contract.cancelInvoice(invoice2Id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Invoice Creator</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Pay Section</h3>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <label>
          Expiry:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <label>
          Release Address:
          <input
            type="text"
            value={releaseAddress}
            onChange={(e) => setReleaseAddress(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button onClick={handlePay}>Pay</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Accept Section</h3>
        <label>
          Invoice ID:
          <input
            type="text"
            value={invoiceId}
            onChange={(e) => setInvoiceId(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button onClick={handleAccept}>Accept</button>
      </div>

      <div>
        <h3>Cancel Section</h3>
        <label>
          Invoice ID:
          <input
            type="text"
            value={invoice2Id}
            onChange={(e) => setInvoice2Id(e.target.value)}
            style={{ marginLeft: '10px', marginRight: '10px' }}
          />
        </label>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Creator;
