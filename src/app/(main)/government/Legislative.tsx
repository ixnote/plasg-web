"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SubsectionHeader from "@/components/SubsectionHeader";

import ButtonLight from "@/components/ButtonLight";
import ArticleImage from "@/assets/imgs/img.png";
import { useGeneralContext } from "../../../../context/GenralContext";
import { getLegislatives } from "@/api/mda/getLegislatives";
import { useQuery } from "react-query";
import { getActiveGovernment } from "@/api/government/government.api";
import { FaSpinner } from "react-icons/fa6";

const Legislative = () => {
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

  // const {
  //   data: legislatives,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["getLegislatives"],
  //   queryFn: getLegislatives,
  //   onSuccess: (result: any) => {
  //     // console.log("🚀 ~ Legislative ~ result:", result);
  //   },
  // });

  return (
    <>
      <div className="flex flex-col justify-center gap-4 lg:gap-20 py-12">
        <SubsectionHeader
          left={"THE LEGISLATIVE"}
          right={"Meet the Leaders Shaping Plateau State’s Legislation"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <>
            {activeGovernment?.executives
              ?.slice(0, 3)
              .map((item: any, i: number) => (
                <ProfileCard
                  key={i}
                  // image={ArticleImage}
                  image={item.image}
                  email={item.email}
                  action={"mail"}
                  name={`${item.title} ${item.name}`}
                  position={item.party}
                />
              ))}
          </>
          {/* {legislatives?.data?.data?.data?.length ? (
            <>
              {legislatives?.data?.data?.data?.map((item: any, i: number) => (
                <ProfileCard
                  key={i}
                  // image={ArticleImage}
                  image={item.image || ArticleImage}
                  action={"mail"}
                  name={item.name || "Kyale Isaac Kwallu"}
                  position={item.title || "Member House of Representatives."}
                />
              ))}
            </>
          ) : (
            <>
              <ProfileCard
                image={ArticleImage}
                action={"mail"}
                name={"Kyale Isaac Kwallu"}
                position={"Member House of Representatives."}
              />
              <ProfileCard
                image={ArticleImage}
                action={"mail"}
                name={"Sadiya Yusuf"}
                position={"Member House of Representatives."}
              />
              <ProfileCard
                image={ArticleImage}
                action={"mail"}
                name={"David Ishaya Lalu"}
                position={"Member House of Representatives."}
              />
            </>
          )} */}
        </div>
        <div className="w-[220px] mx-auto">
          <ButtonLight text={"See Members"} url={"legislative"} />
        </div>
      </div>
    </>
  );
};

export default Legislative;
