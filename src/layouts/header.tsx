"use client";
import React, { useState } from "react";
import "./styles.css";
import logomark from "@/assets/imgs/layouts/logomark.svg";
import dropdown_icon from "@/assets/icons/layouts/dropdown_icon.svg";
import search_icon from "@/assets/icons/layouts/search_icon.svg";
import Image from "next/image";
import Link from "next/link";
import HoverTags from "./hoverTags";
import { libraryData, governmentData } from "./ListData";
import SearchComponent from "./Search/SearchComponent";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const menueList = [
  {
    name: "Government",
    drop: true,
    path: "#",
    data: governmentData,
  },
  {
    name: "Library",
    drop: true,
    path: "#",
    data: libraryData,
  },
  {
    name: "Tourism",
    drop: false,
    path: "#",
  },
  {
    name: "News",
    drop: false,
    path: "/news",
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
      className="header-container fixed top-0 left-0 w-full z-50"
      onMouseLeave={handleMouseLeave}
    >
      <Modal
        fullScreen
        bg={"#0E3E40"}
        className="bg-brand-main"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        <SearchComponent close={close} />
      </Modal>
      <div
        className={`header-drop transition-all duration-300 ${
          hoveredMenuData ? "h-[464px]" : "h-auto"
        }`}
      >
        <div className="header">
          <div className="header-content">
            <Link href="/">
              <Image src={logomark} alt="LOGO" />
            </Link>
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
                          className="ml-2"
                        />
                      )}
                    </div>
                    {menu.drop && <div className="round-dot" />}
                  </li>
                ))}
              </ul>

              <div className="left-constainer">
                <ul className="menue-ul">
                  <li className="menu-item">
                    <div className="menu-hover">
                      <Link href="">Accessibility</Link>
                    </div>
                  </li>
                </ul>

                <div className="header-search" onClick={open}>
                  <Image src={search_icon} alt="" />
                  <p className="text-white">Search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hoveredMenuData && <HoverTags data={hoveredMenuData} />}
      </div>
    </div>
  );
};

export default Header;
