"use client";

import React, { useRef } from "react";
import Header from "./header";
import "./nav.css";

const Nav = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app w-full">
      <div className="topheader" ref={headerRef}>
        <div className="navs h-[40px] w-full bg-[#0E3E40] flex justify-end items-center py-2 px-[40px]">
          <p>
            <a
              href="/"
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
