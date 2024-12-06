"use client";

import React, { Suspense, useEffect } from "react";
import Image from "next/image";

import SecondCard from "../../secondCard";

import { useGeneralContext } from "../../../../../../context/GenralContext";
import SectionDividerLight from "@/components/SectionDividerLight";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { useSearchParams } from "next/navigation";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const About = () => {
  const {
    allResources,
    setOneMda,
    setMdaSlug,
    oneMda,
  }: any = useGeneralContext();

  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  // console.log("🚀 ~ About ~ slug: ", slug);

  const {
    data: mda,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getMda", slug],
    queryFn: getMda,
    enabled: !!slug,
  });
  // console.log("🚀 ~ Mdas ~ mda:", mda?.data.data);

  useEffect(() => {
    if (slug) {
      setMdaSlug(slug);
    }
  }, [slug]);
  // }, [params]);

  useEffect(() => {
    setOneMda(mda?.data.data.mda);
    allResources();
  }, [mda]);

  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] mt-[170px] bg-brand-white relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <div
            // className=" mt-20 h-[144px]  w-full flex flex-col items-center"
            className="mt-12 w-full flex flex-col gap-4 items-center justify-center bg-no-repeat bg-cover"
          >
            <div className="w-full h-[56px] flex justify-center  font-semibold font-geistsans size-[52px] text-3xl text-brand-main">
              <p>About</p>
            </div>
            <div className="w-full font-geistsans flex justify-center text-center leading-[28px] text-[#00000070]">
              <p className="text-brand-dark font-geistsans">
                {oneMda?.about?.title || mda?.data?.data?.about?.title}
              </p>
            </div>
            {/* <div className="w-full h-[56px] font-geistsans flex justify-center text-center leading-[28px] text-brand-dark/70">
              <p>{oneMda?.about?.title}</p>
              <p>
                We are committed to building a world-class ICT ecosystem that
                fosters innovation, entrepreneurship, and <br /> inclusive
                growth.
              </p>
            </div> */}
            <div className="w-full mt-16">
              <Image
                src={oneMda?.about?.image || mda?.data?.data?.about?.image}
                width={1360}
                height={580}
                alt="mda_hero_image"
                className="w-[1360px] h-[580px] object-cover rounded-xl xl:w-full"
                // loading="lazy"
              />
            </div>
          </div>
          {/* About */}
          <div className="w-full mt-16 flex flex-col gap-8 justify-between py-8 mb-8 bg-brand-white lg:flex-row">
            <div className="w-full flex flex-col lg:gap-4 lg:px-6 lg:w-[40%]">
              <span className="w-max mb-8 text-brand-main font-normal text-base font-geistmono px-2 py-1 border-[1px] border-brand-main rounded">
                About
              </span>
              <p className="w-full flex justify-start items-center font-semibold text-brand-main font-geistsans text-2xl size-[50px]  my-2 lg:text-[30px] lg:leading-[48px] lg:tracking-[-2%]">
                {oneMda?.about?.title || mda?.data?.data?.about?.title}
              </p>
            </div>

            <div className="w-full font-geistsans text-lg font-normal lg:text-lg lg:w-[50%]">
              {
                <QuillEditor
                  value={
                    oneMda?.about?.description ||
                    mda?.data?.data?.about?.description
                  }
                  theme="bubble"
                  readOnly
                />
              }
              {/* <p>{oneMda?.about?.description}</p> */}
            </div>
          </div>
          <SectionDividerLight />
          {/* Vision, mission */}
          <div className="w-full my-16">
            <div className="flex flex-col gap-16 w-full lg:px-10 lg:gap-4 lg:flex-row">
              <div className="w-full lg:w-[48%]">
                <div className="h-full w-full ">
                  <header className="w-[66px] h-[30px] flex justify-center items-center border-brand-main border-2 text-brand-main font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2 lg:ml-3">
                    Vision
                  </header>
                  <p className="w-full h-[100px] flex justify-start items-center text-brand-main font-[Geist] text-4xl size-10 font-medium leading-[48px] lg:ml-3">
                    Our Vision
                  </p>
                  <p className="w-full font-geistsans text-lg font-normal text-brand-dark ">
                    {
                      <QuillEditor
                        value={
                          oneMda?.about?.vision ||
                          mda?.data?.data?.about?.vision
                        }
                        theme="bubble"
                        readOnly
                      />
                    }
                    {/* {oneMda?.about?.vision} */}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[48%]">
                <div className="h-full w-full ">
                  <header className="w-[66px] h-[30px] flex justify-center items-center border-brand-main border-2 text-brand-main  font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2 lg:ml-3">
                    Mission
                  </header>
                  <p className="w-full h-[100px] flex justify-start items-center text-brand-main font-[Geist] text-4xl size-10 font-medium leading-[48px] lg:ml-3">
                    Our Mission
                  </p>
                  <p className="w-full font-geistsans text-lg font-normal text-brand-dark ">
                    {
                      <QuillEditor
                        value={
                          oneMda?.about?.mission ||
                          mda?.data?.data?.about?.mission
                        }
                        theme="bubble"
                        readOnly
                      />
                    }
                    {/* {oneMda?.about?.mission} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {(oneMda?.team?.length > 0 || mda?.data?.data?.team?.length > 0) && (
            <>
              <SectionDividerLight />
              {/* Team */}
              <div className="w-full my-8">
                <div className="w-full h-full">
                  <div className="mt-20 mb-8 w-full flex flex-col items-center">
                    <header className="w-[100px] h-[40px] flex justify-center items-center border-brand-main border-2 text-brand-main font-normal leading-3 size-4 font-geistsans rounded-md mb-4">
                      Team
                    </header>

                    <div className="w-full h-[76px] flex justify-center p-4  font-semibold font-geistsans size-[52px] text-3xl text-brand-main">
                      <p>Our Team</p>
                    </div>
                    <div className="w-full font-geistsans flex justify-center text-center leading-[28px] text-[#00000070]">
                      <p className="text-brand-dark font-geistsans">
                        Stay connected with the latest from{" "}
                        {oneMda?.abbreviation ||
                          mda?.data?.data?.about?.abbreviation}
                        . Get brief updates on new projects, collaborations, and
                        innovations shaping our state.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mx-auto lg:p-8">
                    <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-3 lg:mx-auto lg:gap-x-16">
                      {/* {oneMda?.team.map((item: any, i: number) => (
                        <SecondCard
                          key={i}
                          id={item?._id}
                          name={item?.name}
                          image={item?.image}
                          position={item?.role}
                        />
                      ))} */}
                      {oneMda?.team
                        ? oneMda?.team.map((item: any, i: number) => (
                            <SecondCard
                              key={i}
                              id={item?._id}
                              name={item?.name}
                              image={item?.image}
                              position={item?.role}
                            />
                          ))
                        : mda?.data?.data?.team.map((item: any, i: number) => (
                            <SecondCard
                              key={i}
                              id={item?._id}
                              name={item?.name}
                              image={item?.image}
                              position={item?.role}
                            />
                          ))}
                    </div>
                  </div>
                </div>
                {/* <div className="w-full h-full">
              <div className="mt-20 mb-8 w-full flex flex-col items-center">
                <header className="w-[100px] h-[40px] flex justify-center items-center border-brand-main border-2 text-brand-main font-normal leading-3 size-4 font-geistsans rounded-md mb-4">
                  Team
                </header>

                <div className="w-full h-[76px] flex justify-center p-4  font-semibold font-geistsans size-[52px] text-3xl text-brand-main">
                  <p>Our Team</p>
                </div>
                <div className="w-full font-geistsans flex justify-center text-center leading-[28px] text-[#00000070]">
                  <p className="text-brand-dark font-geistsans">
                    Stay connected with the latest from{" "}
                    {oneMda?.abbreviation ||
                      mda?.data?.data?.about?.abbreviation}
                    . Get brief updates on new projects, collaborations, and
                    innovations shaping our state.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center mx-auto lg:p-8">
                <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-3 lg:mx-auto lg:gap-x-16">
                  {oneMda?.team.map((item: any, i: number) => (
                    <SecondCard
                      key={i}
                      id={item?._id}
                      name={item.name}
                      image={item.image}
                      position={item.role}
                    />
                  ))}
                  {oneMda?.team
                    ? oneMda?.team.map((item: any, i: number) => (
                        <SecondCard
                          key={i}
                          id={item?._id}
                          name={item.name}
                          image={item.image}
                          position={item.role}
                        />
                      ))
                    : mda?.data?.data?.team.map((item: any, i: number) => (
                        <SecondCard
                          key={i}
                          id={item?._id}
                          name={item.name}
                          image={item.image}
                          position={item.role}
                        />
                      ))}
                </div>
              </div>
            </div> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// export default About;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
}
