import React from "react";
import SettingIcon from "@/assets/icons/settings.svg?url";
import Image from "next/image";
import { RiOrganizationChart } from "react-icons/ri";
import ButtonLight from "../ButtonLight";
import ButtonComponent from "../Button";

function ArticleCard() {
  return (
    <div className="col-span-1 bg-[#E5E7EB] p-8 rounded-2xl flex flex-col gap-4">
      <span>
        <span className="flex justify-between">
          <span className="flex flex-col gap-2">
            <Image src={SettingIcon} alt="" />
            <p className="text-[18px] font-medium">Service</p>
          </span>
          <p className="text-[14px] font-light text-[#6B7280]">Updated Today</p>
        </span>
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
          <p className="text-[18px] font-normal text-brand-main m-0">
            Online portal for checking the status of a driver's license
            application, including updates on processing and approval.
          </p>
        </span>
      </span>
      <span>
        <ButtonComponent> View</ButtonComponent>
      </span>
    </div>
  );
}

export default ArticleCard;
