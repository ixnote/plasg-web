import React from "react";

const Footer = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24 bg-[#0E3E40]">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-20 w-[92%] h-[70%]">
          {/* content */}
          <div className="flex flex-col items-center justify-center gap-40 w-[70%] m-auto">
            {/* bottom */}
            <div className="flex flex-col justify-center items-center gap-8 text-center w-[650px]">
              <span className="font-medium text-4xl font-geistsans text-white">
                Looking to invest in Plateau State?
              </span>
              <span className="font-normal text-base text-white font-geistsans w-[80%]">
                Explore prime investment opportunities in agriculture, mining,
                tourism, and tech. Join us in driving economic growth and
                securing a prosperous future.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
