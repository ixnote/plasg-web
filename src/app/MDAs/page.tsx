import Header from "./header"
import "./style.css";
import logo from "@/assets/imgs/layouts/PICDA.svg"
import Arrow from "@/assets/icons/layouts/arrow.svg"
import Hero_image from "@/assets/imgs/hero_img.svg"
import arrow from "@/assets/icons/layouts/right_arrow.svg"
import dg_image from "@/assets/imgs/dg.svg"

import Image from "next/image";



const Mdas = () => {

    return (
        <div className="first relative bg-white">
            <div className="h-[40px] w-full bg-[#0E3E40] text-white flex justify-end items-center pb-0 mb-0 ">
              <p><a href="plateaustate.gov.ng ">go to plateaustate.gov.ng </a></p>
            </div>
            <div>
              <Header />
            </div>

            <div className="main-content">
                <div className=" h-[450px] w-full mt-32  flex justify-between p-14">
                    <div className=" w-[50%]  h-[362px] flex flex-col justify-between">
                        <h1 className="font-bold text-[#0E3E40] text-[50px] ">
                         Transforming Government <br /> Services through ICT
                        </h1>
                        <p className="">The best place to find government services and <br /> information under the Plateau State Information <br /> Communication Technology Development Agency (PICTDA)</p>
                        <button className="bg-[#0E3E40] h-[54px] w-[209px] flex justify-center items-center rounded-lg" >View Library
                        <Image src={Arrow} alt="" />
                        </button>
                    </div>
                    <div className="h-[209px] w-[40%] flex justify-end ">
                        <Image src={logo} alt="LOGO" className="w-[220px] h-[209px]" />
                    </div>
                </div>
                <div>
                    <Image src={Hero_image} alt="" className="w-full p-14"/>
                </div>
            </div>

            <div className="w-full px-10 pb-[120px]">
               <hr className="mb-[150px]  border-[1px] border-[#D4D4D4]" />
               <div className=" w-full  h-[690px] flex justify-center ">
                 <div className="p-6">
                    <div >
                     <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-3 font-[geist] rounded-md mb-6">Director</header>
                     <p className=" w-[520px] h-[96px] flex justify-start items-center text-[#0E3E40] font-[geist] text-4xl size-10 font-medium leading-[48px] mb-10">From the Director General of PICTDA</p>
                    </div>
                    <div className="mb-10">
                        <p className="text-[#00000070]">
                        PICTDA will work closely with decision makers in other arms of <br /> 
                        Ministries, Departments and Agencies to improve G2G initiatives as <br />
                        well as develop, identify, implement and recommend cost-effective <br />
                         technological solutions for all aspects of Plateau State Government's <br /> business activities and also coordinate ICT development in Plateau <br /> State.
                        </p>
                    </div>
                    <div className="w-[185px] h-[56px] border-[2px] border-[#9CA3AF] flex justify-center items-center rounded-md ">
                        <p className="text-[#0E3E40] pr-[5px]">About Us</p>
                        <Image src={arrow} alt="" className="pl-[5px]"/>
                    </div> 
                 </div>
                <Image src={dg_image} alt="" className="p-6 p"/>        
              </div>
            </div>
            <div className="w-full h-[1780px] px-10 pb-[120px]">
            <hr className=" mb-[150px] border-[1px] border-[#D4D4D4]" />
                <div>
                <header className="w-[100px] h-[40px] flex justify-center items-center border-[#0E3E40] border-2 text-[#0E3E40] font-normal leading-3 size-3 font-[geist] rounded-md mb-6">Quick access</header>
                <p className="w-[800px] h-[150px] flex justify-start items-center text-[#0E3E40] font-[geist] text-5xl size-11 font-medium leading-[48px] mb-10">Easily Access Essential Information on Topics of Interest</p>
                <p className="text-[#00000080] w-[750px]">Find key information quickly on a variety of important topics right here on the Plateau Government website.</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );

}

export default Mdas;

