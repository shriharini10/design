import React from 'react'
import './Header.css'

export const Header = () => {
    return (

        <div className='header'>

        <div className='brand'>
          <img src={"/logo.svg"} alt={"MP4 NFT"} width={279} height={90} />
        </div>

        <div className='search'>
          <img src={"/search.svg"} alt={"search image"} width={24} height={24} />
          <input placeholder="Search Musicians, artists & more...." />
        </div>

        <div className='menu'>

          <li><a>Home</a></li>
          <li><a>Create</a></li>
          <li><a>Collections</a></li>

        </div>

        <div className='controls'>
          <button>0 Collectibles</button>
          <img src={"/Ellipse 5.svg"} alt={"user picture"} width={40} height={40} />
        </div>

        <div className='burger'>
          <img src={"/hamburger.svg"} alt={"menu list"} width={24} height={24} />
        </div>

      </div>
    );
}