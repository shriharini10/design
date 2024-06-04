import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      
      <div className={styles.header}>
        
        <div className={styles.brand}>
          <Image src={"/logo.svg"} alt ={"MP4 NFT"} width={279} height={90} />
        </div>

        <div className={styles.search}>
          <Image src={"/search.svg"} alt ={"search image"} width={24} height={24} />
          <input placeholder="Search Musicians, artists & more...." />
        </div>

        <div className={styles.menu}>
          
            <li><a>Home</a></li>
            <li><a>Create</a></li>
            <li><a>Collections</a></li>
          
        </div>

        <div className={styles.controls}>
          <button>0 Collectibles</button>
          <Image src={"/Ellipse 5.svg"} alt ={"user picture"} width={40} height={40} />
        </div>

        <div className={styles.burger}>
          <Image src={"/hamburger.svg"} alt ={"menu list"} width={24} height={24} />
        </div>

      </div>

      <div className={styles.details}>
        <h2>Music Collectable's</h2>
        <h5>Find, Buy, Sell & Collect your Favorite Music Collectable.</h5>
        <p>View all live auctions</p>
      </div>
      
    </div>
  );
}
