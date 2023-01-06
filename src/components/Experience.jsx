import React from "react";
import { AiFillHtml5,AiFillThunderbolt } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript,SiMongodb } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { FaYarn,FaNetworkWired } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { VscCircuitBoard } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { SlArrowDown } from "react-icons/sl";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-slate-800 via-slate-800 to-gray-700 shrink h-max"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-700">
        <div className="pb-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white ">
            Experience
          </p>
        </div>
        <p className="pb-6 text-gray-500" >I have worked as Engineer and these are the technologies I've learned and worked with</p>
        <p className=" text-[30px] text-gray-400">Electronic Engineering</p>
        <div className="flex justify-evenly mt-5 ">
        <FcElectronics className=" fill-orange-600 duration-500 hover:fill-gray-300" size={60} />
        <VscCircuitBoard className=" fill-green-500 duration-500 hover:fill-gray-300" size={60} />
        <FaNetworkWired className=" fill-gray-500 duration-500 hover:fill-gray-300" size={60} />
        </div>

        <p className="text-xl mt-5  flex text-zinc-400">
        <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/> PCB and circuit design
        </p>
        <p className="text-xl mt-5 flex text-zinc-400">
        <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/> Programmed microcontroller with C and Assembly language 
        </p>
        <p className="text-xl mt-5 flex text-zinc-400">
        <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/> MQTT with IoT
        </p>


        <p className=" mt-10 text-[30px] text-gray-400">Full stack Development</p>
        <div className="flex justify-evenly mt-5 ">
        <AiFillHtml5 className=" fill-orange-600 duration-500 hover:fill-gray-300" size={60} />
        <DiCss3Full className=" fill-blue-600 duration-500 hover:fill-gray-300" size={60} />
        <SiJavascript className=" fill-yellow-400 duration-500 hover:fill-gray-300" size={60} />
        <DiReact className=" fill-cyan-200 duration-500 hover:fill-gray-300" size={60} />
        <DiNodejsSmall className=" fill-green-600 duration-500 hover:fill-gray-300" size={60} />
        <SiTailwindcss className=" fill-sky-600 duration-500 hover:fill-gray-300" size={60} />
        <ImNpm className=" fill-red-600 duration-500 hover:fill-gray-300 " size={60} />
        <FaYarn className=" fill-blue-500 duration-500 hover:fill-gray-300 " size={60} />
        <FaAws className=" duration-500 hover:fill-gray-300 fill-orange-400 " size={60} />
        <GrDocker className=" fill-blue-500 duration-500 hover:fill-gray-300 " size={60} />
        <SiMongodb className=" fill-green-500 duration-500 hover:fill-gray-300 " size={60} />
        </div>

<div className="mt-5">
    <p className="text-xl flex text-zinc-400 text-center">
    <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/>  Built Web Dashboard and APP using React
     </p>
        <p className="text-xl mt-5 flex text-zinc-400 text-center">
        <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/>  Created backend in Node, Express
        </p>
        <p className="text-xl mt-5 flex text-zinc-400 text-center">
        <AiFillThunderbolt className="text-2xl text-zinc-500 text-center mr-2"/>  Built and deployed applications with Docker & AWS
        </p>

        </div>



  <div class="relative mt-10  ">
    <input type="checkbox"
        class="
        peer 
        absolute top-0 inset-x-0 
        w-full h-12 
        opacity-0 z-10 cursor-pointer  "/>
         <div class=" h-12 w-full pl-5 flex items-center bg-slate-600">
         <p className="  text-[30px] text-gray-300 ">Work</p>
        </div>

        <div class="absolute top-4 right-5 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
          <SlArrowDown />
        </div>

        <div class="overflow-hidden
        transition-all duration-500
        max-h-0 peer-checked:max-h-fit bg-slate-700" >
          <div class="p-4">


        <ol class="relative border-l border-gray-700">                
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            
            <h3 class="text-lg font-semibold text-white">Electronic Engineer</h3>
            <h1 class="text-gray-200">Avantec Manufacturing Limited, Hong Kong</h1>
            <time class="mb-1 text-sm font-normal leading-none text-gray-300">May 2020 - Jun 2022</time>
            <ul class="space-y-1 list-disc list-inside text-gray-400">
            <li>
            Designed and programmed the HVAC & PLC microcontroller (MODBUS) using C and Assembly programming language. 
            </li>
            <li>
            Led in maintaining and validating components & PCB designs during the production phase of the product lifetime.
            </li>
            <li>
            Apply appropriate theoretical and practical methods to perform acceptance and validation tests. 
            </li>
            <li>
            Enhanced HVAC IoT to support smart home heating & cooling system.  
            </li>
            <li>
            Launched and implemented the Web Dashboard, mobile App in both iOS & Android system for wireless HVAC control.
            </li>
            <li>
            Created full stack development for client’s input and devices data analysis using MongoDB and DynamoDB.
            </li>
            </ul>
          </li>
        </ol>


          </div>

        </div> 
  </div>

        

      </div>

      
    

    </div>
   
  );
};

export default Experience;
