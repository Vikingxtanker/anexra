"use client";

import { useEffect, useState } from "react";

import Navbar from "@/sections/Navbar";

import Footer from "@/sections/Footer";

import JoinHero from "@/sections/pharma-connect/join/JoinHero";

import PharmaConnectModal from "@/components/pharma-connect-modal";

export default function PharmaConnectJoinClient() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <JoinHero
          onJoinClick={() => setOpen(true)}
        />
      </main>

      <Footer />

      <PharmaConnectModal
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}