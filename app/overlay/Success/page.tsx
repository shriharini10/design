'use client'
import React from 'react';
import './Success.css';
import Link from 'next/link';

export default function Success () {
    return (
        <div className='success'>
            <span><img src='/success/success.svg' alt='success message'/></span>

            <h4>Congratulations</h4>

            <p>Your craft has been uploaded and can be found under Music Collection in your profile.</p>

            <Link href='/pages/Create'><button className='done_button'>Done for now</button></Link>
        </div>

    );
}
