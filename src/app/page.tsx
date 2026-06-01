import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introductionv2 from "@/sections/Introductionv2";
import Solutions from "@/sections/Solutions";
import WhoWeServe from "@/sections/WhoWeServe";
import WhyAnexra from "@/sections/WhyAnexra";
import HealthcarePartners from "@/sections/HealthcarePartners";
import VisionMission from "@/sections/VisionMission";
import Footer from "@/sections/Footer";

export default function Home() {
    return <>
        <Navbar/>
        <Hero/>
        <Introductionv2/>
        <Solutions/>
        <WhoWeServe/>
        <WhyAnexra/>
        <HealthcarePartners/>
        <VisionMission/>
        <Footer/>
    </>;
}
