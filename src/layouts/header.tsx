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
import MobileNav from "@/components/MobileHeader/page";
import { useGeneralContext } from "../../context/GenralContext";

const Header = (data: any) => {
  const { topicTags, opened, open, close }: any = useGeneralContext();
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

  const menueList = [
    {
      name: "Government",
      drop: true,
      path: "#",
      data: governmentData,
    },
    {
      name: "Resources",
      drop: true,
      path: "#",
      // data: libraryData,
      data: topicTags,
    },
    {
      name: "Tourism",
      drop: false,
      path: "/tourism",
    },
    {
      name: "News",
      drop: false,
      path: "/news",
    },
  ];

  return (
    <div
      className="header-container fixed top-0 left-0 w-full z-50"
      onMouseLeave={handleMouseLeave}
    >
      <Modal
        // fullScreen
        size={"100%"}
        bg={"#0E3E40"}
        className="bg-brand-main"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        h={300}
      >
        <SearchComponent close={close} />
      </Modal>
      <div
        className={`hidden header-drop transition-all duration-300 ${
          hoveredMenuData ? "pb-20" : "h-auto"
        } lg:block`} //h-[464px]
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
                    {menu.name === "Tourism" && <div className="round-dot" />}
                  </li>
                ))}
              </ul>

              <div className="left-constainer">
                {/* <ul className="menue-ul">
                  <li className="menu-item">
                    <div className="menu-hover">
                      <Link href="#">Updates</Link>
                    </div>
                  </li>
                </ul> */}

                {/* <ul className="menue-ul">
                  <li className="menu-item">
                    <div className="menu-hover">
                      <Link href="">Accessibility</Link>
                    </div>
                  </li>
                </ul> */}

                <div className="header-search" onClick={open}>
                  <Image src={search_icon} alt="" />
                  <p className="text-white">Search</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hoveredMenuData && (
          <HoverTags
            data={hoveredMenuData}
            setHoveredMenuData={setHoveredMenuData}
          />
        )}
      </div>

      {/* MOBILE MENU */}
      <div className="flex lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
