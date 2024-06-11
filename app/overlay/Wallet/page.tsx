'use client'
import React,{useState} from 'react';
import './Wallet.css'
import Bid from '../../overlay/Bidform/page';

export default function page() {
    const [showWalletOverlay, setShowWalletOverlay] = useState(true);
    const [showBidOverlay, setShowBidOverlay] = useState(false);
    
    const handleConnectWallet = () => {
        setShowWalletOverlay(false);
        setShowBidOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowWalletOverlay(false);
        setShowBidOverlay(false);
    };

    return (
        <div>
            {showWalletOverlay && (
            <div className='foxy'>
                <img src='/wallet/fox.svg' alt='fox image'/>
                <p>Connect your Metamask Wallet to continue</p>
                <button className='connect' onClick={handleConnectWallet}>Connect Wallet</button>
            </div>
            )}

            {showBidOverlay && (
                <div className='overlay'>
                    <Bid onCloseOverlay={handleCloseOverlay} />
                </div>
            )}
           

            

        </div>
    );
}