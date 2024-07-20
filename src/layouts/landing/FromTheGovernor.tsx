import React from "react";
import governor from "../../../public/landing/BCM_homepage.webp";
import Image from "next/image";
import ButtonDark from "@/components/ButtonDark";

const FromTheGovernor = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-24  bg-[#0E3E40]">
        {/* content */}
        <div className="flex items-center justify-between gap-4 w-[92%]">
          {/* left */}
          <div className="w-[50%] relative">
            <Image
              src={governor}
              alt="His excellency"
              className="w-[680px] rounded-xl"
            />
            <div className="glass-fx  w-[75%] absolute bottom-6 left-6 flex flex-col gap-4 p-8 text-left">
              <span className="font-medium text-4xl font-geistsans text-white">
                Barr. Caleb Mutfwang
              </span>
              <span className="font-normal text-base font-geistsans text-white">
                Executive Governor, Plateau State
              </span>
            </div>
          </div>
          {/* right */}
          <div className="w-[45%] flex flex-col items-start gap-24">
            <div className="flex flex-col gap-8 w-[80%]">
              <span className="font-normal text-base text-white font-geistmono">
                FROM THE GOVERNOR
              </span>
              <span className="font-medium text-4xl font-geistsans text-white">
                "No matter your origin or language, if you reside on or cherish
                the Plateau, you're family to me."
              </span>
              <span className="font-normal text-base text-white font-geistsans">
                Plateau State's values are not just a badge of honor; they are
                the cornerstone of our history and our journey ahead. We stand
                at the forefront of progress, championing bold reforms that echo
                our deeply-held principles. It's this spirit of innovation that
                fuels our diversity, propels our economy, and positions us as a
                beacon of growth and opportunity.
              </span>
            </div>
            <ButtonDark text={"Learn More About the Governor"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FromTheGovernor;
