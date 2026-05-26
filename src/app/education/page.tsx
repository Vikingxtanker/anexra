import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import EducationHero from "@/sections/education/EducationHero";
import DegreeCards from "@/sections/education/DegreeCards";
import EducationFeatures from "@/sections/education/EducationFeatures";
import Stats from "@/sections/education/Stats";
// import SemesterSection from "@/sections/education/SemesterSection";
// import CTA from "@/sections/education/CTA";


export default function Home() {
    return <>
        <Navbar/>
        <EducationHero/>
        <DegreeCards />
        <EducationFeatures />
        <Stats />
        {/* <SemesterSection />
        <CTA /> */}
        <Footer/>
      </>;
}
