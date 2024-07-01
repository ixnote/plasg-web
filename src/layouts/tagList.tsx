import Image from "next/image";
import arrow_left_icon from "@/assets/icons/layouts/arrow_left_icon.svg";
import directional_arrow_left_icon from "@/assets/icons/layouts/directional_arrow_left_icon.svg";
import Link from "next/link";

type Item = {
  id: number;
  title: string;
  forwardArrow: boolean;
};

const TagList = ({ id, title, forwardArrow }: Item) => {
  return (
    <div className="relative w-[376px] h-[68px] border-b-[0.5px] border-[#325B5D] cursor-pointer overflow-hidden group">
      <div className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
        <div className="w-full flex justify-between">
          <Link
            href={title.toLowerCase()}
            className="w-full flex items-center gap-8"
          >
            <p className="font-geistmono font-light leading-6 text-brand-white">
              {id}
            </p>
            <p className="text-[28px] leading-9 tracking-[-2px] font-medium text-brand-white">
              {title}
            </p>
          </Link>
        </div>

        {forwardArrow ? (
          <Image src={arrow_left_icon} alt="ARROW LEFT ICON" />
        ) : (
          ""
        )}
      </div>

      <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-brand-lightYellow transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <div className="w-full flex justify-between">
          <Link
            href={title.toLowerCase()}
            className="w-full flex items-center gap-8"
          >
            <p className="font-geistmono font-light leading-6 text-brand-dark transition-transform duration-300 ease-in-out transform group-hover:translate-x-4">
              {id}
            </p>
            <p className="text-[28px] leading-9 tracking-[-0.56px] font-medium text-brand-dark">
              {title}
            </p>
          </Link>
        </div>
        <div className="transition-transform duration-100 ease-in-out transform group-hover:-translate-x-[25px]">
          <Image src={directional_arrow_left_icon} alt="ARROW LEFT ICON" />
        </div>
      </div>
    </div>
  );
};

export default TagList;
