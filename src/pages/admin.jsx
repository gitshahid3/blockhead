import React, { useState } from 'react';
import { getContract } from '../utils.js';

const Admin = () => {
    const [admin, setAdmin] = useState('');
    const [fees, setFees] = useState('');
    const [releasePeriod, setReleasePeriod] = useState('');
    const [feeWallet, setFeeWallet] = useState('');
    const [pauseContract, setPauseContract] = useState('');

    const handleAdmin = async () => {
        const contract = await getContract(window.ethereum);
        await contract.transferOwnership(admin);
    };

    const handleFees = async () => {
        const contract = await getContract(window.ethereum);
        await contract.setFeeRate(fees * 100);
    };

    const handlePeriod = async () => {
        const contract = await getContract(window.ethereum);
        await contract.setReleasePeriod(releasePeriod);
    };

    const handleWallet = async () => {
        const contract = await getContract(window.ethereum);
        await contract.setEscrowWallet(feeWallet);
    };

    const handlePause = async () => {
        const contract = await getContract(window.ethereum);
        await contract.pauseSystem(pauseContract);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Panel</h2>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Set Admin:
                    <input
                        type="text"
                        value={admin}
                        onChange={(e) => setAdmin(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button
                    onClick={() => handleAdmin()}
                    style={{ marginLeft: '10px' }}
                >
                    Send
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Set Fees:
                    <input
                        type="text"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button
                    onClick={() => handleFees()}
                    style={{ marginLeft: '10px' }}
                >
                    Send
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Set Release Period:
                    <input
                        type="text"
                        value={releasePeriod}
                        onChange={(e) => setReleasePeriod(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button
                    onClick={() => handlePeriod()}
                    style={{ marginLeft: '10px' }}
                >
                    Send
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Set Fee Wallet:
                    <input
                        type="text"
                        value={feeWallet}
                        onChange={(e) => setFeeWallet(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button
                    onClick={() => handleWallet()}
                    style={{ marginLeft: '10px' }}
                >
                    Send
                </button>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    Pause Contract:
                    <input
                        type="text"
                        value={pauseContract}
                        onChange={(e) => setPauseContract(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
                <button
                    onClick={() => handlePause()}
                    style={{ marginLeft: '10px' }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Admin;
