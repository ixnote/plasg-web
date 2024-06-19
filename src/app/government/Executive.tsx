import SubsectionHeader from "@/components/SubsectionHeader";
import Image from "next/image";
import React from "react";

import governor from "../../../public/government/executive/governor.png";
import deputy from "../../../public/government/executive/deputy.png";
import secretary from "../../../public/government/executive/secretary.png";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileCard
            image={governor}
            action={"page"}
            name={"Barr. Caleb Mutfwang"}
            position={"Executive Governor, Plateau State"}
            executive
          />
          <ProfileCard
            image={deputy}
            action={"page"}
            name={"Josephine Piyo"}
            position={"Deputy Governor, Plateau State"}
            executive
          />
          <ProfileCard
            image={secretary}
            action={"page"}
            name={"Arch. Samuel Jatau"}
            position={"Secretary to the State Government."}
            executive
          />
        </div>
      </div>
    </>
  );
};

export default Executive;
