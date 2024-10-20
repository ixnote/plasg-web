import SectionHeader from "@/components/SectionHeader";
import React, { Suspense } from "react";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import Filter from "../Filter";

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
