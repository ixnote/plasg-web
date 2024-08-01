"use client";

import React, { useRef } from "react";
import Header from "./header";
import "./nav.css";
import MdaMobileNav from "./MdaMobileNav";

const Nav = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app w-full fixed top-0 left-0 z-50">
      <div className="topheader" ref={headerRef}>
        <div className="navs h-[40px] w-full bg-[#0E3E40] flex justify-end items-center py-2 px-6 lg:px-[40px]">
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
          <div className="hidden lg:block">
            <Header />
          </div>
          <div className="lg:hidden">
            <MdaMobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
