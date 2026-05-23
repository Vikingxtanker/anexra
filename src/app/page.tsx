import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Solutions from "@/sections/Solutions";
import WhoWeServe from "@/sections/WhoWeServe";
import WhyAnexra from "@/sections/WhyAnexra";

export default function Home() {
    return <>
        <Navbar/>
        <Hero/>
        <Introduction/>
        <Solutions/>
        <WhoWeServe/>
        <WhyAnexra/>
    </>;
}
