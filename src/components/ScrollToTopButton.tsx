"use client";

import { useEffect, useState } from "react";
import { handleScrollToTop } from "@/utils/scrollToTop";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 2;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-5 right-0 flex items-center justify-center gap-4 px-[16px] py-[8px] font-geistsans text-base font-normal text-[#CDE399] md:right-5">
        <button
          onClick={handleScrollToTop}
          className="h-10 p-2 rounded-lg w-fit flex items-center justify-center gap-2 animate-bounce bg-brand-main"
        >
          <IoArrowUpOutline size={32} />
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;
