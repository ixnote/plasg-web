import { Suspense } from "react";
import Image from "next/image";

// Pages
import Hero from "./Hero";
import FromTheGovernor from "./FromTheGovernor";
import QuickStats from "./QuickStats";
import Explore from "./Explore";
import QuickActions from "./QuickActions";
import Visit from "./Visit";

// Components
import bg from "@/assets/imgs/landing/Hero/waterfallBg.png";
import SectionDividerDark from "@/components/SectionDividerDark";
import SectionDividerLight from "@/components/SectionDividerLight";

const Landing = () => {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-screen">
          <Suspense
            fallback={
              <Image
                src={bg}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
              />
            }
          >
            <video
              src="https://res.cloudinary.com/devplsgcloud/video/upload/v1722542304/BG_o3q1tw.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </Suspense>
        </div>

        <div className="relative min-h-screen max-w-[2040px] w-full mx-auto z-10">
          {/* Sections */}
          <Hero />
          <FromTheGovernor />
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
