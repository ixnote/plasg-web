import { Suspense } from "react";
import Image from "next/image";
// import Video from "next-video";
// import getStarted from "/videos/videoBg.mp4";

// Pages
import Hero from "./Hero";
import FromTheGovernor from "./FromTheGovernor";
import QuickStats from "./QuickStats";
import Explore from "./Explore";
import QuickActions from "./QuickActions";
import Visit from "./Visit";

// Components
// import bg from "@/assets/imgs/landing/background.png";
// import bg from "@/assets/imgs/landing/background.jpg";
// import bg from "@/assets/imgs/landing/background.webp";
import bg from "@/assets/imgs/landing/Hero/waterfallBg.png";
import SectionDividerDark from "@/components/SectionDividerDark";
import SectionDividerLight from "@/components/SectionDividerLight";

const Landing = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* bg */}
        {/* <Suspense
          fallback={
            <Image
              src={bg}
              alt="LOGO"
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
            />
          }
        >
          <Video src={getStarted} />
        </Suspense> */}
        <Image
          src={bg}
          alt="LOGO"
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        />
        <div className="relative min-h-screen max-w-[2040px] w-full mx-auto z-10">
          {/* sections */}
          <Hero />
          <FromTheGovernor />
          {/* <SectionDividerDark /> */}
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
      </div>
    </>
  );
};

export default Landing;
