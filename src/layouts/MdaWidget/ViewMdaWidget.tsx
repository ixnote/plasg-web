"use client";
import React from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
import bg from "../../../public/image 3.png";
import Discover from "./Discover";

function ViewMdaWidget() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* bg */}
      <Image
        src={bg}
        alt="LOGO"
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
      />
      <div className="relative z-10">
        <Hero />
        <Discover />
        <Essentials />
        <Faqs />
      </div>
    </div>
  );
}

export default ViewMdaWidget;
