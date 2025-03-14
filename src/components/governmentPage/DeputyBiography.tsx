import React from "react";
import Image from "next/image";
import SubsectionHeader from "@/components/SubsectionHeader";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
import { useQuery } from "react-query";
import { getActiveGovernment } from "@/api/government/government.api";
import { FaSpinner } from "react-icons/fa6";

const DeputyBiography = () => {
  const { data: activeGovernment, isLoading } = useQuery({
    queryKey: ["getActiveGovernment"],
    queryFn: getActiveGovernment,
  });

  console.log({ activeGovernment: activeGovernment });

  if (isLoading) {
    return (
      <FaSpinner className="animate-spin text-brand-main mx-auto text-4xl" />
    );
  }

  return (
    <>
      <div className="flex flex-col gap-12 pb-12 lg:gap-20">
        <SubsectionHeader
          left={"BIOGRAPHY"}
          // right={
          //   "CITATION OF HON. NGO JOSEPHINE PIYO; DEPUTY GOVERNOR-PLATEAU STATE, 2023."
          // }
          right={activeGovernment.deputyGovernor.biography.title}
        />
        <div className="flex flex-col gap-4 lg:gap-8">
          <SubsectionHeader
            left={""}
            right={
              <QuillEditor
                value={activeGovernment.deputyGovernor.biography.description}
                theme="bubble"
                readOnly
              />
            }
            body
          />
          {/* <SubsectionHeader
            left={""}
            right={
              "Hon. Mrs. Josephine Piyo, the Deputy Governor Plateau State can be described as a virtuous woman, dedicated and true mother, who is willing and determined to face each task and trial confronting her head-on. Her diligence, and commitment to solving societal challenges and adding value to human lives was parts of the divine providence that brought her to limelight."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "The courageous and humble Mrs. Piyo was born on the 13th of September, 1956 into the family of Late Da Danbwanang Chong and Ngo Martha Danbwanang Chong of blessed memory at Kaching, Kurra Falls, Gashish District, Barkin-Ladi Local Government Area of Plateau State."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "She attended missionary schools at her prime age, where discipline and moral values of caring and true virtues of African woman were inculcated in her. Hon. Mrs. Piyo started her primary education at St. Mathew's Primary School, Kurra Falls, (1963-1968) and St. Theresa School, Jos (1969) where she obtained her First Leaving School Certificate. She proceeded to St. Louis Collage, Jos (1970-1974) and School of Nursing, Jos (1975-1978)."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "The quest for further education took her to School of Psychiatric Nursing, Aba (1979-1980) and School of Midwifery, Jos (1982-1983) after which, she attended Federal Training Centre for Teachers of Health Sciences, Ibadan (1988-1990) while she obtained Bachelor of Science, Public Administration at the University of Jos (2000-2004)."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "Her working career, which spans over three decades, started as a registered Nurse (1978-1979) at General Hospital Shendam and later moved to Jos University Teaching Hospital (JUTH),  Psychiatric ward (1992-1994) and Emergency casualty as Nursing officer (1994-1996). Her services was requested at the School of Nursing where she rose to Assistant Chief Nurse Tutor (1996) before her successful retirement from public service."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "Her visionary and transformative leadership during her public service made her joint politics to serve God ad humanity. She contested and won the seat for Member representing Riyom State Constituency in the Plateau State House of Assembly in 1999 and subsequently appointed Legislative Liaison, Plateau State House of Assembly (2003-2006)."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "However, by divine Providence, Hon. Mrs. Piyo was appointed Commissioner II, Plateau State Planning Bureau (2007) and Special Adviser to Plateau State Governor, Jonah David Jang  on Parastatals (2008). As the call for higher service became inevitable at that period, she received the unanimous endorsement of her people in 2014 to contest for the Chairmanship of Riyom Local Government Council where she won overwhelmingly through the support of the people."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "Hon.  Mrs. Josephine  Piyo  or  ‘NGO’ who was referred  to  as the people's servant, served as the Executive  Chairman of Riyom Local Government Council from 2014 to June 2015 where she made remarkable success before the tenure was truncated  by the APC administration."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "She was privileged and divinely nominated by His Excellency, Barr. Caleb Mutfwang, Governor-elect, Plateau State as his running mate when he secured the ticket of the most preferred and most performed political party in Plateau State, the PDP in  May, 2022."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "This Amazon and woman of Grace is married to Mr. Bitrus Piyo, a man of few words, who hails from  Lwa, Bachi District of Riyom Local Government Council; served  and retired as General Manager National Theater Lagos. The Marriage is blessed with 6 Children."
            }
            body
          />
          <SubsectionHeader
            left={""}
            right={
              "Hon. Mrs. Josephine Chundung Piyo is a devoted, committed and dedicated Christian who love God and her family. Her watch words is unity, peace and Justice."
            }
            body
          /> */}
          {/* <div className="flex flex-col items-start justify-start gap-4 lg:flex-row lg:gap-0">
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

export default DeputyBiography;
