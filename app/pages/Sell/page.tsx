'use client'
import React, {useState} from 'react';
import './Sell.css';
import Auction from '@/app/overlay/Sellon_auction/page'

export default function Sell() {
    const [initial, update] = useState(false);

    const overlay = () => {
        update(true)
    }

    return (

        <div>
            <div className='main'>
                <h5>Find, Buy, Bid, Sell & Collect your Favorite Music Collectable</h5>

                <div className='row1'>


                    <div className='grid1'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/grid1.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>The Roman Room</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>12h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>
                    </div>

                    <div className='grid2'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/grid2.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>Circle ArchiTexture</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>6h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>

                    <div className='grid3'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className={'ownedby'}>
                                    <p className={'writing3'}>Owned by</p>
                                    <h4 className={'writing4'}>#223BV1</h4>
                                </div>

                                <div className={'ownimage'}>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className={'mainimage'}>
                            <img src={"/sell/grid3.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className={'picname'}>Man with love</div>
                        <div className={'bid'}>
                            <p className={'currentbid'}>Current bid    ETH 5.89</p>
                            <p className={'amount'}>= $ 11,557</p>
                        </div>

                        <div className={'bid_end'}>
                            <p>Bid ending in</p>
                            <p className={'hour'}>12h 24m 36s</p>
                        </div>

                        <div className={'history'}>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>

                    <div className={'grid4'}>
                        <div className={'sec'}>
                            <div className={'create'}>
                                <div className={'createimage'}>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className={'createdby'}>
                                    <p className={'writing1'}>Created by</p>
                                    <h4 className={'writing2'}>#114TK6</h4>
                                </div>

                            </div>

                            <div className={'sec_line'}>

                            </div>

                            <div className={'own'}>
                                <div className={'ownedby'}>
                                    <p className={'writing3'}>Owned by</p>
                                    <h4 className={'writing4'}>#223BV1</h4>
                                </div>

                                <div className={'ownimage'}>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className={'mainimage'}>
                            <img src={"/sell/grid4.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className={'picname'}>Once in a blue neon</div>
                        <div className={'bid'}>
                            <p className={'currentbid'}>Current bid    ETH 5.89</p>
                            <p className={'amount'}>= $ 11,557</p>
                        </div>

                        <div className={'bid_end'}>
                            <p>Bid ending in</p>
                            <p className={'hour'}>12h 24m 36s</p>
                        </div>

                        <div className={'history'}>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>
                </div>

                <div className='row2'>


                    <div className='grid5'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/grid5.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>Analog Heartbreak</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>12h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>
                    </div>

                    <div className='grid6'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/grid6.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>Circle ArchiTexture</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>6h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>
                </div>

                {/* moto of the page */}
                <div className={'moto'}>

                    <p>We are building the new economy for</p>
                    <p>collecting music</p>

                    <div className={'music'}>
                        <article>We’re bringing Music creators, digital creators, crypto</article>
                        <article>natives, and collectors together to move culture forward.</article>
                    </div>
                    <button>Sell your Music Collectable</button>
                </div>
            </div>

            {/* media query for mobile */}

            <div className='mob_main'>
                <h5>Find, Buy, Bid, Sell & Collect your Favorite Music Collectable</h5>

                <div className='mob_row1'>


                    <div className='mob_grid1'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/mobgrid1.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>Multi Verge</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>12h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>
                    </div>

                    <div className='mob_grid2'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className='ownedby'>
                                    <p className='writing3'>Owned by</p>
                                    <h4 className='writing4'>#223BV1</h4>
                                </div>

                                <div className='ownimage'>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className='mainimage'>
                            <img src={"/sell/mobgrid2.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className='picname'>Frizbie</div>
                        <div className='bid'>
                            <p className='currentbid'>Current bid    ETH 5.89</p>
                            <p className='amount'>= $ 11,557</p>
                        </div>

                        <div className='bid_end'>
                            <p>Bid ending in</p>
                            <p className='hour'>6h 24m 36s</p>
                        </div>

                        <div className='history'>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>

                    <div className='mob_grid3'>
                        <div className='sec'>
                            <div className='create'>
                                <div className='createimage'>
                                    <img src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                                </div>

                                <div className='createdby'>
                                    <p className='writing1'>Created by</p>
                                    <h4 className='writing2'>#114TK6</h4>
                                </div>

                            </div>

                            <div className='sec_line'>

                            </div>

                            <div className='own'>
                                <div className={'ownedby'}>
                                    <p className={'writing3'}>Owned by</p>
                                    <h4 className={'writing4'}>#223BV1</h4>
                                </div>

                                <div className={'ownimage'}>
                                    <img src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                                </div>

                            </div>


                        </div>

                        <div className={'mainimage'}>
                            <img src={"/sell/mobgrid3.svg"} alt={"roman image"} width={260} height={217} />
                        </div>

                        <div className={'picname'}>Prizma</div>
                        <div className={'bid'}>
                            <p className={'currentbid'}>Current bid    ETH 5.89</p>
                            <p className={'amount'}>= $ 11,557</p>
                        </div>

                        <div className={'bid_end'}>
                            <p>Bid ending in</p>
                            <p className={'hour'}>12h 24m 36s</p>
                        </div>

                        <div className={'history'}>
                            <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
                            <p>View History</p>
                            <button>Sell on Auction</button>
                        </div>

                    </div>
                </div>

                {/* moto of the page */}
                <div className={'moto'}>

                    <p><strong>We are building the new economy for</strong></p>
                    <p><strong>collecting music</strong></p>

                    <div className={'music'}>
                        <article>We’re bringing Music creators, digital creators, crypto </article>
                        <article>natives, and collectors together to move culture forward.</article>
                    </div>
                    <button>Sell your Music Collectable</button>
                </div>
            </div>

            {initial && (
                <div className='overlay'>
                    < Auction />
                </div>
            )}
        </div>
                )
}