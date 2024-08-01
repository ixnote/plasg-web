import ButtonDark from "@/components/ButtonDark";
import SectionHeaderDark from "@/components/SectionHeaderDark";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat bg-brand-main">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8 items-center">
          <SectionHeaderDark
            video={
              "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4"
            }
            title={"The Beautiful People of Plateau."}
            description={
              "People of Plateau celebrates the individuals and stories that shape the unique culture of our state. We journeyed around Jos to meet a diverse group of people who are proud to call themselves Plateau citizens. From the bustling markets and vibrant arts scene to the tranquil villages and scenic landscapes, the spirit and resilience of Plateau's people shine through in every corner."
            }
            baseURL={"people"}
            baseText={"THE PEOPLE"}
          />
          {/* bottom */}
          <div className="flex flex-col justify-center items-center gap-8 text-center w-[350px] md:w-[650px]">
            <span className="font-medium text-2xl font-geistsans text-white md:text-4xl">
              Looking to visit the Plateau?
            </span>
            <span className="font-normal text-base text-white font-geistsans w-full md:w-[85%]">
              Discover the breathtaking beauty and rich culture of Plateau
              State. From majestic hills and serene waterfalls to vibrant
              festivals and local delicacies, there's something for everyone.
              Experience warm hospitality and unforgettable adventures in
              Nigeria’s crown jewel.
            </span>
            <ButtonDark text={"Explore Plateau"} url={"tourism"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
