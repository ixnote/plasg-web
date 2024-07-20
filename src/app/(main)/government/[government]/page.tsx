"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import governor from "../../../../../public/government/governor.png";
import Cabinet from "./Cabinet";
import GovernorBiography from "./GovernorBiography";
import DeputyBiography from "./DeputyBiography";
import SecretaryBiography from "./SecretaryBiography";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";

const Page = () => {
  const params = useParams();
  const { government } = params;
  const type = Array.isArray(government) ? government[0] : government; // Ensure type is a string

  const titles = {
    governor: `The Executive Governor of Plateau State`,
    deputy: `The Deputy Governor of Plateau State`,
    secretary: `The Secretary to the State Government of Plateau State`,
  };

  const descriptions = {
    governor: `We are aware of the expectations of the people, and we have been working tirelessly from Day One, on ensuring that we deliver trustworthy Leadership to the people of Plateau State.`,
    deputy: `The Deputy Governor is committed to supporting the Governor in delivering effective governance and ensuring the well-being of the people of Plateau State.`,
    secretary: `The Secretary to the State Government ensures the smooth operation of the government, coordinating various activities to support the Governor and Deputy Governor.`,
  };

  const images = {
    governor: governor,
    deputy: governor,
    secretary: governor,
  };

  const [title, setTitle] = useState(titles.governor);
  const [description, setDescription] = useState(descriptions.governor);
  const [image, setImage] = useState(images.governor);
  const [linkText, setLinkText] = useState("THE EXECUTIVE GOVERNOR");
  const [linkURL, setLinkURL] = useState("governor");

  useEffect(() => {
    if (type === "governor") {
      setTitle(titles.governor);
      setDescription(descriptions.governor);
      setImage(images.governor);
      setLinkText("THE EXECUTIVE GOVERNOR");
      setLinkURL("governor");
    }

    if (type === "deputy") {
      setTitle(titles.deputy);
      setDescription(descriptions.deputy);
      setImage(images.deputy);
      setLinkText("THE DEPUTY GOVERNOR");
      setLinkURL("deputy");
    }

    if (type === "secretary") {
      setTitle(titles.secretary);
      setDescription(descriptions.secretary);
      setImage(images.secretary);
      setLinkText("THE SECRETARY OF STATE");
      setLinkURL("secretary");
    }
  }, [type]);

  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen max-w-[2040px] pb-[96px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="m-auto w-[92%] flex justify-between flex-col gap-8">
          <SectionHeader
            image={image}
            title={title}
            description={description}
            linkText={linkText}
            linkURL={linkURL}
            baseURL={"government"}
            baseText={"GOVERNMENT"}
          />
          {type === "governor" && (
            <>
              <GovernorBiography />
              <Cabinet />
            </>
          )}
          {type === "deputy" && (
            <>
              <DeputyBiography />
            </>
          )}
          {type === "secretary" && (
            <>
              <SecretaryBiography />
            </>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
