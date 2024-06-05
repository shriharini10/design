import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      {/* Header of main page */}
      <div className={styles.header}>

        <div className={styles.brand}>
          <Image src={"/logo.svg"} alt={"MP4 NFT"} width={279} height={90} />
        </div>

        <div className={styles.search}>
          <Image src={"/search.svg"} alt={"search image"} width={24} height={24} />
          <input placeholder="Search Musicians, artists & more...." />
        </div>

        <div className={styles.menu}>

          <li><a>Home</a></li>
          <li><a>Create</a></li>
          <li><a>Collections</a></li>

        </div>

        <div className={styles.controls}>
          <button>0 Collectibles</button>
          <Image src={"/Ellipse 5.svg"} alt={"user picture"} width={40} height={40} />
        </div>

        <div className={styles.burger}>
          <Image src={"/hamburger.svg"} alt={"menu list"} width={24} height={24} />
        </div>

      </div>

      {/*Center content of main page*/}
      <div className={styles.centerpg}>
        <div className={styles.details}>

          <h2>Music Collectable's</h2>
          <h5>Find, Buy, Sell & Collect your Favorite Music Collectable.</h5>

        </div>

        <div className={styles.live_auc}>
          <p>View all live auctions</p>
        </div>
      </div>

      {/* auction list of main page */}
      <div className={styles.maingrid}>
        <div className={styles.row1}>


          <div className={styles.grid1}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/romanroom.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>The Roman Room</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>
          </div>

          <div className={styles.grid2}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid2.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Circle ArchiTexture</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>6h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>

          <div className={styles.grid3}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid3.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Man with love</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>

          <div className={styles.grid4}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid4.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Once in a blue neon</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>
        </div>

        <div className={styles.row2}>
          <div className={styles.grid5}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid5.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Analog Heartbreak</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>
          </div>

          <div className={styles.grid6}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid6.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Black Otaku</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Price    ETH 7.38</p>
              <p className={styles.amount}>= $ 15,889</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>

          <div className={styles.grid7}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid7.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>Mind Pleasure</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>

          <div className={styles.grid8}>
            <div className={styles.sec}>
              <div className={styles.create}>
                <div className={styles.createimage}>
                  <Image src={"/Ellipse 1.svg"} alt={"creator image"} width={34} height={34} />
                </div>

                <div className={styles.createdby}>
                  <p className={styles.writing1}>Created by</p>
                  <h4 className={styles.writing2}>#114TK6</h4>
                </div>

              </div>

              <div className={styles.sec_line}>

              </div>

              <div className={styles.own}>
                <div className={styles.ownedby}>
                  <p className={styles.writing3}>Owned by</p>
                  <h4 className={styles.writing4}>#223BV1</h4>
                </div>

                <div className={styles.ownimage}>
                  <Image src={"/Ellipse 2.svg"} alt={"owner image"} width={34} height={34} />
                </div>

              </div>


            </div>

            <div className={styles.mainimage}>
              <Image src={"/grid8.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div className={styles.picname}>GAINT ROBOT</div>
            <div className={styles.bid}>
              <p className={styles.currentbid}>Current bid    ETH 5.89</p>
              <p className={styles.amount}>= $ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p className={styles.hour}>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={20} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>

          </div>
        </div>


      </div>

      {/* loading more collectables... */}
      <div className={styles.loading}>
        <Image src={"/loading.svg"} alt={"loading image"} height={60} width={60} />
        <p>Loading more Collectables</p>
      </div>

      {/* moto of the page */}
      <div className={styles.moto}>
        
          <p>We are building the new economy for</p>
          <p>collecting music</p>
        
        <div className={styles.music}>
          <article>We're bringing Music creators, digital creators, crypto</article>
          <article>natives, and collectors together to move culture forward.</article>
        </div>
        <button>Sell your Music Collectable</button>
      </div>

      {/* footer of the page */}
      <div>
        
      </div>



    </div>




  );
}
