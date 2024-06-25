import React from "react";
import ProfileCard from "@/components/ProfileCard";
import SubsectionHeader from "@/components/SubsectionHeader";

import governor from "../../../public/government/legislative/legislative.jpg";
import deputy from "../../../public/government/legislative/legislative5.jpg";
import secretary from "../../../public/government/legislative/legislative3.jpg";
import ButtonLight from "@/components/ButtonLight";

const Legislative = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 lg:gap-20 py-12">
        <SubsectionHeader
          left={"THE LEGISLATIVE"}
          right={"Meet the Leaders Shaping Plateau State’s Legislation"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfileCard
            image={governor}
            action={"mail"}
            name={"Kyale Isaac Kwallu"}
            position={"Member House of Representatives."}
          />
          <ProfileCard
            image={deputy}
            action={"mail"}
            name={"Sadiya Yusuf"}
            position={"Member House of Representatives."}
          />
          <ProfileCard
            image={secretary}
            action={"mail"}
            name={"David Ishaya Lalu"}
            position={"Member House of Representatives."}
          />
        </div>
        <div className="w-[220px] mx-auto">
          <ButtonLight text={"See Members"} url={"legislative"} />
        </div>
      </div>
    </>
  );
};

export default Legislative;
