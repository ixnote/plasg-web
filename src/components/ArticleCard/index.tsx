import React from "react";
import SettingIcon from "@/assets/icons/settings.svg";
import Image from "next/image";
import { RiOrganizationChart } from "react-icons/ri";
import ButtonComponent from "../Button";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

function ArticleCard({ onclick }: any) {
  return (
    <div
      onClick={onclick}
      className="group col-span-1 bg-[#284F51] lg:p-8 p-5 rounded-2xl flex flex-col gap-4 justify-between h-[540px] hover:bg-brand-lightYellow text-white"
    >
      <span className="flex flex-col gap-[64px]">
        <span className="flex justify-between">
          <span className="flex flex-col gap-2">
            <Image src={SettingIcon} alt="" />
            <p className="text-[18px] font-medium group-hover:text-black">
              Service
            </p>
          </span>
          <p className="text-[14px] font-light group-hover:text-[#6B7280]">
            Updated Today
          </p>
        </span>
        <span className="flex flex-col gap-8">
          <span className="flex flex-col gap-2">
            <p className="text-[32px] group-hover:text-brand-main">
              Driver&apos;s License Application Status Check
            </p>
            <span className="flex gap-1 text-brand-grayish items-center">
              <RiOrganizationChart className="text-[16px]" />
              <p className="text-[14px] font-normal group-hover:text-[#6B7280] m-0">
                Plateau Ministry of Transport
              </p>
            </span>
          </span>
          <p className="text-[18px] font-normal text-[#CFD8D9] group-hover:text-brand-main m-0">
            Online portal for checking the status of a driver&apos;s license
            application, including updates on processing and approval.
          </p>
        </span>
      </span>
      <span className="flex justify-between items-center">
        <span className="flex gap-2">
          <Link href={`/search/dabdgbadg`}>
            <ButtonComponent> View Website</ButtonComponent>
          </Link>
          {/* <ButtonComponent className="text-brand-main border-none">
            Download
          </ButtonComponent> */}
        </span>
        <button className="text-brand-main border-none hover:bg-none px-0 group-hover:block hidden">
          <MdOutlineArrowOutward size={28} />
        </button>
      </span>
    </div>
  );
}

export default ArticleCard;
