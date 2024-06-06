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


export default function Home() {
  return (
    <>
    <Header/>
    {/* <Hero /> */}
    {/* <Search/> */}
    {/* <Create_preview/> */}
    {/* <Create/> */}
    {/* <Full_auctionlist /> */}
    <Art_details />
    <Footer/>
    
    </>



  );
}
