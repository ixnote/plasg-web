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
import bg from "@/assets/imgs/landing/bg.jpg";
import SectionDividerDark from "@/components/SectionDividerDark";
import SectionDividerLight from "@/components/SectionDividerLight";
import Newsletter from "./Newsletter";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";

const Landing = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="relative min-h-screen max-w-[2040px] w-full mx-auto">
        {/* bg */}
        {/* <Image
          src={bg}
          alt="LOGO"
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          // className="absolute top-0 left-0 w-full h-full"
        /> */}
        {/* sections */}
        {/* <div className="relative z-10"> */}
        <Hero />
        <FromTheGovernor />
        <SectionDividerDark />
        <QuickStats />
        <SectionDividerDark />
        <div className="hidden lg:block">
          <Explore />
        </div>
        <QuickActions />
        <SectionDividerLight />
        <div className="hidden md:block">
          <Visit />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
