import React from "react";
import ButtonDark from "@/components/ButtonDark";

const Newsletter = () => {
  return (
    <>
      <div className="flex items-center justify-center py-24 bg-brand-main">
        {/* content */}
        <div className="flex flex-col gap-10 items-start justify-between w-[92%] h-[70%] lg:gap-0 lg:flex-row">
          {/* left */}
          <div className="max-h-[204px] h-[20%] flex flex-col gap-8 w-full lg:w-[65%]">
            <span className="font-medium text-4xl font-geistsans text-white">
              Join Our Newsletter
            </span>
            <span className="font-normal text-base text-white font-geistsans w-full lg:w-[75%]">
              Stay informed and connected with the latest updates and news from
              Plateau State. Subscribe to our newsletter and never miss out on
              important information and events.
            </span>
          </div>
          {/* right */}
          <div className="flex flex-col justify-center items-start gap-8 text-center w-full lg:w-[40%]">
            <div className="flex flex-col items-start justify-center gap-2">
              <label className="font-medium text-sm text-brand-white font-geistsans">
                E-mail address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="namesurname@email.com"
                className="w-[350px] py-4 border-b-[1px] text-brand-white border-brand-grayish bg-transparent focus:outline-none md:w-[422px]"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
              <ButtonDark
                text={"Subscribe to our newsletter"}
                width={"1422px"}
              />
              <span className="flex items-center justify-center gap-1 font-normal text-xs text-brand-grayish font-geistsans">
                By subscribing you agree to with our{" "}
                <a href="#" className="text-brand-secondary ">
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
