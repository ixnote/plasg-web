import SectionHeader from "@/components/SectionHeader";
import React from "react";

import governmentHouse from "@/assets/imgs/government/government_house.png";
import ThreePointAgenda from "./ThreePointAgenda";
import SectionDividerLight from "@/components/SectionDividerLight";
import Executive from "./Executive";
import Legislative from "./Legislative";
import Judiciary from "./Judiciary";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <SectionHeader
            image={governmentHouse}
            title={"The Government of Plateau State"}
            description={
              "Our goal is to lead us in rebuilding a new Plateau, one that is secure, united, prosperous, and respected among Nigerian states. I aim to ensure that Plateau regains its pride of place and competitive edge, both nationally and internationally."
            }
            baseURL={"government"}
            baseText={"GOVERNMENT"}
          />
          <ThreePointAgenda />
          <SectionDividerLight />
          <Executive />
          <SectionDividerLight />
          <Legislative />
          <SectionDividerLight />
          <Judiciary />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default page;
