"use client";
import React from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
import bg from "../../../public/landing/bg.jpg";
import Discover from "./Discover";
import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { usePathname } from "next/navigation";

function ViewMdaWidget() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const id = pathSegments[pathSegments.length - 1];

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMda", id],
    queryFn: getMda,
    enabled: !!id,
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
        <Discover />
        <Essentials />
        <Faqs />
      </div>
    </div>
  );
}

export default ViewMdaWidget;
