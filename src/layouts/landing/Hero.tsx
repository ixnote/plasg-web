"use client";

import React, { useState } from "react";

const Hero = () => {
  const [showSearchResult, setShowSearchResult] = useState(false);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* hero content */}
        <div className="m-auto w-[92%] flex justify-between">
          <div className="w-[50%] flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
              {/* left top */}
              <div className="h-[296px] glass-fx flex flex-col gap-10 text-left p-8">
                <div className="text-left flex flex-col gap-2">
                  <span className="font-medium text-5xl font-geistsans text-white outline-2">
                    Welcome to{" "}
                  </span>
                  <span className="font-medium text-5xl font-geistsans text-white outline-2">
                    plateaustate.gov.ng
                  </span>
                </div>
                <span className="font-normal text-base text-white font-geistsans w-[94%]">
                  Plateau.gov.ng is the official website of Plateau State. Here,
                  you'll find access to online services, valuable resources, and
                  essential information about our beautiful state.
                </span>
              </div>
              {/* bottom left */}
              <div className="relative w-full">
                {showSearchResult && (
                  <div className="absolute -top-[248px] left-0 w-full bg-[#FCFF45] p-4 rounded-t-lg h-[250px] flex flex-col  justify-start">
                    <span className="flex flex-row items-center justify-start gap-4 text-black/40 cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-[#dfdf41]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-black/40 cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-[#dfdf41]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-black/40 cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-[#dfdf41]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <span className="flex flex-row items-center justify-start gap-4 text-black/40 cursor-pointer py-4 px-2 rounded-lg  duration-200 ease-in-out hover:bg-[#dfdf41]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 17L9 11L13 15L21 7"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 7H21V11"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Trending Search
                    </span>
                    <hr />
                  </div>
                )}
                <div
                  className={
                    showSearchResult
                      ? "h-[74px] flex flex-row items-center justify-between p-4 rounded-lg duration-300 ease-in-out bg-[#FCFF45] shadow-none rounded-t-none"
                      : "glass-fx h-[74px] flex flex-row items-center justify-between p-4 rounded-lg duration-300 ease-in-out hover:bg-[#FCFF45] hover:shadow-none focus:bg-[#FCFF45] focus:rounded-t-none"
                  }
                >
                  <input
                    type="search"
                    name="search"
                    id="search"
                    onFocus={() => setShowSearchResult(true)}
                    onBlur={() => setShowSearchResult(false)}
                    placeholder="Looking for something? Search anything"
                    className="flex items-center justify-center w-full p-4 bg-transparent text-black/40 cursor:pointer border-none outline-none"
                  />
                  {!showSearchResult && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-4"
                    >
                      <path
                        d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[50%]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
