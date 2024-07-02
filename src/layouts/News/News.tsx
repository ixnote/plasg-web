import Image from "next/image";
import React from "react";
import ArticleImage from "@/assets/imgs/img.png";
import NewsCard from "@/components/NewsCard";

function News() {
  const links = [
    { name: "National", id: "adcasdkj" },
    { name: "International", id: "nkwjwns" },
    { name: "Politics", id: "sjsksns" },
    { name: "Regulation", id: "dshjdsdkd" },
    { name: "Business", id: "ansksdjee" },
    { name: "Finance", id: "nsjsiee" },
    { name: "Health Care", id: "mxkxhdaw" },
    { name: "Technology", id: "yhsowhje" },
    { name: "Security", id: "hskssisi" },
    { name: "Media", id: "dgsjswnejs" },
    { name: "Administration", id: "xbsjxbjs" },
    { name: "Sports", id: "hdjdhsksn" },
    { name: "Entertainment", id: "sksowjejs" },
    { name: "Finance", id: "hksnskwns" },
  ];

  const news = [
    {
      image: ArticleImage,
      title:
        "Gov. Mutfwang Partners with International NGOs to Address Humanitarian Needs of Vulnerable People",
      category: "Welfare ",
    },
  ];
  return (
    <div className="pt-[200px] p-5">
      <span className="max-w-[1360px] mx-auto flex gap-5">
        <span className="w-[300px] flex flex-col gap-6 bg-white p-7 rounded-xl">
          <p className="text-[28px] text-brand-main font-medium max-w-[800px] leading-[32px] lg:col-span-3 col-span-2 lg:border-r-[1px] lg:border-r-gray-200">
            Categories
          </p>
          <span className="flex flex-col gap-4">
            {links.map((item) => (
              <p key={item.id}>{item.name}</p>
            ))}
          </span>
        </span>
        <span className="flex-grow grid lg:grid-cols-4 gap-5 grid-cols-1 w-full">
          <span className="col-span-3 flex w-full  items-start bg-white border border-gray-200 h-[350px]">
            <span className="w-full h-full max-w-[500px] aspect-[11/7] object-cover bg-[#588065] image-container ">
              <Image
                src={news[0].image}
                alt=""
                width={500}
                height={300}
                className="w-full h-full max-w-[500px] aspect-[11/7] object-cover bg-[#588065] zoom-out-image"
              />
            </span>
            <span className="p-5 flex flex-col justify-between h-full flex-grow max-w-[40%]">
              <p className="text-[20px] text-brand-main font-medium max-w-[800px] leading-[28px] lg:col-span-3 col-span-2 ">
                {news[0].title}
              </p>
              <span className="flex gap-5">
                <p className="pr-6 border-r-[1px] border-r-gray-300">Now</p>
                <span className="px-4 rounded-lg text-white bg-brand-main py-1">
                  {news[0].category}
                </span>
              </span>
            </span>
          </span>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <NewsCard key={index} data={news[0]} />
          ))}
        </span>
      </span>
    </div>
  );
}

export default News;
