"use client";

import React, { Suspense, useEffect } from "react";
import Image from "next/image";
import bg from "@/assets/imgs/bg-img.svg";
import location from "@/assets/icons/location.svg";
import phone from "@/assets/icons/phone.svg";
import message from "@/assets/icons/message.svg";
import { useGeneralContext } from "../../../../../../context/GenralContext";
import { useQuery } from "react-query";
import { getMda } from "@/api/mda/getMda";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const { allResources, setOneMda, setMdaSlug, oneMda }: any =
    useGeneralContext();

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
    <div className='w-full min-h-screen pt-[100px] bg-brand-white lg:mt-[170px] 2xl:max-w-7xl"'>
      <div className="w-full lg:p-9 ">
        <div
          className="w-full bg-cover bg-center  pt-8 px-10 lg:h-[720px]"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="flex justify-center flex-col w-full lg:flex-row">
            <div className="h-[438px] w-full gap-20 my-28 lg:w-[50%]">
              <div className="h-full w-full ">
                <header className="w-[100px] h-[40px] flex justify-center items-center  border-white border-2 text-white  font-normal leading-3 size-4 font-geistsans rounded-md mb-1">
                  Contact
                </header>
                <p className="w-full flex justify-start items-center text-white font-geistsans my-4 text-4xl font-medium">
                  Need help? Contact us
                </p>
                <p className="text-white py-8 font-geistsans font-normal text-xl">
                  Having an issue or you just need help? Contact us with your
                  inquiries via:
                </p>
                <div className="flex flex-col gap-8">
                  <div className="text-white flex w-full py-7 ">
                    <Image src={location} alt="" />
                    <div className="px-6">
                      <p className="text-white">{oneMda?.contact?.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-between h-[64px] w-full ">
                    <div className="flex items-center justify-between w-[180px]">
                      <Image src={phone} alt="" />
                      <div>
                        <p className="p-2 text-brand-white">
                          {oneMda?.contact?.phone_number_1}
                        </p>
                        <p className="p-2 text-brand-white">
                          {oneMda?.contact?.phone_number_2}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-8 my w-full">
                    <Image src={message} alt="" />
                    <a href="pictda@plateaustate.gov.ng" className="text-white">
                      {oneMda?.contact?.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-12 mb-8 bg-white rounded-xl lg:w-[50%]">
              <div className="w-full max-w-lg mx-auto mt-8 px-5 bg-white ">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      placeholder="John Doe"
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full p-2 border-b border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Namesurname@email.com"
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full p-2 border-b border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      placeholder="Name"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full p-2 border-b border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Type message"
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full p-2 border-b border-gray-300 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full float-end inline-flex justify-center mb-4 py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-[#0E3E40] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Contact;

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
}
