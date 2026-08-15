import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

import PortalHero from "@/sections/portal/PortalHero";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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