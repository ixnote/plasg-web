"use client";

import SubsectionHeader from "@/components/SubsectionHeader";
import Image from "next/image";
import React from "react";

import governor from "@/assets/imgs/government/executive/governor.png";
import deputy from "@/assets/imgs/government/executive/deputy.png";
import secretary from "@/assets/imgs/government/executive/secretary.png";
import LegislatureCard from "@/components/LegislatureCard";
import ProfileCard from "@/components/ProfileCard";

import { useQuery } from "react-query";
import { getActiveGovernment } from "@/api/government/government.api";
import { FaSpinner } from "react-icons/fa6";

const Executive = () => {
  const { data: activeGovernment, isLoading } = useQuery({
    queryKey: ["getActiveGovernment"],
    queryFn: getActiveGovernment,
  });

  // console.log({ activeGovernment: activeGovernment });

  if (isLoading) {
    return (
      <FaSpinner className="animate-spin text-brand-main mx-auto text-4xl" />
    );
  }

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
            image={activeGovernment.image}
            action={"page"}
            name={activeGovernment.governor.name}
            position={activeGovernment.governor.role}
            executive
            link={"governor"}
          />
          <ProfileCard
            image={activeGovernment.deputyGovernor.details.image}
            action={"page"}
            name={`${activeGovernment.deputyGovernor.details.title} ${activeGovernment.deputyGovernor.details.name}`}
            position={activeGovernment.deputyGovernor.details.role}
            executive
            link={"deputy"}
          />
          <ProfileCard
            image={activeGovernment.stateSecretary.details.image}
            action={"page"}
            name={`${activeGovernment.stateSecretary.details.title} ${activeGovernment.stateSecretary.details.name}`}
            position={activeGovernment.stateSecretary.details.role}
            executive
            link={"secretary"}
          />
        </div>
      </div>
    </>
  );
};

export default Executive;
