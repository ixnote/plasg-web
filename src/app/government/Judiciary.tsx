import React from "react";

import governor from "../../../public/government/judiciary/judiciary.jpg";
import deputy from "../../../public/government/judiciary/judiciary3.jpg";
import secretary from "../../../public/government/judiciary/judiciary2.jpg";
import ButtonLight from "@/components/ButtonLight";
import SubsectionHeader from "@/components/SubsectionHeader";
import ProfileCard from "@/components/ProfileCard";

const Judiciary = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 lg:gap-20 py-12">
        <SubsectionHeader
          left={"THE JUDICIARY"}
          right={"Meet the Leaders Upholding Plateau's Judiciary"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileCard
            image={governor}
            action={"mail"}
            name={"Hannatu Joel"}
            position={"Member House of Assembly."}
          />
          <ProfileCard
            image={deputy}
            action={"mail"}
            name={"Dasbak Rifkatu"}
            position={"Member House of Assembly."}
          />
          <ProfileCard
            image={secretary}
            action={"mail"}
            name={"Josephine Gali"}
            position={"Member House of Assembly."}
          />
        </div>
        <div className="w-[220px] mx-auto">
          <ButtonLight text={"See Members"} />
        </div>
      </div>
    </>
  );
};

export default Judiciary;
