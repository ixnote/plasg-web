"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { useGeneralContext } from "../../../../context/GenralContext";
import { useRouter } from "next/navigation";

const MdaMobileNav = () => {
  const router = useRouter();
  const { mdaSlug, oneMda }: any = useGeneralContext();
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

  return (
    <div
      ref={navRef}
      className={`relative h-[76px] w-full bg-brand-main px-4 py-4 flex items-center md:px-6`}
    >
      <div className="flex items-center justify-between w-full">
        <Link
          href={`/mda/${mdaSlug}`}
          className="flex items-end justify-center gap-2 text-xl text-brand-white font-geistsans"
        >
          <Image
            src={oneMda?.hero?.logo}
            width={39}
            height={40}
            alt="LOGO"
            className="w-[39px] h-[40px]"
          />
          {oneMda?.abbreviation}
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
          <Link
            href={`/mda/${mdaSlug}/about`}
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            About
          </Link>
          <Link
            href={`/mda/${mdaSlug}/library`}
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            Library
          </Link>
          <Link
            href={`/mda/${mdaSlug}/contact`}
            onClick={() => setIsOpen(!isOpen)}
            className="transition-fx cursor-pointer py-4 w-full font-geistsans font-medium text-2xl text-brand-white border-b-[0.1px] border-b-brand-grayish/10 hover:bg-brand-lightYellow hover:px-4 hover:rounded-lg hover:text-brand-dark"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MdaMobileNav;
