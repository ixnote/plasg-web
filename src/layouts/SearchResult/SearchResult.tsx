import React from "react";
import { GoHome } from "react-icons/go";
import ArticleImage from "@/assets/imgs/article1png.png";
import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";

function SearchResult() {
  const data = {
    reference: "Plateau Ministry of Transport",
    title: "How to Apply for Driver’s License in Plateau State",
    date: "12 Jul, 2023",
    min: "5 Min Read",
    tags: ["Driving", "Transportation", "FRSC", "VIO"],
    content: [
      { type: "image", image: ArticleImage, title: "" },
      {
        type: "text",
        text: "Welcome to the Ministry of Transportation’s official guide on how to apply for a driver's license in Plateau State. Whether you're a first-time applicant or renewing your license, this comprehensive guide will walk you through the steps to obtain your driver's license efficiently and successfully.",
        title: "introduction",
      },
      {
        type: "heading1",
        text: "Steps to Applying for Driver’s License in Plateau State",
        title: "steps",
      },
    ],
    subContent: [
      {
        heading: "Step 1: Gather Required Documents",
        text: "Before starting your application, ensure you have the following documents ready:",
        lists: [
          "Valid identification (e.g., National ID, passport, or voter’s card)",
          "Proof of residence (utility bill, tenancy agreement, etc.)",
          "Birth certificate or declaration of age",
          "Two recent passport-sized photographs",
          "Certificate of completion from an accredited driving school",
        ],
        title: "",
      },
      {
        heading: "Step 2: Visit a Driving School",
        text: "Enroll in an accredited driving school in Plateau State. Complete the required driving lessons and obtain a certificate of completion. This certificate is mandatory for all first-time applicants.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 3: Pass the Theory Test",
        text: "After completing your driving lessons, schedule and pass the theory test at the Vehicle Inspection Office (VIO). The theory test assesses your knowledge of traffic rules, road signs, and safe driving practices.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 4: Book a Test Appointment",
        text: "Once you pass the theory test, visit the Federal Road Safety Commission (FRSC) website or the nearest FRSC office to book an appointment for your driving test. Choose a convenient date and time for your practical driving test.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 5: Undergo a Medical Examination",
        text: "You are required to undergo a medical examination to ensure you are fit to drive. This can be done at any government-approved hospital or clinic. Obtain a medical report and include it in your application package.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 6: Take the Driving Test",
        text: "On the day of your driving test, arrive early at the designated FRSC testing center. Bring your learner's permit, theory test result, and all other required documents. The driving test will assess your practical driving skills and adherence to road safety regulations.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 7: Pay the Application Fee",
        text: "Upon passing the driving test, proceed to pay the driver's license application fee. Payment can be made online via the FRSC website or at the designated bank branches. Ensure you keep the payment receipt as proof.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 8: Complete the Application Form",
        text: "Fill out the driver’s license application form online or at the FRSC office. Attach all required documents, including your test results, medical report, and payment receipt. Submit the completed application form.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 9: Biometric Capture",
        text: "Visit the nearest FRSC office for biometric data capture. This includes fingerprinting and a photograph for your driver's license card. Ensure you have your application reference number and proof of payment.",
        lists: [],
        title: "",
      },
      {
        heading: "Step 10: Collect Your Driver's License",
        text: "After your biometric data capture, you will receive a temporary driver's license. Your permanent driver's license will be processed and available for collection within a few weeks. You will be notified when it is ready for pickup at the FRSC office.",
        lists: [],
        title: "",
      },
      {
        heading: "Tips for a Smooth Application Process",
        text: "After your biometric data capture, you will receive a temporary driver's license. Your permanent driver's license will be processed and available for collection within a few weeks. You will be notified when it is ready for pickup at the FRSC office.",
        lists: [
          "Ensure all your documents are up-to-date and accurate.",
          "Follow all instructions carefully to avoid delays.",
          "Practice driving regularly to build confidence and improve your skills.",
          "Stay informed about any updates or changes to the application process by visiting the official FRSC website or contacting the Ministry of Transportation.",
        ],
        title: "",
        text2:
          "Applying for a driver’s license in Plateau State is a structured process designed to ensure road safety and competence among drivers. By following these steps, you can obtain your driver’s license efficiently and begin enjoying the freedom of driving legally.",
        text3:
          "For further assistance or inquiries, feel free to contact the Ministry of Transportation or your nearest FRSC office.",
      },
    ],
  };
  return (
    <div className="pt-[200px]">
      <span className="max-w-[1200px] mx-auto flex flex-col">
        <span className="flex flex-col gap-8">
          <span className="uppercase text-[#00000080] opacity-80 font-light flex items-center gap-2 text-[14px]">
            <GoHome size={18} />/<p>Search</p>/<p>SEARCH RESULTS</p>/
            <p>ARTICLES</p>
          </span>
          <button className="h-10 px-8 rounded-full bg-gray-200 border w-fit border-gray-400">
            Guideline
          </button>
          <p className="text-[52px] text-brand-main font-medium max-w-[800px] leading-[56px]">
            {data?.title}
          </p>
          <span className="text-[#00000080] opacity-80 font-medium flex items-center gap-4 text-[14px]">
            <p>{data?.reference}</p>/<p>{data?.date}</p>/<p>{data?.min}</p>
          </span>
        </span>
        <span className="my-8 flex flex-col gap-16">
          {data?.content?.map((item: any, index: any) => (
            <span key={index}>
              {item?.type === "image" && (
                <Image
                  src={item?.image}
                  alt=""
                  width={1200}
                  height={1200}
                  className="w-full h-auto rounded-2xl"
                />
              )}
              {item?.type === "text" && (
                <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                  <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                    <p>{item?.title}</p>
                  </span>
                  <p className="text-[18px] font-normal text-[#00000099] m-0 lg:col-span-4 col-span-1">
                    {item?.text}
                  </p>
                </span>
              )}
              {item?.type === "heading1" && (
                <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                  <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                    <p>{item?.title}</p>
                  </span>
                  <p className="text-[40px] leading-[40px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1">
                    {item?.text}
                  </p>
                </span>
              )}
            </span>
          ))}
          {data?.subContent?.map((item: any, index: any) => (
            <span key={index}>
              <span className="grid lg:grid-cols-5 grid-cols-1 gap-5 items-start">
                <span className="text-[#00000080] opacity-80 font-light flex items-center gap-4 text-[16px] uppercase col-span-1">
                  <p>{item?.title}</p>
                </span>
                <span className="lg:col-span-4 col-span-1 flex flex-col gap-6">
                  <p className="text-[24px] leading-[36px] font-normal text-brand-main m-0 lg:col-span-4 col-span-1">
                    {item?.heading}
                  </p>
                  <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                    {item?.text}
                  </p>
                  <ul>
                    {item?.lists.map((element: any, index: any) => (
                      <li
                        className="list-disc ml-8 pl-3 my-2 text-[#00000099]"
                        key={index}
                      >
                        {element}
                      </li>
                    ))}
                  </ul>
                  {item?.text2 && (
                    <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                      {item?.text2}
                    </p>
                  )}
                  {item?.text3 && (
                    <p className="text-[18px] font-normal text-[#00000099] m-0 ">
                      {item?.text3}
                    </p>
                  )}
                </span>
              </span>
            </span>
          ))}
        </span>
        <span className="grid lg:grid-cols-5 grid-cols-1 gap-5">
          <span className="col-span-1"></span>
          <span className="flex gap-3 flex-wrap lg:col-span-4 col-span-1 ">
            {data?.tags?.map((item: any, index: any) => (
              <button className="h-10 px-8 rounded-full bg-gray-200 border w-fit border-gray-400">
                {item}
              </button>
            ))}
          </span>
          <span className="col-span-1"></span>
          <span className="text-gray-400 gap-6  lg:col-span-4 col-span-1 flex items-center mt-5">
            <p className="flex items-center text-[14px]">
              <AiOutlineLike size={24} />
              42
            </p>
            <p className="flex items-center text-[14px]">
              <AiOutlineDislike size={24} />
            </p>
            <p className="flex items-center text-[14px]">
              <IoShareOutline size={24} />
            </p>
          </span>
        </span>
      </span>
    </div>
  );
}

export default SearchResult;
