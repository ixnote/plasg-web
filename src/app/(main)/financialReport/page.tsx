import SectionHeader from "@/components/SectionHeader";
import React from "react";
import SectionDividerLight from "@/components/SectionDividerLight";

const page = () => {
  return (
    <>
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <SectionHeader
            title={"Financial Report"}
            description={
              "We have nothing to show you on this page yet. Keep your eyes open, something beautiful might just pop up here."
            }
            baseURL={"financialReport"}
            baseText={"FINANCE"}
          />
          <SectionDividerLight />
        </div>
      </div>
    </>
  );
};

export default page;
