import React from "react";
import Image from "next/image";
import SubsectionHeader from "@/components/SubsectionHeader";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import signature from "@/assets/imgs/government/signature.png";

import { useQuery } from "react-query";
import { getActiveGovernment } from "@/api/government/government.api";
import { FaSpinner } from "react-icons/fa6";

const GovernorBiography = () => {
  const { data: activeGovernment, isLoading } = useQuery({
    queryKey: ["getActiveGovernment"],
    queryFn: getActiveGovernment,
  });

  // console.log({ activeGovernment: activeGovernment });

  if (isLoading) {
    return (
      <FaSpinner className="animate-spin text-brand-main mx-auto text-4xl" />
    );
  }

  return (
    <>
      <div className="w-full">
        <Image
          src={activeGovernment.governor.image}
          alt="governor"
          className="w-full h-auto object-cover rounded-xl"
          loading="lazy"
          width={1280} // Keeping the width as a number for Next.js Image component
          height={720} // Added height for responsiveness
        />
      </div>
      <div className="flex flex-col gap-12 pb-12 lg:gap-20">
        <SubsectionHeader
          left={"BIOGRAPHY"}
          // right={
          //   "Meet Barrister Caleb Mutfwang: A Beacon of Leadership for Plateau State"
          // }
          right={activeGovernment.biography.title}
        />
        <div className="flex flex-col gap-4 lg:gap-8">
          <SubsectionHeader
            left={""}
            // right={
            //   "Caleb Manasseh Mutfwang (born 12 March 1965) is a Nigerian lawyer and politician who is the current governor of Plateau State since 2023. He is a former Chairman of Mangu Local Government Area of Plateau State. Mutfwang was sworn in as governor on 29 May 2023."
            // }
            right={
              <QuillEditor
                value={activeGovernment.biography.description}
                theme="bubble"
                readOnly
                // style={{ fontSize: "1.25rem" }} // Increased font size
              />
            }
            body
          />
          {/* <SubsectionHeader
            left={""}
            right={
              "Born on the 12th of March, 1965 in Wussasa, Zaria. He had his primary education at LEA Primary School Ampang-West, Mangu LGA from 1973 to 1977, went to Boys’ Secondary School, Gindiri graduating in 1982. Worked briefly with the then Federal Office of Statistics and the defunct Nigerian Bank for Commerce of Industry (NBCI) before continuing his educational pursuit at the School of Preliminary Studies, Keffi from 1983 to 1984."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "He was at the University of Jos and graduated between 1984 and 1988 and the Nigerian Law School from 1988 which qualified him to be called to the Nigerian Bar as a Solicitor and Advocate of the Supreme Court on the 14th of December 1989."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "Served the mandatory National Youth Service Corps (NYSC) programme in Kaduna State during which he was elected by his colleagues as the President of the Nigerian Christian Corpers’ Fellowship in Kaduna State."
            }
            body
          />
          <div className="flex flex-col items-start justify-start gap-4 lg:flex-row lg:gap-0">
            <div className="w-full font-geistmono flex items-start lg:w-[20%]"></div>
            <Image
              src={signature}
              alt="signature"
              className="w-[203px] h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div> */}
        </div>
        <div className="flex items-start justify-between"></div>
      </div>
    </>
  );
};

export default GovernorBiography;
