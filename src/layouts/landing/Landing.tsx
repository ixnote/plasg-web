import React from "react";
import Image from "next/image";

// Pages
import Hero from "./Hero";
import FromTheGovernor from "./FromTheGovernor";
import QuickStats from "./QuickStats";
import Explore from "./Explore";
import QuickActions from "./QuickActions";
import Visit from "./Visit";

// Components
import bg from "../../../public/landing/bg.jpg";
import SectionDividerDark from "@/components/SectionDividerDark";
import SectionDividerLight from "@/components/SectionDividerLight";

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* bg */}
      <Image
        src={bg}
        alt="LOGO"
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
      />
      {/* sections */}
      <div className="relative z-10">
        <Hero />
        <FromTheGovernor />
        <SectionDividerDark />
        <QuickStats />
        <SectionDividerDark />
        <Explore />
        <QuickActions />
        <SectionDividerLight />
        <Visit />

        <div className="h-screen flex items-center justify-center">
          <p className="text-white text-xl">
            This is more content with parallax scrolling
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
