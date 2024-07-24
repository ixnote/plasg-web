"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import searchIcon from "@/assets/icons/layouts/searchIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useGeneralContext } from "../../../../context/GenralContext";

const Header = () => {
  const { mdaSlug, oneMda }: any = useGeneralContext();
  const [aboutPath, setAboutPath] = useState("");
  const [libraryPath, setLibraryPath] = useState("");
  const [contactPath, setContactPath] = useState("");

  const menueList = [
    {
      name: "About",
      path: aboutPath,
    },
    {
      name: "Library",
      path: libraryPath,
    },
    {
      name: "Contact",
      path: contactPath,
    },
  ];

  useEffect(() => {
    setAboutPath(`/mda/${mdaSlug}/about`);
    setLibraryPath(`/mda/${mdaSlug}/library`);
    setContactPath(`/mda/${mdaSlug}/contact`);
  }, [mdaSlug]);

  return (
    <div className="header-container bg-brand-white w-full  rounded-t-2xl">
      <div className="header-drop transition-all duration-300  w-full h-auto">
        <div className="h-[76px] w-full rounded-lg px-10 py-4 flex items-center ustify-around rounded-t-xl sticky top-0">
          <div className="header-content ">
            <Link
              href={`/mda/${mdaSlug}`}
              className=" flex justify-between items-center  w-[149px] h-[40px] "
            >
              <div className="w-[39px] h-[40px] pr-1">
                <Image
                  src={oneMda?.hero?.logo}
                  width={39}
                  height={40}
                  alt="LOGO"
                  className="w-[39px] h-[40px]"
                />
              </div>
              <div className="w-[100px] h-[]36px p-2 font-semibold text-[#0E3E40]">
                <p className="text-[28px] leading-[36px] font-geistsans capitalize">
                  {oneMda?.abbreviation}
                </p>
              </div>
            </Link>
            <div className="manue-container">
              <ul className="menue-ul">
                {menueList.map((menu) => (
                  <li key={menu.name} className="menu-item">
                    <div className="">
                      <Link
                        href={menu.path}
                        className="visit-hover-fx transition-fx font-geistsans font-medium text-base text-brand-main mr-8"
                      >
                        {menu.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="left-constainer">
              <ul className="menue-ul">
                <li className="menu-item w-[148px] h-[38px] flex justify-center rounded-md items-center gap-3">
                  <div className="">
                    <Image
                      src={searchIcon}
                      alt="SearchIcon"
                      className=" h-[18px] w-[18px]"
                    />
                  </div>
                  <div className="menu-hover">
                    <p className="text-black">Search</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
