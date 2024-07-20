"use client";

import React, { useEffect, useRef } from "react";
import Header from "./header";
import "./nav.css";

const Nav: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const topheader = document.querySelector(".topheader");
      if (topheader) {
        if (window.scrollY > 0) {
          topheader.classList.add("topheader--scrolled");
        } else {
          topheader.classList.remove("topheader--scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app w-full">
      <div className="topheader" ref={headerRef}>
        <div className="navs h-[40px] w-full bg-[#0E3E40] flex justify-end items-center py-2 px-[40px]">
          <p>
            <a
              href="https://plateaustate.gov.ng"
              className="text-brand-white hover:text-brand-lightYellow "
            >
              Go to plateaustate.gov.ng
            </a>
          </p>
        </div>
      </div>
      <div className="body-content">
        <div className="content">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Nav;
