"use client";

import Header from "./header";
import logo from "@/assets/imgs/layouts/PICDA.svg";
import Arrow from "@/assets/icons/layouts/arrow.svg";
import Hero_image from "@/assets/imgs/hero_img.svg";
import arrow from "@/assets/icons/layouts/right_arrow.svg";
import dg_image from "@/assets/imgs/dg.svg";
import AssetCardLight from "@/components/AssetCardLight";
import { itemList } from "./data";
import { newsList } from "./data";
import arrowIcon from "@/assets/icons/layouts/right_arrow.svg";
import Cards from "./cards";
import Nav from "./nav";
import Footer from "@/layouts/Footer";

import Image from "next/image";
import ButtonDark from "@/components/ButtonDark";
import ButtonLight from "@/components/ButtonLight";
import Link from "next/link";

const Mdas = () => {
  return (
    <div className="first relative  h-full bg-white">
      <Nav />
      <div className="main-content">
        <div className=" h-[450px] w-full mt-32  flex justify-between p-14">
          <div className=" w-[50%]  h-[362px] flex flex-col justify-between">
            <h1 className="font-bold text-[#0E3E40] text-[50px] ">
              Transforming Government <br /> Services through ICT
            </h1>
            <p className="">
              The best place to find government services and <br /> information
              under the Plateau State Information <br /> Communication
              Technology Development Agency (PICTDA)
            </p>
            <Link
              href={"/mda/library"}
              className="transition-fx text-brand-white bg-brand-main h-[54px] w-[209px] flex justify-center items-center rounded-lg cursor-pointer font-normal text-base font-geistsans hover:bg-brand-lightYellow hover:text-brand-dark hover:px-6 hover:border-brand-lightYellow"
            >
              View Library
              <Image className="mx-4" src={Arrow} alt="" />
            </Link>
          </div>
          <div className="h-[209px] w-[40%] flex justify-end ">
            <Image src={logo} alt="LOGO" className="w-[220px] h-[209px]" />
          </div>
        </div>
        <div>
          <Image src={Hero_image} alt="" className="w-full p-14" />
        </div>
      </div>

      <div className="w-full h-[1150px]  pb-[100px]">
        <hr className="border-[1px] border-[rgb(212,212,212)]" />
        <div className="flex w-full justify-between px-16 mt-32 ">
          <div className=" w-[50%] h-[750px] px-32 pt-32  gap-20 ">
            <div className="h-[250px] w-[720px] mb-9">
              <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[geist] rounded-md mb-6">
                Director
              </header>
              <p className=" w-[520px] h-[150px] flex justify-start items-center text-[#0E3E40] font-[geist] text-4xl size-10 font-medium leading-[48px] mb-10">
                From the Director General of PICTDA
              </p>
            </div>
            <div className=" mb-32 ">
              <p className="text-[#00000070]">
                PICTDA will work closely with decision makers in other arms of{" "}
                <br />
                Ministries, Departments and Agencies to improve G2G initiatives
                as <br />
                well as develop, identify, implement and recommend
                cost-effective <br />
                technological solutions for all aspects of Plateau State
                Government's <br /> business activities and also coordinate ICT
                development in Plateau <br /> State.
              </p>
            </div>
            <Link
              href={"/mda/about"}
              className="transition-fx text-brand-main w-[50%] h-[56px] border-[2px] border-[#9CA3AF] flex justify-center items-center rounded-md font-normal text-base font-geistsans hover:bg-brand-lightYellow hover:border-brand-lightYellow"
            >
              <p className="pr-[5px]">About Us</p>
              <Image src={arrow} alt="" className="pl-[5px]" />
            </Link>
          </div>
          <div className="w-[50%]">
            <Image src={dg_image} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>

      <div className="w-full h-[1880px] px-10 pb-[120px]  ">
        <hr className=" mb-[150px] border-[1px] border-[#D4D4D4]" />
        <div className="pb-[80px]  pt-[20px]">
          <span className="border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-3 font-[geist] rounded-md mb-6 p-2">
            Quick access
          </span>
          <p className="w-[800px] h-[150px] flex justify-start items-center text-[#0E3E40] font-[geist] text-5xl size-11 font-medium leading-[48px] mb-10">
            Easily Access Essential Information on Topics of Interest
          </p>
          <p className="text-[#00000080] w-[750px]">
            Find key information quickly on a variety of important topics right
            here on the Plateau Government website.
          </p>
        </div>
        <div className="flex justify-center h-[1100px] ">
          <div className="flex items-center justify-between flex-wrap gap-4 w-full h-full m-auto my-4">
            {itemList.map((item) => (
              <AssetCardLight
                key={item.id}
                icon={item.icon}
                logoText={item.logoText}
                updated={item.updated}
                title={item.title}
                description={item.description}
                byText={item.byText}
                button1text={item.button1text}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-[118px] flex justify-center pb-28 mt-14">
          <div className="w-[237px]">
            {/* <p className="w-[400px] h-[24px]">See all Services</p>
            <Image
              src={arrowIcon}
              alt=""
              className=" w-[18px] font-[Geist] h-[18px]"
            /> */}
            <ButtonLight text={"See all Services"} />
          </div>
        </div>
      </div>

      <div className="w-full h-[1800px]  px-[40px] pt-[0px] pb-[120px] ">
        <hr className="  border-[1px] border-[#D4D4D4] mb-28" />
        <div className="  h-[254px] pb-[80px] bg-white ">
          <div className="  gap-4">
            <header className="w-[100px] h-[32px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-3 font-[geist] rounded-md mb-6">
              News
            </header>
            <p className="w-[800px] h-[48px] flex justify-start items-center text-[#0E3E40] font-[geist] text-5xl size-11 font-medium leading-[48px] mb-10">
              News Updates
            </p>
            <p className="text-[#00000080] w-[750px]">
              Stay connected with the latest from the Plateau State ICT
              Development Agency. Get brief updates on new projects,
              collaborations, and tech innovations shaping our state.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center h-[1150px]">
          {newsList.map((item) => (
            <Cards
              key={item.id}
              newsDate={item.date}
              image={item.image}
              topic={item.topic}
              text={item.text}
            />
          ))}
        </div>
        <div className="w-full h-[70px] flex justify-center">
          <div className="w-[237px]">
            {/* <p className="w-[400px] h-[24px]">See all Services</p>
            <Image
              src={arrowIcon}
              alt=""
              className=" w-[18px] font-[Geist] h-[18px]"
            /> */}
            <ButtonLight text={"See all Services"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mdas;
