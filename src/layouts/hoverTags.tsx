"use client";
import React, { useState } from "react";
import TagList from "./tagList";
import { useGeneralContext } from "../../context/GenralContext";

// type SubItemType = {
//   _id: string;
//   title: string;
//   forwardArrow: boolean;
//   subMenu?: SubItemType[];
// };

const HoverTags = ({ data, setHoveredMenuData }: any) => {
  // console.log("🚀 ~ HoverTags ~ data:", data);
  const { setTopicTagId, setTopicSubTagId }: any = useGeneralContext();

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
    id: string;
    paragraph: string;
    subTitle: string;
    backgroundImage: string;
  };

  type SubItemType = {
    _id: any;
    title: string;
    name: string;
    path: string;
    id: string;
    forwardArrow: boolean;
    paragraph: string;
    subTitle: string;
    backgroundImage: string;
    subMenu?: SubItemType[];
  };

  const [currentItem, setCurrentItem] = useState<ItemType>({
    id: "",
    paragraph: "",
    subTitle: "",
    backgroundImage: "",
  });

  // console.log("🚀 ~ HoverTags ~ currentItem:", currentItem);
  const [subItems, setSubItems] = useState<SubItemType[]>([]);

  const handleMouseEnter = (item: any) => {
    if (
      (item.forwardArrow || item?.sub_tags?.length > 0) &&
      (Array.isArray(item.subMenu) || Array.isArray(item?.sub_tags))
    ) {
      setSubItems(item?.subMenu || item?.sub_tags);
      setIsSubMenuActive(true);
    }
    setTopicTagId(item.id);
    setCurrentItem({
      id: item.id,
      paragraph: item.paragraph,
      subTitle: item.subTitle,
      backgroundImage: item.backgroundImage,
    });
  };

  const handleMouseEnterSub = (item: any) => {
    if (
      (item.forwardArrow || item?.sub_tags?.length > 0) &&
      (Array.isArray(item.subMenu) || Array.isArray(item?.sub_tags))
    ) {
      setSubItems(item?.subMenu || item?.sub_tags);
      setIsSubMenuActive(true);
    }
    setTopicSubTagId(item.id);
    setCurrentItem({
      id: item.id,
      paragraph: item.paragraph,
      subTitle: item.subTitle,
      backgroundImage: item.backgroundImage,
    });
  };

  const handleMouseLeaveMain = () => {
    setTopicSubTagId("");
    setIsSubMenuActive(false);
  };

  const handleMouseLeaveSub = () => {
    setSubItems([]);
    setIsSubMenuActive(false);
    setTopicSubTagId("");
  };

  return (
    <div className="w-full border px-10">
      <div className="grid grid-cols-3">
        <div
          className="w-full flex flex-col"
          onMouseLeave={handleMouseLeaveMain}
        >
          {data.map((item: any, i: number) => (
            <div key={i} onMouseEnter={() => handleMouseEnter(item)}>
              <TagList
                // id={item._id}
                key={i}
                id={i + 1}
                title={item.name}
                path={item.path || "#"}
                // path={"#"}
                tagId={item.id}
                forwardArrow={item.forwardArrow || item?.sub_tags?.length > 0}
                setHoveredMenuData={setHoveredMenuData}
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
              {subItems.map((subItem, i) => (
                <div key={i} onMouseEnter={() => handleMouseEnterSub(subItem)}>
                  <TagList
                    id={subItem._id}
                    title={subItem.name}
                    // path={subItem.path}
                    path={"#"}
                    forwardArrow={false}
                    subTagId={subItem.id}
                    setHoveredMenuData={setHoveredMenuData}
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
