import React from 'react';
import './Account.css'
import Link from 'next/link';

export default function Account () {
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

                <Link href='/pages/Art_details'><span><img src='/account/log-out.svg' alt='log out button'/></span></Link>
            </div>
        </div>
    );
}
