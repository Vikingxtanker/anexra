import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import AboutHero from "@/sections/about/AboutHero";
import WhoWeAre from "@/sections/about/WhoWeAre";
import VisionMission from "@/sections/VisionMission";
import WhyAnexra from "@/sections/WhyAnexra";
import Leadership from "@/sections/about/Leadership";
import AboutCTA from "@/sections/about/AboutCTA";

export default function Home() {
    return <>
        <Navbar/>
        <AboutHero/>
        <WhoWeAre/>
        <VisionMission/>
        <WhyAnexra/>
        <Leadership/>
        <AboutCTA/>

        <Footer/>
      </>;
}
