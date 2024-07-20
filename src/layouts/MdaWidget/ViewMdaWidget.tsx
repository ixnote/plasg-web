"use client";
import React from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
<<<<<<< HEAD
import bg from "../../../public/landing/bg.jpg";
<<<<<<< HEAD
=======
import Discover from "./Discover";
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
=======
import bg from "../../../public/image 3.png";
import Discover from "./Discover";
import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { usePathname } from "next/navigation";
>>>>>>> c40e7f488a98f0df77b294e44de7be7f7130914f

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
<<<<<<< HEAD
        <Hero />
<<<<<<< HEAD
=======
=======
        <Hero data={data?.data?.data} />
>>>>>>> c40e7f488a98f0df77b294e44de7be7f7130914f
        <Discover />
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
        <Essentials />
        <Faqs />
      </div>
    </div>
  );
}

export default ViewMdaWidget;
