import React from 'react';
import Nav from '../nav';
import Image from "next/image";
import { Team } from '../data'; 
import SecondCard from '../secondCard';
import Footer from '@/layouts/Footer';

const About = () => {
  return (
    <div className='w-full'>
      <div>
        <Nav/>
      </div>
      <div className=" mt-20 h-[144px]  w-full flex flex-col items-center">
        <div className="w-[800px] h-[56px] flex justify-center  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
          <p >About</p>
        </div>
        <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
          <p>We are committed to building a world-class ICT ecosystem that fosters innovation, entrepreneurship, and <br /> inclusive growth.</p>
        </div>
      </div>
      <div className="w-full px-[45px] rounded-3xl">
        <Image
          src="https://s3-alpha-sig.figma.com/img/e3db/bae0/4c1bf6e7d2d1bfbe77f6639baf03b9aa?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-56uaLUNjwTkuUoRGt9r6OpxHyEn4VcyapRqwN8odUJEiBVrg7v6EBJJwMZFGIgART3rOFswKii6ScuBshxcrcME8oCtcN3TwwdBrwRBqSV~r0KFAJtd7R6kMk9H9RwWjGWmNUE3AOgRjkVxfaoO~jA3sZnU1acFLjEKwJllSVQaCuCHOtpnmX3ru~idCDyMbyN8Ql~z-L2jb2p9QXpk6qriqe-LY-sytI7UWJ5EsqkZ4sWbM3~pFwtN~1624bkPr2GeOf6AIhE9D1zXJTiMxxYkSovZjPZvJATP1PhDApiOyGdtbfsUWBJkRUNmwgLzKV5RuDErX9Po-9l5C~71A__"
          alt="About Us Image"
          width={1920}
          height={710} 
          className="rounded-3xl"
        />
      </div>
      <div className=" h-[580px] w-full mt-32  flex justify-between px-14 mb-28 ">
        <div className=" w-[50%] h-[350px] gap-20">
          <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-[10px] size-2 font-[Geist] rounded-md mb-6">About</header>
          <p className="  w-[720px] h-[170px] flex justify-start items-center font-semibold text-[#0E3E40] font-[Geist] text-[50px] size-10 leading-[58px] my-11 ">Empowering Plateau: The Role of PICTDA in ICT Excellence</p>
        </div>
        <div className="w-[40%] h-[580px] font-[Geist] font-normal size-16 leading-9 pl-8 text-2xl"  >
           <p>The establishment and empowerment of Plateau Information and Communication Technology Development Agency (PICTDA) is imperative to establish good practices in terms of processes, governance control over the investments made and that will continue to be made in ICT and to achieve a solid foundation through ICT infrastructure architecture, systems design and work processes which will continue to support a robust ICT facility throughout the State. In the long-term, these policies will greatly assist the ease with which PICTDA can react to new challenges and adopt new technologies aimed at increasing efficiencies and create positive impacts for all PLSG stakeholders. </p>
           <p className="mt-8"> PICTDA shall develop policies, standards, guidelines, and frameworks as well as capabilities, skillsets, and resources that will add strategic value and increase business productivity within Plateau State Government and the entire state.</p>
        </div>
      </div>
      <div className="h-[442px] w-full ">
      <hr className=" border-[1px] border-[#D4D4D4] my-28" />
        <div className="flex w-full px-10 pb-[120px] gap-4">
          <div  className="w-[50%]" >
            <div className="h-full w-full">
            <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[Geist] rounded-md mb-2">Vision</header>
            <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">Our Vision</p>
            <p>Find key information quickly on a variety of important topics right here on the Plateau Government website.</p>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="h-full w-full ">
              <header className="w-[100px] h-[40px] flex justify-center items-center  border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[Geist] rounded-md mb-2">Mission</header>
              <p className=" w-[520px] h-[100px] flex justify-start items-center text-[#0E3E40] font-[Geist] text-4xl size-10 font-medium leading-[48px]">Our Mission</p>
              <p>We aim to achieve our Vision By creating a knowledge-driven eco-system, <br /> leveraging entrepreneurship and promoting socially inclusive growth.</p>
            </div>
          </div>
        </div>
      </div>
     <div className="w-full h-[3000px]">
     <hr className=" border-[1px] border-[#D4D4D4] my-28" />
     <div className=" h-full">
        <div className=" mt-20 h-[204px]  w-full flex flex-col items-center">
           <header className="w-[100px]  h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-4 font-[Geist] rounded-md mb-4">Vision</header>

            <div className="w-[800px] h-[76px] flex justify-center p-4  font-semibold font-[Geist] size-[52px] text-3xl text-[#0E3E40]">
              <p >Our Team</p>
            </div>
            <div className="  w-[900px] h-[56px] font-[Geist] flex justify-center text-center leading-[28px] text-[#00000070]">
              <p>Stay connected with the latest from the Plateau State ICT Development Agency. Get brief updates on new projects, collaborations, and tech innovations shaping our state.</p>
            </div>
          </div>
          <div className="h-[2000px] p-8 flex justify-center">
            <div className="h-full w-full grid  grid-cols-3 gap-y-24  gap-2 ">
              {Team.map((item) => (
                    <SecondCard
                      key= {item.id}
                      id= {item.id}
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
}

export default About;
