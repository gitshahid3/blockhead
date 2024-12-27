import '../App.css'

function Home() {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Blockhead</h1>
            <div className="about">
                <p>
                    Blockhead is an innovative, decentralized payment processing system built on the Polygon blockchain. It leverages reputation-driven mechanisms, escrow functionality, and oracle integrations to provide safe, trustless crypto transactions. The system is designed to address disputes and ensure transparency, scalability, and robustness
                </p>
            </div>
            <p>
                Built on Polygon for low transaction fees and scalability. Token Support: Initially supports MATIC, with future considerations for multi-token integration. Philosophy: Open-source and permissionless, with a reputation system powered by oracles for dispute resolution and governance. Target Use Case: Marketplace transactions, invoice management for businesses, and decentralized payments.
            </p>
        </div>
    )
}

export default Home;
