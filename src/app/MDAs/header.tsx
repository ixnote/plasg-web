"use client";
import React, { useState } from "react";
import "./style.css";
import logo from "@/assets/imgs/layouts/PICDA.svg";
import searchIcon from "@/assets/icons/layouts/searchIcon.svg";
import dropdown_icon from "@/assets/icons/layouts/dropdown_icon.svg";
import Image from "next/image";
import Link from "next/link";
import HoverTags from "@/layouts/hoverTags";
import SearchComponent from "@/layouts/Search/SearchComponent";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const menueList = [
  {
    name: "About",
    drop: true,
    path: "",
  },
  {
    name: "Library",
    drop: true,
    path: "",
  },
  {
    name: "Contact",
    drop: false,
    path: "",
  },
  {
    name: "Accessibility",
    drop: false,
    path: "",
  },
];

const Header = () => {
  const [hoveredMenuData, setHoveredMenuData] = useState(null);

  const handleMouseEnter = (menu: any) => {
    if (menu.drop) {
      setHoveredMenuData(menu.data);
    } else {
      setHoveredMenuData(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMenuData(null);
  };

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div
      className="header-container w-full  rounded-t-2xl"
      onMouseLeave={handleMouseLeave}
    >
      <Modal
        fullScreen
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <SearchComponent close={close} />
      </Modal>
      <div
        className={`header-drop transition-all duration-300  w-full
         ${
          hoveredMenuData ? "h-[464px]" : "h-auto"
        }`}
      >
        <div className="header w-full flex justify-around rounded-t-xl sticky top-0">
          <div className="header-content ">
            <div className=" flex justify-between items-center  w-[149px] h-[40px] ">
              <div className="w-[39px] h-[40px] pr-1" >
              <Image src={logo} alt="LOGO" />
              </div>
              <div className="w-[100px] h-[]36px p-2 font-semibold text-[#0E3E40]">
                <p className="text-[28px] leading-[36px] font-[geist]">PICTDA</p>
              </div>
            </div>
            <div className="manue-container">
              <ul className="menue-ul">
                {menueList.map((menu) => (
                  <li
                    key={menu.name}
                    className="menu-item"
                    onMouseEnter={() => handleMouseEnter(menu)}
                  >
                    <div className="menu-hover">
                      <Link href={menu.path}>{menu.name}</Link>
                      {menu.drop && (
                        <Image
                          src={dropdown_icon}
                          alt="DROP DOWN ICON"
                          className=""
                        />
                      )}
                    </div>
                    {menu.drop && <div className="round-dot" />}
                  </li>
                ))}
              </ul>
            </div>
            <div className="left-constainer">
                <ul className="menue-ul">
                  <li className="menu-item w-[148px] h-[38px] flex justify-center rounded-md items-center gap-3">
                    <div className="">
                      <Image src={searchIcon} alt="SearchIcon" className=" h-[18px] w-[18px]" />
                    </div>
                    <div className="menu-hover">            
                     <p className="text-black">Search</p>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        {hoveredMenuData && <HoverTags data={hoveredMenuData} />}
      </div>
    </div>
  );
};

export default Header;
