import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CareerConnectHero from "@/sections/career-connect/CareerConnectHero";
import CareerConnectIntro from "@/sections/career-connect/CareerConnectIntro";
import MainServices from "@/sections/career-connect/MainServices";


export default function Home() {
    return <>
        <Navbar/>
        <CareerConnectHero/>
        <CareerConnectIntro/>
        <MainServices/>


        <Footer/>
      </>;
}
