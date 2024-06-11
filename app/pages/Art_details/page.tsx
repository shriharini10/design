'use client'
import React, {useState} from 'react';
import './Art_details.css'
import Wallet from '../../overlay/Wallet/page';

export default function Art_details() {
    const [showOverlay, setShowOverlay] = useState(false);

    const placeBid = () => {
        setShowOverlay(true);
    }
    
    return (

        <div>
            <div className='main'>

                <div className='picture'>
                    <span className='picture1'><img src='/art/picture1.svg' alt='artifacts' /></span>
                    <span className='picture2'><img src='/art/picture2.svg' alt='artifacts' /></span>
                </div>

                <div className='circle'>
                    <div className='sec1'>
                        <h4>Circle ArchiTexture</h4>
                        <span><img src='/art/desc.svg' alt='artifacts' /></span>
                        <img src='/art/history.svg' alt='artifacts' />

                    </div>

                    <div className='sec2'>
                        <div className='bid_box'>
                            <span><img src='/art/bidd.svg' alt='artifacts' /></span>
                            <button onClick={placeBid}>Place your bid now</button>
                        </div>

                        <div className='bidders'>
                            <img src='/art/bidders.svg' alt='artifacts' />
                        </div>

                    </div>

                </div>
            </div>

            {/* for mobile layout */}

            <div className='mobile'>

                <div className='mob_picture'>
                    <span className='mob_picture1'><img src='/art/mobile_art.svg' alt='artifacts' /></span>
                    <span className='mob_picture2'><img src='/art/picture2.svg' alt='artifacts' /></span>
                </div>

                <div className='circle'>
                    <div className='mob_sec1'>
                        <h4>Soilt ArchiTexture</h4>
                        <span><img src='/art/mob_desc.svg' alt='artifacts' /></span>
                        

                    </div>

                    <div className='sec2'>
                        <div className='mob_bid_box'>
                            <span><img src='/art/mob_bidd.svg' alt='artifacts' /></span>
                            <button onClick={placeBid}>Place your bid now</button>
                        </div>

                        <div className='bidders'>
                            <img src='/art/mob_bidder1.svg' alt='artifacts' />
                            <img src='/art/mob_bidder2.svg' alt='artifacts' />

                        </div>

                        <div className='history'>
                            <img src='/art/mob_history.svg' alt='history of bidders' />
                        </div>

                    </div>

                </div>
            </div>

            {showOverlay && (
                <div className='overlay'>
                    <Wallet />
                </div>
            )}


        </div>

    );
}