'use client'
import React from 'react';
import './Account.css'

interface accountprops {
    closeOverlay : () => void;
}
const Account: React.FC <accountprops> = ({closeOverlay}) => { 
    return (
        <div className='account'>
            <div className='profile'>
                <img src='/account/profile.svg' alt='profile picture'/>
                <h5>0x2345DF2568</h5>
                <span><img src='/account/copy.svg' alt='copy button'/></span>
            </div>


            <p>Balance</p>


            <div className='price'>
                <h4>24 ETH</h4>
                <p>$23,876</p>
            </div>

            <div className='collectibles'>
                <p>Collectibles</p>
                <h4>0 Collectibles</h4>
            </div>

            <div className='line'>

            </div>

            <div className='bottom'>
                <div className='footpage'>
                    <p>Collections</p>
                    <p>Disconnect</p>
                </div>

                <span><img onClick={closeOverlay} src='/account/log-out.svg' alt='log out button'/></span>
            </div>
        </div>
    );
}

export default Account;