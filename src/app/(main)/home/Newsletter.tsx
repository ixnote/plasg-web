"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ButtonDark from "@/components/ButtonDark";

const Newsletter = () => {
  const router = useRouter();
  const handleClick = () => {
    // if (outsideLink) {
    //   const isExternalLink =
    //     outsideLink.startsWith("http://") || outsideLink.startsWith("https://");
    //   const formattedLink = isExternalLink
    //     ? outsideLink
    //     : `http://${outsideLink}`;
    //   window.open(formattedLink, "_blank");
    // }

    // if (url) {
    //   router.push(`/${url}`);
    // }

    return;
  };

  return (
    <>
      <div className="flex items-center justify-center py-24 bg-brand-main">
        {/* content */}
        <div className="flex flex-col gap-10 items-start justify-between w-[92%] h-[70%] lg:gap-0 lg:flex-row">
          {/* left */}
          <div className="max-h-[204px] h-[20%] flex flex-col gap-8 w-full lg:w-[65%]">
            <span className="font-medium text-4xl font-geistsans text-white">
              Join Our Newsletter
            </span>
            <span className="font-normal text-base text-white font-geistsans w-full lg:w-[75%]">
              Stay informed and connected with the latest updates and news from
              Plateau State. Subscribe to our newsletter and never miss out on
              important information and events.
            </span>
          </div>
          {/* right */}
          <div className="flex flex-col justify-center items-start gap-8 text-center w-full lg:w-[40%]">
            <div className="flex flex-col items-start justify-center gap-2">
              <label className="font-medium text-sm text-brand-white font-geistsans">
                E-mail address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="namesurname@email.com"
                className="w-[350px] py-4 border-b-[1px] text-brand-white border-brand-grayish bg-transparent focus:outline-none md:w-[422px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              {/* <ButtonDark text={"Subscribe to our newsletter"} /> */}
              <div className="w-full flex items-center justify-start lg:w-[422px]">
                <div
                  className={
                    "btn-fx group w-[99%] mx-auto transition-fx border-[1px] border-brand-grayish flex items-center justify-center gap-4 p-4 px-8 rounded-lg font-normal text-base font-geistsans text-brand-white margin-auto  cursor-pointer hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow"
                  }
                  onClick={() => handleClick()}
                >
                  Subscribe
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-path group-hover:fill-brand-dark/80"
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                </div>
              </div>
              <span className="flex items-center justify-center gap-1 font-normal text-xs text-brand-grayish font-geistsans lg:pl-1">
                By subscribing you agree to with our{" "}
                <a href="#" className="text-brand-secondary ">
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
