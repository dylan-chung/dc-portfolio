import React from "react";
import avatar from "../assets/me2.png";
import "./home.css";
//import { MdOutlineKeyboardArrowRight } from "react-icons/md";
//import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

import { AiOutlineMail } from "react-icons/ai";
const Home = () => {
  //const [darkToggle, setDarkToggle] = React.useState(false)
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-slate-800 via-slate-800 to-slate-700 my-auto shrink h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        <div className="flex flex-col justify-center h-full">
        <img
            src={avatar}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/3  mt-4 md:mt-8 
            border-4 
            border-gray-500 
            home_img"
          />

          <h2 className="text-4xl mt-10 sm:text-5xl font-bold text-gray-400">
            Tik-Sang Chung
          </h2>

          <h3 className="text-3xl sm:text-3xl font-bold  mt-5  text-gray-400">
            (Dylan)
          </h3>
          
          <p className=" text-xl py-5 max-w-5xl font-sans font-light  text-gray-400">
             A poassionate Multi-skilled Enginner in Toronto, have 2 years experience in PLC and HVAC industry development.
             Complete various implementation and integration projects of systems, software and hardware.
              Have strong project management skills and be able to complete projects independently.
               Willing to learn new technologies and skills.
          </p>
          <div class="flex flex-row justify-evenly">
          <a href="https://github.com/dylan-chung" target="_blank" rel="noopener noreferrer"><AiFillGithub class=" fill-gray-500  duration-500 hover:fill-gray-700" size={40} /></a>
          <a href="https://www.linkedin.com/in/tschungDC/" target="_blank" rel="noopener noreferrer">
          <TiSocialLinkedin class=" bg-blue-500 duration-500 fill-white hover:fill-gray-300 rounded-full" size={40} /></a>
         
         <AiOutlineMail onClick={() => window.location = 'mailto:dylan.chungtsc@gmail.com'} class=" duration-500 fill-gray-500  hover:fill-gray-700" size={40} />
         
         </div>
         




         
  </div>

        <div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
