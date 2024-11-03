import React from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/formatDate";

const ResourceCard = ({
  id,
  url,
  type,
  title,
  mda,
  description,
  updated,
  created,
  date,
}: any) => {
  const router = useRouter();
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
      return;
    } else {
      id && router.push(`/search/one?id=${id}`);
      return;
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="group transition-fx relative flex flex-col items-start justify-start gap-4 cursor-pointer px-4 py-10 border-b-[0.1px] border-brand-grayish/20 hover:bg-brand-lightYellow hover:rounded-lg lg:px-0 lg:flex-row lg:gap-0"
      >
        <div className="transition-fx w-full font-geistmono flex items-start text-brand-grayish text-lg font-light uppercase lg:w-[20%] lg:group-hover:pl-8">
          {type}
        </div>
        <div className="w-full flex flex-col gap-2 items-start justify-start font-geistsans lg:w-[70%]">
          <div className="font-medium text-2xl text-left text-brand-dark max-h-[64px] overflow-y-hidden">
            {title}
          </div>
          <div className="flex gap-2 items-center font-normal text-sm text-brand-grayish mb-2">
            {date ? (
              <span>{formatDate(date)}</span>
            ) : (
              <span>{updated ? formatDate(updated) : formatDate(created)}</span>
            )}
            <span>•</span>
            <span>{mda}</span>
          </div>
          <span className="font-normal text-lg text-brand-dark/70 max-h-[135px] overflow-y-hidden lg:max-h-[90px]">
            {description.length > 400
              ? description.substring(0, 400) + ". . ."
              : description}
          </span>
        </div>
        <div className="transition-fx absolute top-12 right-2 hidden group-hover:block group-hover:right-8">
          {url ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11479 24.7417L0.257794 21.8847L17.3998 4.74277L1.68629 4.74277V0.68583H24.3137V23.3132L20.2568 23.3132L20.2568 7.59976L3.11479 24.7417Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.0202L0 13.9798H24.2424L13.1313 2.86869L16 1.90735e-06L32 16L16 32L13.1313 29.1313L24.2424 18.0202H0Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
