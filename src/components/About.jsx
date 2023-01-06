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
 

               Hello there, my name is Dylan, I am an electronic engineer with 2+ years experience in HVAC industrial development. 
               </p>
               <p className="text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
               In my previous job as an electronic engineer, I work with various embedded programming languages and full-stack development, 
               I successfully establish interactive APP on Apple Store & Google Play using React, JavaScript, and AWS, etc. 
               These full-stack projects granted me to achieve hands on website and app development, including front-end and back-end knowledge, testing paradigm and UI/UX approach. 
               </p>
               <p className=" text-xl py-2 max-w-lg font-sans font-light text-gray-400 text-justify">
               Other than that, I also led in the development of different HVAC modals integrated with C & assembly languages, as well as laying out PCB designs in my position. 
              I am passionate and driven in technologies and keen on applying my knowledge and professional experience in front end development.
               </p>
                
            
            
            <a href="./resume.pdf" download='TIK_SANG_CHUNG-CV'
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
