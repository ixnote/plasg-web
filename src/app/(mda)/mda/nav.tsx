"use client";

import React, { useEffect, useRef } from "react";
import Header from "./header";
import "./nav.css";
import MdaMobileNav from "./MdaMobileNav";
import { useGeneralContext } from "../../../../context/GenralContext";
import { getMda } from "@/api/mda/getMda";
import { useQuery } from "react-query";

const Nav = ({ params }: { params: { slug: string } }) => {
  console.log("🚀 ~ Nav ~ params:", params);
  const { mdaSlug, setOneMda }: any = useGeneralContext();
  const headerRef = useRef<HTMLDivElement>(null);

  const urlParams = new URLSearchParams(window.location.search);
  console.log("🚀 ~ Nav ~ urlParams:", urlParams);
  // const tx_ref = urlParams.get("tx_ref") as any;

  const {
    data: mda,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getMda", params?.slug || mdaSlug],
    queryFn: getMda,
    enabled: !!params?.slug,
  });

  useEffect(() => {
    if (mda) {
      setOneMda(mda?.data?.data);
    }
  }, [mda]);

  return (
    <div className="app w-full fixed top-0 left-0 z-50">
      <div className="topheader" ref={headerRef}>
        <div className="navs h-[40px] w-full bg-[#0E3E40] flex justify-end items-center py-2 px-6 lg:px-[40px]">
          <p>
            <a
              href="/mdas"
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
            <Header propSlug={params?.slug || mdaSlug || ""} />
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
