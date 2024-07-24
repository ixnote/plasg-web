"use client";

import React from "react";
import Image from "next/image";
import { Team } from "../../data";
import SecondCard from "../../secondCard";
import Footer from "@/layouts/Footer";
import bg from "@/assets/imgs/bg-img.svg";
import { useGeneralContext } from "../../../../../../context/GenralContext";
import SectionDividerLight from "@/components/SectionDividerLight";

const About = () => {
  const { oneMda }: any = useGeneralContext();

  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <div
            // className=" mt-20 h-[144px]  w-full flex flex-col items-center"
            className=" mt-20 w-full flex flex-col items-center justify-center bg-no-repeat bg-cover"
          >
            <div className="w-[800px] h-[56px] flex justify-center  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
              <p>About</p>
            </div>
            <div className="w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
              <p>
                We are committed to building a world-class ICT ecosystem that
                fosters innovation, entrepreneurship, and <br /> inclusive
                growth.
              </p>
            </div>
            <div className="w-full mt-16">
              <Image
                src={oneMda?.about?.image}
                width={1360}
                height={580}
                alt="mda_hero_image"
                className="w-[1360px] h-[580px] object-cover rounded-xl xl:w-full"
                // loading="lazy"
              />
            </div>
          </div>
          {/* About */}
          <div className="w-full mt-16 flex justify-between py-8 mb-16  ">
            <div className="w-[40%] h-[350px] gap-4 px-6">
              <span className="w-max text-brand-main font-normal text-base font-geistmono px-2 py-1 border-[1px] border-brand-main rounded">
                About
              </span>
              <p className="w-full h-[170px] flex justify-start items-center font-semibold text-[#0E3E40] font-[Geist] text-[30px] size-[50px] leading-[48px] tracking-[-2%] my-2">
                {oneMda?.about?.title}
              </p>
            </div>
            <div className="w-[50%] h-[350px]-[Geist] font-normal size-[10px] leading-[28px]">
              <p>{oneMda?.about?.description}</p>
            </div>
          </div>
          <SectionDividerLight />
          {/* Vision, mission */}
          <div className="w-full my-16">
            <div className="flex w-full px-10 pb-[120px] gap-4">
              <div className="w-[50%]">
                <div className="h-full w-full ">
                  <header className="w-[66px] h-[30px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2">
                    Vision
                  </header>
                  <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">
                    Our Vision
                  </p>
                  <p className="size-[18px] w-full  font-[Geist] leading-[28px] font-normal text-[#0E3E40] ">
                    {oneMda?.about?.vision}
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="h-full w-full ">
                  <header className="w-[66px] h-[30px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40]  font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2">
                    Mission
                  </header>
                  <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">
                    Our Mission
                  </p>
                  <p className="size-[18px] w-full font-[Geist] leading-[28px] font-normal text-[#0E3E40] ">
                    {oneMda?.about?.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SectionDividerLight />
          {/* Team */}
          <div className="w-full my-8">
            <div className=" h-full  ">
              <div className=" mt-20 h-[204px]  w-full flex flex-col items-center">
                <header className="w-[100px]  h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[Geist] rounded-md mb-4">
                  Vision
                </header>

                <div className="w-[800px] h-[76px] flex justify-center p-4  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
                  <p>Our Team</p>
                </div>
                <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
                  <p className="text-[#0E3E40]">
                    Stay connected with the latest from {oneMda?.abbreviation}.
                    Get brief updates on new projects, collaborations, and
                    innovations shaping our state.
                  </p>
                </div>
              </div>
              <div className="p-8 flex justify-center mx-auto">
                <div className="grid  grid-cols-3 mx-auto gap-x-16">
                  {oneMda?.team.map((item: any, i: number) => (
                    <SecondCard
                      key={i}
                      id={item?._id}
                      name={item.name}
                      image={item.image}
                      position={item.role}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
