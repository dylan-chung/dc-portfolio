import React from "react";
import { AiOutlineMail } from "react-icons/ai";

import avatar from "../assets/me2.png";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiOutlineDocumentText } from "react-icons/hi";
const About = () => {
  return (
    <div
      name="about"
      className="w-full    h-screen bg-gradient-to-b from-slate-700 via-slate-800 to-slate-800 shrink h-max "
    >
       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-700 ">
        <div className="pb-12 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white  ">
            About Me
          </p>
        </div>
        
        <div className="  flex flex-col items-center justify-center px-4 mb-40 md:flex-row">
          <div>
            <img
              src={avatar}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 mt-4 md:mt-8 
              "
            />
            <div class="flex flex-row justify-evenly mt-10">
              <a href="https://github.com/dylan-chung" target="_blank" rel="noopener noreferrer"><AiFillGithub class=" fill-gray-500  duration-500 hover:fill-gray-300" size={40} /></a>
              <a href="https://www.linkedin.com/in/tschungDC/" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedin class=" bg-blue-500 duration-500 fill-white hover:fill-gray-300 rounded-full" size={40} /></a>
              
              <AiOutlineMail onClick={() => window.location = 'mailto:dylan.chungtsc@gmail.com'} class=" duration-500 fill-gray-500  hover:fill-gray-300" size={40} />
            </div>
          </div>

          <div className="flex flex-col  h-full">
            <p className=" text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
 

            Hello, I'm Dylan and I have over 2 years of experience in HVAC industrial development at an OEM/ODM company.               </p>
               <p className="text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
               In my previous role as an electronic engineer, I worked extensively with various embedded programming languages and full-stack development. I led the development of various HVAC models, integrating C and assembly languages. I was also responsible for PCB layout designs in my position.
               </p>
               <p className=" text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
               Furthermore, I developed a full-stack app for an IoT device using React, JavaScript, and AWS, among other technologies. This encompassed both front-end and back-end development, including a strong understanding of testing paradigms and a user-centric UI/UX approach.
               </p>
               <p className=" text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
               My passion for technology and my drive to apply my knowledge and professional experience are evident in my commitment to front-end development.               </p>
                
            
            
            <a href="https://tscresume.s3.us-east-2.amazonaws.com/TIK+SANG+CHUNG+resume.pdf" download='TIK_SANG_CHUNG-RESUME'
              rel="noreferrer" target="_blank" class="inline-flex mt-5 justify-center duration-500 items-center py-3 px-5 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-white dark:focus:ring-blue-900">
            Resume 
            <HiOutlineDocumentText class="ml-2"/>
            </a>
          </div>
        </div>

      </div>

      
    </div>
   
  );
};

export default About;
