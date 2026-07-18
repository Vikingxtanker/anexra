"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const PharmaConnectModal = dynamic(
  () => import("@/components/pharma-connect-modal"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function HeroCTA() {
  const [open, setOpen] = useState(false);
  const [shouldLoadModal, setShouldLoadModal] = useState(false);

  return (
    <>
      <div className="mt-12 flex flex-col items-center gap-5">
        <Button
          onClick={() => {
            setShouldLoadModal(true);
            setOpen(true);
          }}
          size="lg"
          className="..."
        >
          Join Pharma Connect
        </Button>

        <p className="mt-4 text-sm sm:text-base text-[#564740]/70 max-w-xl text-center">
          Connect with pharmacy students, graduates, educators, and healthcare
          professionals across India.
        </p>
      </div>

      {shouldLoadModal && (
        <PharmaConnectModal
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen);

            if (!isOpen) {
              setShouldLoadModal(false);
            }
          }}
        />
      )}
    </>
  );
}