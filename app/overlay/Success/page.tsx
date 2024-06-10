'use client'
import React from 'react';
import './Success.css';

interface SuccessProps {
    onCloseOverlay: () => void;
}

const Success: React.FC<SuccessProps> = ({ onCloseOverlay }) => {
    return (
        <div className='success'>
            <span><img src='/success/success.svg' alt='success message'/></span>

            <h4>Congratulations</h4>

            <p>Your craft has been uploaded and can be found under Music Collection in your profile.</p>

            <button onClick={onCloseOverlay}>Done for now</button>
        </div>

    );
}

export default Success;