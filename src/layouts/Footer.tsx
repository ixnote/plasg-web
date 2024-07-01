import Image from "next/image";
import Link from "next/link";
import React from "react";
import top from "../../public/footer/footer_top.svg";
import left from "../../public/footer/footer_left.svg";
import right from "../../public/footer/footer_right.svg";
import Newsletter from "@/app/home/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <SectionDividerDark />
      <div className="min-h-screen flex flex-col items-center justify-center py-24 bg-brand-main">
        {/* content */}
        <div className="flex flex-col items-between justify-between gap-16 w-[92%] h-[70%]">
          {/* Links */}
          <div className="flex flex-col gap-12 justify-between items-start lg:flex-row lg:gap-4">
            <div className="flex flex-col items-center gap-3 w-full lg:items-start">
              <span className="font-geistsans font-medium text-xl text-brand-white">
                Governance
              </span>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Debt Management
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Budgets Performances{" "}
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Financial Reports
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Policies
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full lg:items-start">
              <span className="font-geistsans font-medium text-xl text-brand-white">
                Health
              </span>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Policies
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Maternal & Child Health
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full lg:items-start">
              <span className="font-geistsans font-medium text-xl text-brand-white">
                Welfare
              </span>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Education
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Housing & Land
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Security
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Employment
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full lg:items-start">
              <span className="font-geistsans font-medium text-xl text-brand-white">
                Business
              </span>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Investments
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Incentives
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Economic Policies
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Reports
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 w-full lg:items-start">
              <span className="font-geistsans font-medium text-xl text-brand-white">
                About
              </span>
              <div className="flex flex-col items-center gap-2 lg:items-start">
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  People
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  The Government
                </Link>
                <Link
                  href={"#"}
                  className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
                >
                  Visit Plateau
                </Link>
              </div>
            </div>
          </div>
          {/* Plateau */}
          <div className="flex items-center justify-center p-4">
            <Image src={top} alt="top footer" className="w-full h-full" />
          </div>
          {/* logos */}
          <div className="flex items-center justify-between p-4">
            <span className="w-[80px] md:w-[150px]">
              <Image src={left} alt="bottom left" className="w-full h-full" />
            </span>
            <span className="w-[80px] md:w-[150px]">
              <Image src={right} alt="bottom right" className="w-full h-full" />
            </span>
          </div>
          {/* down bottom */}
          <div className="flex flex-col items-center justify-between gap-8 p-4 md:flex-row md:items-end">
            <span className="font-geistsans font-normal text-base text-center text-brand-white/55">
              Copyright ©2024 Plateau State Government. All rights reserved.
            </span>
            <div className="flex items-center justify-between gap-4 md:flex-col md:gap-8 md:items-start lg:flex-row">
              <a
                href="#"
                className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
              >
                Email
              </a>
              <a
                href="#"
                className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
              >
                Facebook
              </a>
              <a
                href="#"
                className="font-geistsans font-normal text-base text-brand-white/55 hover:text-brand-secondary"
              >
                X (Formerly Twitter){" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
