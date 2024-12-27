import React, { useState, useEffect } from 'react';
import { getContract } from '../utils.js';
import { ethers } from 'ethers';

function Pay() {
    const queryParameters = new URLSearchParams(window.location.search);
    let id = queryParameters.get("id")
    const [paymentId, setPaymentId] = useState('');
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (id) {
            setPaymentId(id);
        }
    }, [id]);

    const handlePay = async () => {
        const contract = await getContract(window.ethereum);
        await contract.payInvoice(paymentId, {value: ethers.parseEther(amount)});
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Payment Page</h2>
            <p>Payment ID: {paymentId}</p>
            <label>
                Invoice ID:
                <input
                    type="text"
                    value={paymentId}
                    onChange={(e) => setPaymentId(e.target.value)}
                    style={{ marginLeft: '10px' }}
                />
            </label>
            <label>
                Amount:
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ marginLeft: '10px' }}
                />
            </label>
            <button onClick={handlePay} style={{ marginTop: '10px' }}>
                Pay
            </button>
        </div>
    );
}

export default Pay;
