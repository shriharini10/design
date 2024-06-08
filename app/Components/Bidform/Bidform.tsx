import React from 'react'
import './Bidform.css'

export const Bidform = () => {
    return (
        <div className='bidpage'>
            <div className='topsection'>
                <span>
                    <img src='/bidform/bid_pic.svg' alt='bid picture'/>
                </span>

                <div className='details'>
                    <div className={'picname'}>Man with love</div>
                    <div className={'bid'}>
                        <p className={'currentbid'}>Current bid    ETH 5.89</p>
                        <p className={'amount'}>= $ 11,557</p>
                    </div>

                    <div className={'bid_end'}>
                        <p>Bid ending in</p>
                        <p className={'hour'}>12h 24m 36s</p>
                    </div>

                    <p>View Artifact</p>

                </div>

                <span className='cross'><img src='/bidform/x-circle.svg' alt='close page'/></span>
            </div>

            <div className='middle'>
                <h3>Enter your bid details</h3>

                <div className='wallet_time'>
                    <div className='left'>
                        <p>Wallet address</p>
                        <h4>0x..1234BGHC@45</h4>
                        <p>Bid amount</p>
                    </div>

                    <div className='right'>
                        <p>Timestamp</p>
                        <h4>Mar 29 2021, 15:15 PM</h4>
                    </div>

                </div>

                <div className='amt_button'>
                    <img src='/bidform/bigbutton.svg' alt='bid button' height={37} width={400}/>
                    <img src='/bidform/smallbutton.svg' alt='ETH button' height={37} />    
                </div>


                {/* mobile media query */}
                <div className='mob_amt_button'>
                    <img src='/bidform/mob_bigbutton.svg' alt='bid button' />
                    <img src='/bidform/mob_smallbutton.svg' alt='ETH button'  />    
                </div>



                <p>Service fee 2.5% You will receive 8.6 ETH =$14,263</p>

                <button> Place Bid </button>
            </div>



        </div>

    );
}