
import React from 'react';
import Nav from '../nav';
import Image from "next/image";
import Footer from "@/layouts/Footer";
import bg from "@/assets/imgs/bg-img.svg";
import location from "@/assets/icons/location.svg"
import phone from "@/assets/icons/phone.svg"
import message from "@/assets/icons/message.svg"


const Contact = () => {
    return (
      <div className='w-full 2xl:max-w-7xl"'>
        <div>
          <Nav />
        </div>
        <div className="w-full h-[1030px] p-9 ">
          <div
            className="w-full bg-cover bg-center h-[720px] pt-8 px-10"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="flex justify-center  h-[646px]">
              <div className="h-[438px] w-[682px] gap-20 my-28">
                <div className="h-full w-full ">
                  <header className="w-[100px] h-[40px] flex justify-center items-center  border-white border-2 text-white  font-normal leading-3 size-4 font-[Geist] rounded-md mb-1">
                    Contact
                  </header>
                  <p className=" w-[520px] h-[100px] flex justify-start items-center text-white font-[Geist] text-4xl size-10 font-medium leading-[20px]">
                    Need help? Contact us
                  </p>
                  <p className="text-white py-8 font-[Geist] font-normal text-xl">
                    Having an issue or you just need help? Contact us with your
                    inquiries via:
                  </p>
                  <div className=" ">
                    <div className="text-white flex w-full py-7 ">
                      <Image src={location} alt="" />
                      <div className="px-6">
                        <p className="text-white">
                          Office Of The Executive Governor, Plateau State
                          Government House, Little Rayfield, Jos Plateau State
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between h-[64px] w-[600px] ">
                      <div className="flex items-center justify-between w-[180px]">
                        <Image src={phone} alt="" />
                        <div>
                          <p className="p-2">23407013800040</p>
                          <p className="p-2">23407013800040</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-[260px] ">
                        <Image src={message} alt="" />
                        <a
                          href="pictda@plateaustate.gov.ng"
                          className="text-white"
                        >
                          pictda@plateaustate.gov.ng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[550px] h-[645px] bg-white rounded-xl">
                <div className="w-full max-w-lg mx-auto mt-8   px-5  bg-white ">
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
                        className="w-[154px] h-[54px] float-end inline-flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-[#0E3E40] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        <div>
          <Footer />
        </div>
      </div>
    );
}

export default Contact;
