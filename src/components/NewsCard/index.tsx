import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsCard({ data, onClick, id }: any) {
  return (
    <Link href={`/news/${id}`}>
      <span
        className="col-span-1 flex flex-col bg-white border border-gray-200  h-[350px] cursor-pointer"
        onClick={onClick}
      >
        <span className=" h-full max-w-[400px] aspect-[11/6] object-cover bg-[#588065] image-container ">
          <Image
            src={data?.image}
            alt=""
            width={500}
            height={300}
            className="w-full h-full max-w-[500px] aspect-[11/6] object-cover bg-[#588065] zoom-out-image"
          />
        </span>
        <span
          className="p-4 flex flex-col justify-between h-full flex-grow "
          onClick={onClick}
        >
          <p className="text-[16px] text-brand-main font-medium max-w-[400px] leading-[20px] lg:col-span-3 col-span-2 capitalize">
            {data?.headline?.slice(0, 57)}
            {data?.headline?.length > 57 && "..."}
          </p>
          <span className="text-brand-dark font-geistsans font-light text-sm">
            {data?.description?.slice(0, 80)}
            {data?.description?.length > 80 && "..."}
          </span>
          <span className="flex gap-5 items-center">
            <p className="pr-6 border-r-[1px] text-brand-dark/70 text-xs border-r-gray-300">
              {formatDate(data?.updatedAt)}
            </p>
            {data?.tags?.length > 0 && (
              <>
                {data?.tags[0]?.name && (
                  <span className="px-4 rounded-lg text-sm text-white bg-brand-main py-1">
                    {data?.tags[0]?.name}
                  </span>
                )}
              </>
            )}
          </span>
        </span>
      </span>
    </Link>
  );
}

export default NewsCard;
