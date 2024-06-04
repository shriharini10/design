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

            <div>
              <Image src={"/romanroom.svg"} alt={"roman image"} width={260} height={217} />
            </div>

            <div>The Roman Room</div>
            <div className={styles.bid}>
              <p>current bid ETH 5.89</p>
              <p>=$ 11,557</p>
            </div>

            <div className={styles.bid_end}>
              <p>Bid ending in</p>
              <p>12h 24m 36s</p>
            </div>

            <div className={styles.history}>
              <span><Image src={"/arrow.svg"} alt={"arrow button"} height={35} width={15} /></span>
              <p>View History</p>
              <button>Place Bid</button>
            </div>
          </div>

          <div className={styles.grid2}>

          </div>

          <div className={styles.grid3}>

          </div>

          <div className={styles.grid4}>

          </div>
        </div>

        <div className={styles.row2}>

        </div>
      </div>


    </div>




  );
}
