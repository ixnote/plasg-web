import React from "react";
import Nav from "../nav";
import Image from "next/image";
import { Team } from "../data";
import SecondCard from "../secondCard";
import Footer from "@/layouts/Footer";
import bg from "@/assets/imgs/bg-img.svg";

const About = () => {
  return (
    <div className='w-full mx-auto 2xl:max-w-7xl"'>
      <div>{/* <Nav /> */}</div>
      <div
        className=" mt-20 h-[144px]  w-full flex flex-col items-center"
        // className=" mt-20 h-[710px] w-full flex flex-col items-center justify-center bg-no-repeat bg-cover"
        // style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-[800px] h-[56px] flex justify-center  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
          <p>About</p>
        </div>
        <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
          <p>
            We are committed to building a world-class ICT ecosystem that
            fosters innovation, entrepreneurship, and <br /> inclusive growth.
          </p>
        </div>
      </div>
      {/* <div
        className="w-full h- px-[45px] rounded-3xl"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/e3db/bae0/4c1bf6e7d2d1bfbe77f6639baf03b9aa?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-56uaLUNjwTkuUoRGt9r6OpxHyEn4VcyapRqwN8odUJEiBVrg7v6EBJJwMZFGIgART3rOFswKii6ScuBshxcrcME8oCtcN3TwwdBrwRBqSV~r0KFAJtd7R6kMk9H9RwWjGWmNUE3AOgRjkVxfaoO~jA3sZnU1acFLjEKwJllSVQaCuCHOtpnmX3ru~idCDyMbyN8Ql~z-L2jb2p9QXpk6qriqe-LY-sytI7UWJ5EsqkZ4sWbM3~pFwtN~1624bkPr2GeOf6AIhE9D1zXJTiMxxYkSovZjPZvJATP1PhDApiOyGdtbfsUWBJkRUNmwgLzKV5RuDErX9Po-9l5C~71A__"
          }
          alt="About Us Image"
          width={1920}
          height={710}
          className="rounded-3xl"
        />
      </div> */}
      <div className=" h-[468px] w-full mt-32  flex justify-between p-14 mb-28  ">
        <div className=" w-[50%] h-[350px] gap-20 px-6">
          <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-[10px] size-2 font-[Geist] rounded-md mb-6">
            About
          </header>
          <p className="  w-[720px] h-[170px] flex justify-start items-center font-semibold text-[#0E3E40] font-[Geist] text-[30px] size-[50px] leading-[48px] tracking-[-2%] my-11 ">
            Empowering Plateau: The Role of <br />
            PICTDA in ICT Excellence
          </p>
        </div>
        <div className="w-[50%] h-[350px]-[Geist] font-normal size-[10px] leading-[28px]">
          <p>
            The establishment and empowerment of Plateau Information and
            Communication Technology Development Agency (PICTDA) is imperative
            to establish good practices in terms of processes, governance
            control over the investments made and that will continue to be made
            in ICT and to achieve a solid foundation through ICT infrastructure
            architecture, systems design and work processes which will continue
            to support a robust ICT facility throughout the State. In the
            long-term, these policies will greatly assist the ease with which
            PICTDA can react to new challenges and adopt new technologies aimed
            at increasing efficiencies and create positive impacts for all PLSG
            stakeholders.{" "}
          </p>
          <p className="mt-8">
            {" "}
            PICTDA shall develop policies, standards, guidelines, and frameworks
            as well as capabilities, skillsets, and resources that will add
            strategic value and increase business productivity within Plateau
            State Government and the entire state.
          </p>
        </div>
      </div>
      <div className="h-[442px] w-full ">
        <div className="w-[1160px] mx-auto">
          <hr className=" border-[1px] border-[#D4D4D4] my-28" />
        </div>
        <div className="flex h-[442px] w-full px-10 pb-[120px] gap-4">
          <div className="w-[50%]">
            <div className="h-full w-full ">
              <header className="w-[66px] h-[30px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2">
                Vision
              </header>
              <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">
                Our Vision
              </p>
              <p className="size-[18px] w-full h-[56px] font-[Geist] leading-[28px] font-normal text-[#0E3E40] ">
                Find key information quickly on a variety of important topics
                right here on the Plateau Government website.
              </p>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="h-full w-full ">
              <header className="w-[66px] h-[30px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40]  font-normal leading-[28px] size-[18px] font-[Geist] rounded-[4px] mb-2">
                Mission
              </header>
              <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">
                Our Mission
              </p>
              <p className="size-[18px] w-full h-[56px] font-[Geist] leading-[28px] font-normal text-[#0E3E40] ">
                We aim to achieve our Vision By creating a knowledge-driven
                eco-system, <br /> leveraging entrepreneurship and promoting
                socially inclusive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[2250px]">
        <div className="w-[1160px] mx-auto">
          <hr className=" border-[1px] border-[#D4D4D4] my-28" />
        </div>
        <div className=" h-full  ">
          <div className=" mt-20 h-[204px]  w-full flex flex-col items-center">
            <header className="w-[100px]  h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[Geist] rounded-md mb-4">
              Vision
            </header>

            <div className="w-[800px] h-[76px] flex justify-center p-4  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
              <p>Our Team</p>
            </div>
            <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
              <p className="text-[#0E3E40]">
                Stay connected with the latest from the Plateau State ICT
                Development Agency. Get brief updates on new projects,
                collaborations, and tech innovations shaping our state.
              </p>
            </div>
          </div>
          <div className="h-[1800px] p-8 flex justify-center mx-auto">
            {/* <div className="h-[1850px] w-full grid  grid-cols-3 gap-x-6 bg-green-300"> */}
            <div className="h-[1850px] grid  grid-cols-3 mx-auto gap-x-16">
              {Team.map((item) => (
                <SecondCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  position={item.position}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
