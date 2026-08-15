import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import CareerConnectHero from "@/sections/career-connect/CareerConnectHero";
import CareerConnectIntro from "@/sections/career-connect/CareerConnectIntro";
import MainServices from "@/sections/career-connect/MainServices";


// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;


export default function Home() {
    return <>
        <Navbar/>
        <CareerConnectHero/>
        <CareerConnectIntro/>
        <MainServices/>


        <Footer/>
      </>;
}
