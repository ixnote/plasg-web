"use client";
import React, { useState } from "react";
import TagList from "./tagList";

// type SubItemType = {
//   _id: string;
//   title: string;
//   forwardArrow: boolean;
//   subMenu?: SubItemType[];
// };

const HoverTags = ({ data }: any) => {
  // const [subItems, setSubItems] = useState([]);
  const [isSubMenuActive, setIsSubMenuActive] = useState(false);
  // const [currentItem, setCurrentItem] = useState({
  //   paragraph: "",
  //   subTitle: "",
  //   backgroundImage: "",
  // });

  //  const [currentItem, setCurrentItem] = useState<SubItemType>({
  //    _id: "",
  //    title: "",
  //    forwardArrow: false,
  //    subMenu: [],
  //    paragraph: "",
  //    subTitle: "",
  //    backgroundImage: "",
  //  });

  type ItemType = {
    paragraph: string;
    subTitle: string;
    backgroundImage: string;
  };

  type SubItemType = {
    _id: any;
    title: string;
    path: string;
    forwardArrow: boolean;
    paragraph: string;
    subTitle: string;
    backgroundImage: string;
    subMenu?: SubItemType[];
  };

  const [currentItem, setCurrentItem] = useState<ItemType>({
    paragraph: "",
    subTitle: "",
    backgroundImage: "",
  });

  const [subItems, setSubItems] = useState<SubItemType[]>([]);

  const handleMouseEnter = (item: any) => {
    if (item.forwardArrow && Array.isArray(item.subMenu)) {
      setSubItems(item.subMenu);
      setIsSubMenuActive(true);
    }
    setCurrentItem({
      paragraph: item.paragraph,
      subTitle: item.subTitle,
      backgroundImage: item.backgroundImage,
    });
  };

  const handleMouseLeaveMain = () => {
    setIsSubMenuActive(false);
  };

  const handleMouseLeaveSub = () => {
    setSubItems([]);
    setIsSubMenuActive(false);
  };

  return (
    <div className="w-full border px-10">
      <div className="grid grid-cols-3">
        <div
          className="w-full flex flex-col"
          onMouseLeave={handleMouseLeaveMain}
        >
          {data.map((item: any) => (
            <div key={item._id} onMouseEnter={() => handleMouseEnter(item)}>
              <TagList
                id={item._id}
                title={item.title}
                path={item.path}
                forwardArrow={item.forwardArrow}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-full">
          {isSubMenuActive && (
            <div
              className="w-full flex flex-col"
              onMouseLeave={handleMouseLeaveSub}
              onMouseEnter={() => setIsSubMenuActive(true)}
            >
              {subItems.map((subItem) => (
                <div
                  key={subItem._id}
                  onMouseEnter={() => handleMouseEnter(subItem)}
                >
                  <TagList
                    id={subItem._id}
                    title={subItem.title}
                    path={subItem.path}
                    forwardArrow={false}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("${
              currentItem.backgroundImage ||
              "https://t3.ftcdn.net/jpg/02/56/53/92/360_F_256539200_qvvgH7A1c0usfZWWBCdcOjZdj2A9Fezv.jpg"
            }")`,
          }}
        >
          <div className="w-full h-full bg-[#0E3E4073]">
            <div className="w-full h-full p-8">
              <p className="font-medium text-[28px] leading-10 text-brand-white">
                {currentItem.subTitle || "Library: Find Information"}
              </p>

              <p className="mt-[23px] text-[17px] text-brand-white">
                {currentItem.paragraph ||
                  "Navigate through a wealth of information about Plateau State with ease. Access downloadable documents, online services, media resources, policies, laws, state records and insights into the diverse people that make up our vibrant community—all in one convenient location."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverTags;
