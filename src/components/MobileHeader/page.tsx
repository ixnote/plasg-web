import Image from "next/image";
import Link from "next/link";
import logomark from "@/assets/imgs/layouts/logomark.svg";
import { useState, useRef, useEffect, MouseEvent } from "react";
import SectionDividerDark from "../SectionDividerDark";

const MobileNav = () => {
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

  const handleLibraryDropdownToggle = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsLibraryDropdownOpen(!isLibraryDropdownOpen);
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

  return (
    <div
      ref={navRef}
      className={`relative h-[76px] w-full bg-brand-main px-4 py-4 flex items-center md:px-6 ${
        isOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
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
        className={`transition-all duration-300 ease-in-out absolute top-full left-0 w-full bg-brand-main shadow-lg z-10 overflow-hidden ${
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
              className={`group transition-fx flex items-center justify-between cursor-pointer py-2 w-full font-geistsans font-medium text-2xl ${
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
              <div className="pl-4">
                <Link
                  href="/legislative"
                  className="block py-2 text-brand-white"
                >
                  Legislative
                </Link>
                <Link href="/mda" className="block py-2 text-brand-white">
                  MDAs
                </Link>
                <Link href="#" className="block py-2 text-brand-white">
                  Projects <span className="text-xs">(coming soon)</span>
                </Link>
              </div>
            )}
          </>
          {/* Library Item */}
          <>
            <div
              className={`group transition-fx flex items-center justify-between cursor-pointer py-2 w-full font-geistsans font-medium text-2xl ${
                activeDropdown === "library"
                  ? "bg-brand-lightYellow px-4 rounded-lg text-brand-dark"
                  : "text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
              }`}
              onClick={() => handleDropdownToggle("library")}
            >
              <span className="group-hover:text-brand-dark">Library</span>
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
              <div className="pl-4">
                <Link
                  href="/government"
                  className="block py-2 text-brand-white"
                >
                  Governance
                </Link>
                <Link href="/business" className="block py-2 text-brand-white">
                  Business
                </Link>
                <Link href="#" className="block py-2 text-brand-white">
                  Health <span className="text-xs">(coming soon)</span>
                </Link>
                <Link href="#" className="block py-2 text-brand-white">
                  Welfare <span className="text-xs">(coming soon)</span>
                </Link>
              </div>
            )}
          </>
          <Link
            href="#"
            className="transition-fx cursor-pointer py-2 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            Tourism <span className="text-xs">(coming soon)</span>
          </Link>
          <Link
            href="/news"
            className="transition-fx cursor-pointer py-2 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            News
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
