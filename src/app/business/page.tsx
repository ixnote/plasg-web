import React from 'react';
import { Header } from "@/layouts";
import Image from 'next/image';
import homeIcon from "../../assets/icons/layouts/home.svg";
import feedIcon from "../../assets/icons/layouts/feed_icon.svg";
import resourcesIcon from "../../assets/icons/layouts/resources.svg";
import servicesIcon from "../../assets/icons/layouts/settings.svg";
import documentIcon from "../../assets/icons/layouts/document.svg";
import Link from 'next/link';

const Business: React.FC = () => {
  const itemList = [
    {
      name: "Feed",
      icon: feedIcon,
      active: false,
      path: "/feed",
    },
    {
      name: "Resources",
      icon: resourcesIcon,
      active: false,
      path: "/resources",
    },
    {
      name: "Services",
      icon: servicesIcon,
      active: false,
      path: "/services",
    },
    {
      name: "Documents",
      icon: documentIcon,
      active: false,
      path: "/documents",
    },
  ];

  return (
    <div>
      <Header />
      <div className='flex justify-center w-full h-[810px]'>
        <div className='w-full h-[810px] bg-lime-800 p-10'>
          <div className='w-full h-[250px] bg-white mt-56'>
            <div className='flex flex-row gap-2 h-[70px]'>
              <Image 
                src={homeIcon} 
                alt="Home Icon" 
                width={15} 
                height={15}
                priority 
              />
              <p className='pt-[20px]'>/</p>
              <p className='pt-[20px]'>Business</p>
            </div>
            <div className='w-full h-[320px] flex justify-start items-start gap-8 '>
              <p className='w-[60%] h-[56px] font-medium text-[52px] leading-[56px]'>Doing business on the Plateau</p>
              <div className="w-[30%] flex justify-start items-center gap-10">
                <span className='h-[168px] bg-brand-grayish w-[1px]'></span>
                <p className='w-[80%]'>
                  Explore a wealth of information, and support services designed to fuel your success and drive economic prosperity across Plateau State. From policy aimed to ensure ease of doing business to guidelines and downloadable documents, discover everything you need to thrive in the vibrant business landscape of our state.
                </p>
              </div>
            </div>
          </div>
          <div>
          <div >
            <div className='flex justify-between mt-24 '>
              <ul className="flex  justify-around gap-[28px] bg-blue-600 h-[150px] w-[70%]">
                {itemList.map((item) => (
                  <li key={item.name} className='flex items-center h-[150px] w-[200px] bg-green-500'>
                    <Link href={item.path} className=" p-4 w-full bg-red-400 text-center">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <button>
                  <p>incentives</p>
                  <img src="" alt="" />
                </button>
              </ul>

              <div>
            </div>
            <img src="" alt="" />
            <p>Filter</p>
            </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
