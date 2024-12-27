import { useSDK } from "@metamask/sdk-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        <div>
            <div style={{ textAlign: "center" }}>
                <nav>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/creator">Creator</Link>
                        </li>
                        <li>
                            <Link to="/pay">Pay</Link>
                        </li>
                    </ul>
                </nav>
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
            </div>{" "}
        </div>
    );
};

export default Header;