"use client";
import React from "react";
import Essentials from "./Essentials";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Image from "next/image";
import bg from "../../../public/landing/bg.jpg";
<<<<<<< HEAD
=======
import Discover from "./Discover";
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e

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
<<<<<<< HEAD
=======
        <Discover />
>>>>>>> 9b787f6d9b8c54f6c01b0bff7c89703390fa2c9e
        <Essentials />
        <Faqs />
      </div>
    </div>
  );
}

export default ViewMdaWidget;
