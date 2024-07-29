"use client";

import Image from "next/image";
import Link from "next/link";
import logomark from "@/assets/imgs/layouts/logomark.svg";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { useGeneralContext } from "../../../context/GenralContext";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import SearchComponent from "@/layouts/Search/SearchComponent";

const MobileNav = () => {
  const router = useRouter();
  const { topicTags, setTopicTagId, setOneTopicTag, allResources }: any =
    useGeneralContext();
  const [opened, { open, close }] = useDisclosure(false);

  const [activeTopicTag, setActiveTopicTag] = useState() as any;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLibraryDropdownOpen, setIsLibraryDropdownOpen] =
    useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsLibraryDropdownOpen(false); // Close the dropdown when the main menu closes
    }
  };

  const handleClickOutside = (event: any) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setIsLibraryDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent | MouseEventInit) => {
      handleClickOutside(event);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen]);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    if (activeTopicTag) {
      console.log("🚀 ~ useEffect ~ activeTopicTag:", activeTopicTag);
      setTopicTagId(activeTopicTag.id);
      setOneTopicTag(activeTopicTag);
      setIsOpen(!isOpen);
      router.push("/resource");
    }
  }, [activeTopicTag]);

  return (
    <div
      ref={navRef}
      className={`relative h-[76px] w-full bg-brand-main px-4 py-4 flex items-center md:px-6 ${
        isOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
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
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image src={logomark} alt="LOGO" />
        </Link>
        <div className="flex items-center justify-center lg:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <div
              className={`w-8 h-5 flex flex-col justify-between ${
                isOpen ? "open" : ""
              }`}
            >
              <div
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out absolute top-full left-0 w-full bg-brand-main shadow-lg z-10 overflow-hidden rounded-b-lg ${
          isOpen ? "opacity-100 p-4 pt-px" : "max-h-0 opacity-0 p-0"
        }`}
      >
        {/* Divider */}
        <div className="flex items-center justify-between gap-4 w-full pt-2 pb-4">
          <span className="w-full bg-brand-grayish/40 p-px rounded"></span>
        </div>

        {/* List items */}
        <nav className="flex flex-col items-start">
          {/* Government Item */}
          <>
            <div
              className={`group transition-fx flex items-center justify-between cursor-pointer py-4 w-full font-geistsans font-medium text-2xl ${
                activeDropdown === "government"
                  ? "bg-brand-lightYellow px-4 rounded-lg text-brand-dark"
                  : "text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
              }`}
              onClick={() => handleDropdownToggle("government")}
            >
              <span className="group-hover:text-brand-dark">Government</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-fx mr-2 ${
                  activeDropdown === "government" ? "rotate-180" : ""
                } group-hover:fill-brand-dark`}
              >
                <path
                  d="M4.99023 5.75023C4.92466 5.75103 4.85964 5.7381 4.79936 5.71227C4.73909 5.68643 4.68488 5.64827 4.64023 5.60023L0.140234 1.10023C-0.0597656 0.900234 -0.0597656 0.590234 0.140234 0.390234C0.340234 0.190234 0.650234 0.190234 0.850234 0.390234L5.00023 4.54023L9.14023 0.400234C9.34023 0.200234 9.65023 0.200234 9.85023 0.400234C10.0502 0.600234 10.0502 0.910234 9.85023 1.11023L5.35023 5.61023C5.25023 5.71023 5.12023 5.76023 5.00023 5.76023L4.99023 5.75023Z"
                  className="transition-colors duration-300 group-hover:fill-brand-dark"
                  fill="currentColor"
                />
              </svg>
            </div>
            {activeDropdown === "government" && (
              <div className="py-6 pl-12 w-full">
                <Link
                  href="/government"
                  className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                    01
                  </span>
                  <span className="w-3/4 font-geistsans font-medium text-2xl">
                    Overview
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-fx hidden group-hover:block"
                  >
                    <path
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="/legislative"
                  onClick={() => setIsOpen(!isOpen)}
                  className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                >
                  <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                    02
                  </span>
                  <span className="w-3/4 font-geistsans font-medium text-2xl">
                    Legislative
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-fx hidden group-hover:block"
                  >
                    <path
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="/mdas"
                  onClick={() => setIsOpen(!isOpen)}
                  className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                >
                  <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                    03
                  </span>
                  <span className="w-3/4 font-geistsans font-medium text-2xl">
                    MDAs
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-fx hidden group-hover:block"
                  >
                    <path
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(!isOpen)}
                  className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                >
                  <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                    04
                  </span>
                  <span className="w-3/4 font-geistsans font-medium text-2xl">
                    Projects <span className="text-xs">(coming soon)</span>
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-fx hidden group-hover:block"
                  >
                    <path
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </>
          {/* Library Item */}
          <>
            <div
              className={`group transition-fx flex items-center justify-between cursor-pointer py-4 w-full font-geistsans font-medium text-2xl ${
                activeDropdown === "library"
                  ? "bg-brand-lightYellow px-4 rounded-lg text-brand-dark"
                  : "text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
              }`}
              onClick={() => handleDropdownToggle("library")}
            >
              <span className="group-hover:text-brand-dark">Resources</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-fx mr-2 ${
                  activeDropdown === "library" ? "rotate-180" : ""
                } group-hover:fill-brand-dark`}
              >
                <path
                  d="M4.99023 5.75023C4.92466 5.75103 4.85964 5.7381 4.79936 5.71227C4.73909 5.68643 4.68488 5.64827 4.64023 5.60023L0.140234 1.10023C-0.0597656 0.900234 -0.0597656 0.590234 0.140234 0.390234C0.340234 0.190234 0.650234 0.190234 0.850234 0.390234L5.00023 4.54023L9.14023 0.400234C9.34023 0.200234 9.65023 0.200234 9.85023 0.400234C10.0502 0.600234 10.0502 0.910234 9.85023 1.11023L5.35023 5.61023C5.25023 5.71023 5.12023 5.76023 5.00023 5.76023L4.99023 5.75023Z"
                  className="transition-colors duration-300 group-hover:fill-brand-dark"
                  fill="currentColor"
                />
              </svg>
            </div>
            {activeDropdown === "library" && (
              <div className="py-6 pl-12 w-full">
                {topicTags ? (
                  <>
                    {topicTags.map((item: any, i: number) => (
                      <div
                        key={i}
                        onClick={() => setActiveTopicTag(item)}
                        className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 cursor-pointer hover:pl-4 hover:bg-[#284f51]"
                      >
                        <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                          0{i + 1}
                        </span>
                        <span className="w-3/4 font-geistsans font-medium text-2xl capitalize">
                          {item.name}
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-fx hidden group-hover:block"
                        >
                          <path
                            d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                  // <>
                  //   <Link
                  //     href="/resource?name=governance"
                  //     onClick={() => setIsOpen(!isOpen)}
                  //     className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  //   >
                  //     <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                  //       01
                  //     </span>
                  //     <span className="w-3/4 font-geistsans font-medium text-2xl">
                  //       Governance
                  //     </span>
                  //     <svg
                  //       width="18"
                  //       height="18"
                  //       viewBox="0 0 18 18"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="transition-fx hidden group-hover:block"
                  //     >
                  //       <path
                  //         d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  //         fill="white"
                  //       />
                  //     </svg>
                  //   </Link>
                  //   <Link
                  //     href="/resource?name=business"
                  //     onClick={() => setIsOpen(!isOpen)}
                  //     className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  //   >
                  //     <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                  //       02
                  //     </span>
                  //     <span className="w-3/4 font-geistsans font-medium text-2xl">
                  //       Business
                  //     </span>
                  //     <svg
                  //       width="18"
                  //       height="18"
                  //       viewBox="0 0 18 18"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="transition-fx hidden group-hover:block"
                  //     >
                  //       <path
                  //         d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  //         fill="white"
                  //       />
                  //     </svg>
                  //   </Link>
                  //   <Link
                  //     href="/resource?name=health"
                  //     onClick={() => setIsOpen(!isOpen)}
                  //     className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  //   >
                  //     <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                  //       03
                  //     </span>
                  //     <span className="w-3/4 font-geistsans font-medium text-2xl">
                  //       Health <span className="text-xs">(coming soon)</span>
                  //     </span>
                  //     <svg
                  //       width="18"
                  //       height="18"
                  //       viewBox="0 0 18 18"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="transition-fx hidden group-hover:block"
                  //     >
                  //       <path
                  //         d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  //         fill="white"
                  //       />
                  //     </svg>
                  //   </Link>
                  //   <Link
                  //     href="/resource?name=welfare"
                  //     onClick={() => setIsOpen(!isOpen)}
                  //     className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  //   >
                  //     <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                  //       04
                  //     </span>
                  //     <span className="w-3/4 font-geistsans font-medium text-2xl">
                  //       Welfare <span className="text-xs">(coming soon)</span>
                  //     </span>
                  //     <svg
                  //       width="18"
                  //       height="18"
                  //       viewBox="0 0 18 18"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="transition-fx hidden group-hover:block"
                  //     >
                  //       <path
                  //         d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  //         fill="white"
                  //       />
                  //     </svg>
                  //   </Link>
                  //   <Link
                  //     href="#"
                  //     className="group transition-fx flex items-center text-brand-white py-4 bg-brand-main/70 hover:pl-4 hover:bg-[#284f51]"
                  //   >
                  //     <span className="mr-6 font-geistmono font-light text-base text-[#cfd8d9]">
                  //       05
                  //     </span>
                  //     <span className="w-3/4 font-geistsans font-medium text-2xl">
                  //       Tourism <span className="text-xs">(coming soon)</span>
                  //     </span>
                  //     <svg
                  //       width="18"
                  //       height="18"
                  //       viewBox="0 0 18 18"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="transition-fx hidden group-hover:block"
                  //     >
                  //       <path
                  //         d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                  //         fill="white"
                  //       />
                  //     </svg>
                  //   </Link>
                  // </>
                )}
              </div>
            )}
          </>
          <Link
            href="/people"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            People
          </Link>
          <Link
            href="/news"
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            News
          </Link>
          <Link
            href="/search"
            // onClick={() => setIsOpen(!isOpen)}
            onClick={open}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            Search
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
