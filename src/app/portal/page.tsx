import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import PortalHero from "@/sections/portal/PortalHero";
// import PortalGrid from "@/sections/portal/PortalGrid";
// import PortalInfo from "@/sections/portal/PortalInfo";

export default function PortalPage() {
  return (
    <>
      <Navbar />
      <PortalHero />
      {/* <PortalGrid />
      <PortalInfo /> */}
      <Footer />
    </>
  );
}