import React from 'react'
import './Full_auctionlist.css'
import Link from 'next/link'

export default function page() {
    return (
    <div>
        <div className='centerpg'>
            <div className='details'>

                <h2>Music Collectable's</h2>
                <h5>Find, Buy, Sell & Collect your Favorite Music Collectable.</h5>

            </div>

            <div className='live_auc'>
                <p>View all live auctions</p>
            </div>
        </div>

      
      <div className='maingrid'>
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
              <img src={"/romanroom.svg"} alt={"roman image"} width={260} height={217} />
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
              <button>Place Bid</button>
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
              <img src={"/grid2.svg"} alt={"roman image"} width={260} height={217} />
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
              <button>Place Bid</button>
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
              <img src={"/grid3.svg"} alt={"roman image"} width={260} height={217} />
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
              <button>Place Bid</button>
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
              <img src={"/grid4.svg"} alt={"roman image"} width={260} height={217} />
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
              <button>Place Bid</button>
            </div>

          </div>
        </div>

        <div className={'row2'}>
          <div className={'grid5'}>
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
              <img src={"/grid5.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Analog Heartbreak</div>
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
              <button>Place Bid</button>
            </div>
          </div>

          <div className={'grid6'}>
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
              <img src={"/grid6.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Black Otaku</div>
            <div className={'bid'}>
              <p className={'currentbid'}>Price    ETH 7.38</p>
              <p className={'amount'}>= $ 15,889</p>
            </div>

            <div className={'bid_end'}>
              <p>Bid ending in</p>
              <p className={'hour'}>12h 24m 36s</p>
            </div>

            <div className={'history'}>
              <span><img src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>

          <div className={'grid7'}>
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
              <img src={"/grid7.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Mind Pleasure</div>
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
              <button>Place Bid</button>
            </div>

          </div>

          <div className={'grid8'}>
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
              <img src={"/grid8.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>GAINT ROBOT</div>
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
              <button>Place Bid</button>
            </div>

          </div>
        </div>

        <div className='row3'>


          <div className='grid9'>
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
              <img src={"/grid9.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className='picname'>I am worthy</div>
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
              <button>Place Bid</button>
            </div>
          </div>

          <div className='grid10'>
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
              <img src={"/grid10.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className='picname'>HOT SUGAR</div>
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
              <button>Place Bid</button>
            </div>

          </div>

          <div className='grid11'>
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
              <img src={"/grid11.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Multiverge</div>
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
              <button>Place Bid</button>
            </div>

          </div>

          <div className={'grid12'}>
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
              <img src={"/grid12.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Radioactive</div>
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
              <button>Place Bid</button>
            </div>

          </div>
        </div>

        <div className='row4'>


          <div className='grid13'>
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
              <img src={"/grid13.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className='picname'>Techno Astronaught</div>
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
              <button>Place Bid</button>
            </div>
          </div>

          <div className='grid14'>
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
              <img src={"/grid14.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className='picname'>Internet of Humans</div>
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
              <button>Place Bid</button>
            </div>

          </div>

          <div className='grid15'>
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
              <img src={"/grid15.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>THE GLITCH</div>
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
              <button>Place Bid</button>
            </div>

          </div>

          <div className={'grid16'}>
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
              <img src={"/grid16.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={'picname'}>Colorful World</div>
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
              <button>Place Bid</button>
            </div>

          </div>
        </div>




      </div>

      {/* view all auctions  */}
      <div className='view_all'>
        <button>View all live auctions</button>
      </div>

      {/* moto of the page */}
      <div className={'moto'}>

        <p>We are building the new economy for</p>
        <p>collecting music</p>

        <div className={'music'}>
          <article>We're bringing Music creators, digital creators, crypto</article>
          <article>natives, and collectors together to move culture forward.</article>
        </div>
        <Link href='/pages/Create_preview'><button className='styled_button'>Sell your Music Collectable</button></Link>
      </div>

    </div>
    );
}