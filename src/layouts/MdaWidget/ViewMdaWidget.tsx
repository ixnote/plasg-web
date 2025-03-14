"use client";
import React, { useState } from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
import bg from "@/assets/imgs/landing/background.jpg";
import Discover from "./Discover";
import { useQuery } from "react-query";
import { getTourism } from "@/api/mda/getTourism";

function ViewMdaWidget() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["getTourism", currentPage, 1],
    queryFn: getTourism,
    onSuccess: (result: any) => {
      setCurrentPage(result?.data?.data?.pagination?.currentPage);
    },
  });

  console.log("data :>> ", data);
  return (
    <div className="relative min-h-screen">
      {/* bg */}
      <div className="absolute top-0 left-0 w-full h-screen">
        <Image
          src={bg}
          alt="LOGO"
          layout="fill"
          objectFit="cover"
          className="bg-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="relative z-10">
        <Hero data={data?.data?.data} />
        <Discover destinations={data?.data?.data?.destinations} />
        <Essentials />
        <Faqs />
      </div>
    </div>
  );
}

export default ViewMdaWidget;
