import SubsectionHeader from "@/components/SubsectionHeader";
import Image from "next/image";
import React from "react";

import governor from "@/assets/imgs/government/executive/governor.png";
import deputy from "@/assets/imgs/government/executive/deputy.png";
import secretary from "@/assets/imgs/government/executive/secretary.png";
import LegislatureCard from "@/components/LegislatureCard";
import ProfileCard from "@/components/ProfileCard";

const Executive = () => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-20 py-12">
        <SubsectionHeader
          left={"THE EXECUTIVE"}
          right={"Meet the Leaders Driving Plateau State’s Progress"}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* <div className="hide-scrollbar flex overflow-x-scroll gap-6 grid-cols-3"> */}
          <ProfileCard
            image={governor}
            action={"page"}
            name={"Barr. Caleb Mutfwang"}
            position={"Executive Governor, Plateau State"}
            executive
            link={"governor"}
          />
          <ProfileCard
            image={deputy}
            action={"page"}
            name={"Josephine Piyo"}
            position={"Deputy Governor, Plateau State"}
            executive
            link={"deputy"}
          />
          <ProfileCard
            image={secretary}
            action={"page"}
            name={"Arch. Samuel Jatau"}
            position={"Secretary to the State Government."}
            executive
            link={"secretary"}
          />
        </div>
      </div>
    </>
  );
};

export default Executive;
