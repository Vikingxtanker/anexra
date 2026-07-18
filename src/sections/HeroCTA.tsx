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
      {/* Pharma Connect CTA */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <Button
            type="button"
            onClick={() => {
              setShouldLoadModal(true);
              setOpen(true);
            }}
            size="lg"
            className="
              w-full
              max-w-sm
              h-14
              sm:h-16

              text-base
              sm:text-lg
              rounded-full
              bg-gradient-to-r
              from-[#aa6f73]
              to-[#c78d91]
              text-white
              font-semibold
              shadow-[0_10px_35px_rgba(170,111,115,0.35)]
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_15px_45px_rgba(170,111,115,0.5)]
              active:scale-95
            "
          >
            Join Pharma Connect
          </Button>

          <p
            className="
              mt-4
              text-sm sm:text-base
              text-[#564740]/70
              max-w-xl
              text-center
            "
          >
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
