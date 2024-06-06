import Image from "next/image";

import { Header } from "./Components/Header/Header";
//import styles from './page.module.css'
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero />
    <Footer/>
    </>



  );
}
