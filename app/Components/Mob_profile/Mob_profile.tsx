import React from 'react';
import './Mob_profile.css';

export const Mob_profile = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className='top'>
                    <img src='/mob_home/mp4-10 1.svg' alt='brand name' />

                    <img src='/mob_home/cross.svg' alt='to exit' />
                </div>
                <img src='/mob_home/search.svg' alt='search' />
            </div>

            <div className='controls'>
                <h2>Home</h2>
                <h2>Create</h2>
                <h2>Music Collection</h2>
            </div>

            <div className='account'>
                <div className='profile'>
                    <div className='first_row'>
                    <img src='/account/profile.svg' alt='profile picture' width={40} height={40} />
                    <span><img src='/account/mob_button.svg' alt='profile picture'/></span>
                    </div>

                    <div className='second_row'>
                    <h5>0x2345DF2568</h5>
                    <span><img src='/account/copy.svg' alt='copy button' /></span>
                    </div>
                </div>


                <p>Balance</p>


                <div className='price'>
                    <h4>24 ETH</h4>
                    <p>$23,876</p>
                </div>

                <div className='bottom'>
                    <div className='footpage'>
                        <p>Collections</p>
                        <p>Disconnect</p>
                    </div>

                    <span><img src='/account/log-out.svg' alt='log out button' /></span>
                </div>
            </div>
        </div>
    );
}
