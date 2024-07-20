import React from "react";

import SubsectionHeader from "@/components/SubsectionHeader";
import ProfileCard from "@/components/ProfileCard";
import ArticleImage from "@/assets/imgs/img.png";

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
            image={ArticleImage}
            action={"mail"}
            name={"Hannatu Joel"}
            position={"Member House of Assembly."}
          />
          <ProfileCard
            image={ArticleImage}
            action={"mail"}
            name={"Dasbak Rifkatu"}
            position={"Member House of Assembly."}
          />
          <ProfileCard
            image={ArticleImage}
            action={"mail"}
            name={"Josephine Gali"}
            position={"Member House of Assembly."}
          />
        </div>
      </div>
    </>
  );
};

export default Judiciary;
