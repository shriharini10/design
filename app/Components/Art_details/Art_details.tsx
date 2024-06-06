import React from 'react'
import './Art_details.css'

export const Art_details = () => {
    return (
        <div className='main'>

            <div className='picture'>
                <span className='picture1'><img src='/art/picture1.svg' alt='artifacts'/></span>
                <span className='picture2'><img src='/art/picture2.svg' alt='artifacts'/></span>

            </div>

            <div className='circle'>
                <div className='sec1'>
                    <h4>Circle ArchiTexture</h4>
                    <span><img src='/art/desc.svg' alt='artifacts'/></span>
                    <img src='/art/history.svg' alt='artifacts'/>

                </div>

                <div className='sec2'>
                    <div className='bid_box'>
                        <span><img src='/art/bidd.svg' alt='artifacts'/></span>
                        <button>Place your bid now</button>
                    </div>

                    <div className='bidders'>
                        <img src='/art/bidders.svg' alt='artifacts'/>
                    </div>

                </div>

            </div>
        </div>

    );
}