import React from "react";
import SettingIcon from "@/assets/icons/settings.svg?url";
import Image from "next/image";
import { RiOrganizationChart } from "react-icons/ri";
import ButtonComponent from "../Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

function ArticleCard({ onclick }: any) {
  return (
    <div
      onClick={onclick}
      className="col-span-1 bg-[#E5E7EB] lg:p-8 p-5 rounded-2xl flex flex-col gap-4 justify-between h-[540px] hover:bg-brand-lightYellow"
    >
      <span className="flex flex-col gap-[64px]">
        <span className="flex justify-between">
          <span className="flex flex-col gap-2">
            <Image src={SettingIcon} alt="" />
            <p className="text-[18px] font-medium">Service</p>
          </span>
          <p className="text-[14px] font-light text-[#6B7280]">Updated Today</p>
        </span>
        <span className="flex flex-col gap-8">
          <span className="flex flex-col gap-2">
            <p className="text-[32px] text-brand-main">
              Driver's License Application Status Check
            </p>
            <span className="flex gap-1 text-brand-grayish items-center">
              <RiOrganizationChart className="text-[16px]" />
              <p className="text-[14px] font-normal text-[#6B7280] m-0">
                Plateau Ministry of Transport
              </p>
            </span>
          </span>
          <p className="text-[18px] font-normal text-brand-main m-0">
            Online portal for checking the status of a driver's license
            application, including updates on processing and approval.
          </p>
        </span>
      </span>
      <span className="flex justify-between items-center">
        <span className="flex gap-2">
          <Link href={`/search/dabdgbadg`}>
            <ButtonComponent> View</ButtonComponent>
          </Link>
          <ButtonComponent className="text-brand-main border-none">
            Download
          </ButtonComponent>
        </span>
        <button className="text-brand-main border-none hover:bg-none px-0">
          <IoArrowForwardOutline size={28} />
        </button>
      </span>
    </div>
  );
}

export default ArticleCard;
