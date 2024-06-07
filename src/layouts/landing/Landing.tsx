import React from "react";
import Hero from "./Hero";
import FromTheGovernor from "./FromTheGovernor";
import Image from "next/image";
import bg from '../../../public/landing/bg.jpg'
import QuickStats from "./QuickStats";
import SectionDividerDark from "@/components/SectionDividerDark";
import Explore from "./Explore";
import QuickActions from "./QuickActions";

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
