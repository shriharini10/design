import Image from "next/image";

import { Header } from "./Components/Header/Header";
//import styles from './page.module.css'
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Components/Footer/Footer";
import { Search } from "./Components/Search/Search";
import { Create_preview } from "./Components/Create_preview/Create_preview";
import { Create } from "./Components/Create/Create";
import { Full_auctionlist } from "./Components/Full_auctionlist/Full_auctionlist";
import { Art_details } from "./Components/Art_details/Art_details";
import { Sell } from "./Components/Sell/Sell";
import { Wallet } from "./Components/Wallet/Wallet";
import { Bidform } from "./Components/Bidform/Bidform";
import { Account } from "./Components/Account/Account";
import { Sellon_auction } from "./Components/Sellon_auction/Sellon_auction";
import { Success } from "./Components/Success/Success";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero />
    {/* <Search/> */}
    {/* <Create_preview/> */}
    {/* <Create/> */}
    {/* <Full_auctionlist /> */}
    {/* <Art_details /> */}
    {/* <Sell /> */}
    <Footer/>

    {/* <Wallet /> */}
    {/* <Bidform /> */}
    {/* <Account /> */}
    {/* <Sellon_auction /> */}
    {/* <Success /> */}
    
    </>



  );
}
