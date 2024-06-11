'use client'
import React from 'react';
import './Success.css';

export default function Success () {
    return (
        <div className='success'>
            <span><img src='/success/success.svg' alt='success message'/></span>

            <h4>Congratulations</h4>

            <p>Your craft has been uploaded and can be found under Music Collection in your profile.</p>

            <button>Done for now</button>
        </div>

    );
}
