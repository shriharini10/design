import React from 'react';
import './Mob_home.css';

export default function page () {
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

            <button>Connect wallet</button>
        </div>
    );

}