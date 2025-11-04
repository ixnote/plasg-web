import SectionHeader from "@/components/SectionHeader";
import React, { Suspense } from "react";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import axios from 'axios';
import Filter from "../Filter";

export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL
      }/resource/static`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    )
    const data = res.data.data.resources;

    return data.map((item: any) => ({
      slug: item.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch News list for static params:", error);
    return [{ slug: "1" }];
  }
}

const page = async () => {
  return (
    <>
      <Suspense>
        {/* <Header /> */}
        <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-brand-white">
          <div className="m-auto w-[92%] flex justify-between flex-col gap-8 -mt-12">
            <SectionHeader
              title={"Doing Business on The Plateau"}
              description={
                "Explore a wealth of information, and support services designed to fuel your success and drive economic prosperity across Plateau State. From policy aimed to  ensure ease of doing business to guidelines and downloadable documents, discover everything you need to thrive in the vibrant business landscape of our state."
              }
              baseURL={"business"}
              baseText={"BUSINESS"}
            />
            {/* <Filter data={data} /> */}
            {/* <Filter tagTopicName={params?.name} /> */}
            <Filter />
          </div>
        </div>
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default page;

