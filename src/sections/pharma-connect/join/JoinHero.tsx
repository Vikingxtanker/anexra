"use client";

import { Button } from "@/components/ui/button";

interface JoinHeroProps {
  onJoinClick: () => void;
}

export default function JoinHero({
  onJoinClick,
}: JoinHeroProps) {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="max-w-3xl text-center">

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
          "
        >
          Join India's Pharmacy Network
        </h1>

        <p
          className="
            mt-6
            text-lg
            text-muted-foreground
          "
        >
          Connect with pharmacy students,
          graduates, educators and healthcare
          professionals across India.
        </p>

        <Button
          size="lg"
          className="
            mt-10
            h-14
            px-10
            text-lg
          "
          onClick={onJoinClick}
        >
          Click to Join
        </Button>

        <p
          className="
            mt-6
            text-sm
            text-muted-foreground
          "
        >
          Free to join • Open to D.Pharm,
          B.Pharm, M.Pharm & Pharm.D
          professionals
        </p>

      </div>
    </section>
  );
}