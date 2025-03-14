"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SubsectionHeader from "@/components/SubsectionHeader";

import { useQuery } from "react-query";
import { getMdas } from "@/api/mda/getMdas";
import { FaSpinner } from "react-icons/fa6";

interface MDA {
  slug: string;
  name: string;
  published: boolean;
  director: {
    title: string;
    image: string;
    name: string;
  };
  contact: {
    email: string;
  };
}

const Cabinet = () => {
  const { data: mdasResponse, isLoading: mdaIsLoading } = useQuery({
    queryKey: ["getMdas"],
    queryFn: getMdas,
  });

  // console.log({ mdasResponse: mdasResponse?.data.data.mdas });

  const [showMore, setShowMore] = useState(false);
  const [fetchedMdas, setFetchedMdas] = useState<MDA[]>([]);

  const mdas = mdasResponse?.data.data.mdas || []; // Ensure mdas is an array

  useEffect(() => {
    if (mdasResponse) {
      console.log({ mdasResponse });
      setFetchedMdas(
        mdasResponse.data.data.mdas.filter((mda: MDA) => mda.published)
      );
    }
  }, [mdasResponse]);

  if (mdaIsLoading) {
    return (
      <FaSpinner className="animate-spin text-brand-main mx-auto text-4xl" />
    );
  }

  const displayedMdas = showMore ? fetchedMdas : fetchedMdas.slice(0, 6);

  return (
    <>
      <div className="flex flex-col gap-12 pb-12 lg:gap-20">
        <SubsectionHeader
          left={"GOVERNOR’S CABINET"}
          right={
            "Introducing the brilliant minds and dedicated professionals leading the charge within Plateau's ministries."
          }
        />
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedMdas.map((mda: MDA, index: number) => (
              <div className="flex-shrink-0 w-full" key={index}>
                <ProfileCard
                  image={mda.director.image}
                  name={`${mda.director.title} ${mda.director.name}`}
                  position={mda.name}
                  email={mda.contact.email}
                  action="mail"
                />
              </div>
            ))}
          </div>
          {fetchedMdas.length > 6 && (
            <div className="flex justify-center mt-12">
              <button
                className="p-2 px-4 bg-brand-main text-white rounded-lg hover:bg-opacity-80"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cabinet;
