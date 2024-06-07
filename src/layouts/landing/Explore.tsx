import React from "react";

const Explore = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-[#0E3E40]">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          <div className="max-h-[204px] h-[20%] flex flex-col gap-4 w-[65%]">
            <span className="font-light text-sm text-white font-geistmono">
              EXPLORE
            </span>
            <span className="font-medium text-4xl font-geistsans text-white">
              Interactive Map: Quick Insights on Local Government Areas
            </span>
            <span className="font-normal text-base text-white font-geistsans w-[75%]">
              Explore Plateau State's Local Government Areas with our
              Interactive Map. Quickly find information and unique features of
              each region.
            </span>
          </div>
          <div
            className="p-32"
          >
            {/* content */}
            <div className="flex flex-col items-center justify-center gap-40 w-[70%] m-auto">
              {/* top */}
              <div className="flex flex-row gap-4 items-center justify-center flex-wrap w-[1017px]">
                {/* Map */}
                BIG MAP!!!
              </div>
              {/* bottom */}
              <div className="flex flex-col justify-center items-center gap-8 text-center w-[650px]">
                <span className="font-medium text-4xl font-geistsans text-white">
                  Looking to invest in Plateau State?
                </span>
                <span className="font-normal text-base text-white font-geistsans w-[85%]">
                  Explore prime investment opportunities in agriculture, mining,
                  tourism, and tech. Join us in driving economic growth and
                  securing a prosperous future.
                </span>
                <button className="glass-fx flex items-center justify-center gap-4 p-4 px-6 rounded-lg font-normal text-base font-geistsans text-white/50 hover:bg-[#FCFF45] hover:text-black focus:border-none focus:outline-none  duration-300 ease-in-out">
                  View Opportunities{" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="svg-path"
                      d="M0 10.1364L0 7.86364H13.6364L7.38636 1.61364L9 0L18 9L9 18L7.38636 16.3864L13.6364 10.1364H0Z"
                      fill="#D1D5DB"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
