'use client'
import React,{useState} from 'react';
import './Header.css'
import Link from 'next/link';

import Account from '@/app/overlay/Account/page'

export default function Headerpage() {

  const [initial, update] = useState(false);

  const accountClick = () => {
    update(true);
  }

  const closeAccount = () => {
    update(false);
  }

  return (

    <div className='header'>

      <div className='brand'>
        <img src={"/logo.svg"} alt={"MP4 NFT"} width={279} height={90} />
      </div>


      <Link href='/pages/Search'><div className='search'>
        <img src={"/search.svg"} alt={"search image"} width={24} height={24} />
        <input placeholder="Search Musicians, artists & more...." />
      </div></Link>


      <div className='menu'>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/pages/Create_preview'>Create</Link></li>
          <li><Link href='/pages/Sell'>Collections</Link></li>
        </ul>
      </div>

      <div className='controls'>
        <button>0 Collectibles</button>
        <img onClick={accountClick} src={"/Ellipse 5.svg"} alt={"user picture"} width={40} height={40} />
      </div>

      <div className='burger'>
        <img src={"/hamburger.svg"} alt={"menu list"} width={24} height={24} />
      </div>

      {initial && (
        <div className='overlay'>
          < Account closeOverlay={closeAccount}/>
        </div>
      )}

    </div>
  );
}