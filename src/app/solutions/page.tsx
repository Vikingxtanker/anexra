import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import SolutionsHero from "@/sections/solutions/SolutionsHero";
import Solutions from "@/sections/Solutions";
import SolutionsService from "@/sections/solutions/SolutionsService";

export default function Home() {
    return <>
        <Navbar/>
        <SolutionsHero/>
        <Solutions/>
        <SolutionsService/>

        <Footer/>
      </>;
}
