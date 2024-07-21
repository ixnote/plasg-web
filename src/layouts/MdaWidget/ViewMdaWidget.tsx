"use client";
import React, { useState } from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
import bg from "../../../public/image 3.png";
import Discover from "./Discover";
import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { usePathname } from "next/navigation";
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
    <div className="relative min-h-screen overflow-hidden">
      {/* bg */}
      <Image
        src={bg}
        alt="LOGO"
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
      />
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
