import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import app1 from "../assets/portfolio/app1.png";
import app2 from "../assets/portfolio/app2.png";
import app3 from "../assets/portfolio/app3.png";

import ios1 from "../assets/portfolio/1.jpg";
import ios2 from "../assets/portfolio/2.jpg";
import ios3 from "../assets/portfolio/3.jpg";
import ios4 from "../assets/portfolio/4.jpg";
import ios5 from "../assets/portfolio/5.jpg";
import ios6 from "../assets/portfolio/6.jpg";
import ios7 from "../assets/portfolio/7.jpg";

import { Pagination} from "swiper";
import { AiFillYoutube } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaAws,FaReact,FaGooglePlay,FaAppStoreIos } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";


export default function MyModal2({visable, onClose}){
    const handleOnClose =(e)=>{
    if(e.target.id === "Modal2") onClose()};


    if(!visable) return null;
return(
    <div id="Modal2" onClick={handleOnClose} className="fixed inset-0 bg-white bg-opacity-30 z-40 backdrop-blur-sm 
    flex flex-col justify-center items-center ">
      <p class="indent-8 text-3xl py-3 
      text-white
      ">
HVAC DashBoard
</p>
<div className="h-[800px] w-5/6 bg-slate-800
border-1 border-gray-500/100 rounded-lg overflow-y-scroll ">

<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={app3} className="" alt="app1"/></SwiperSlide>
        <SwiperSlide><img src={app2} className="" alt="app2"/></SwiperSlide>
        <SwiperSlide><img src={app1} className="" alt="app3"/></SwiperSlide>

        <SwiperSlide><img src={ios1} className="mt-10" alt="ios1"/></SwiperSlide>
        <SwiperSlide><img src={ios2} className="mt-10" alt="ios2"/></SwiperSlide>
        <SwiperSlide><img src={ios3} className="mt-10" alt="ios3"/></SwiperSlide>
        <SwiperSlide><img src={ios4} className="mt-10" alt="ios4"/></SwiperSlide>
        <SwiperSlide><img src={ios5} className="mt-10" alt="ios5"/></SwiperSlide>
        <SwiperSlide><img src={ios6} className="mt-10" alt="ios6"/></SwiperSlide>
        <SwiperSlide><img src={ios7} className="mt-10" alt="ios7"/></SwiperSlide>



      </Swiper>
      <div className="flex justify-evenly mt-10 ">
      <FaReact className=" fill-blue-600 duration-500 hover:fill-gray-700" size={40} />
      <DiNodejsSmall className=" fill-green-800 duration-500 hover:fill-gray-700" size={40} />
        <SiJavascript className=" fill-yellow-400 duration-500 hover:fill-gray-700" size={40} />
        <FaAws className=" fill-orange-400 duration-500 hover:fill-gray-700" size={40} />
        <GrDocker className=" fill-blue-500 duration-500 hover:fill-gray-700 " size={40} />
        <SiMongodb className=" fill-green-500 duration-500 hover:fill-gray-700 " size={40} />
        </div>

      <p class="indent-8 px-8 mt-10 text-gray-400">
      Avan-stats is a full-stack, multi-platform HVAC control application built with React Native. It establishes MQTT connections via Wi-Fi and operates within a Docker container to efficiently manage data from the broker, which is then stored in MongoDB.
  </p>


  <p class="indent-8 px-8 mt-10 text-gray-400 ">
  Available on both iOS and Android, Avan-stats enables users to monitor and control a variety of HVAC models, allowing adjustments to parameters like temperature, setpoints, and schedules, all while facilitating device connectivity via Wi-Fi.
</p>




<p class="indent-8 px-8 mt-10 text-gray-400">
Front-end: React Native, Sketch
</p>
<p class="indent-8 px-8 mt-3 text-gray-400 ">

<ol class="list-disc">
  <li>Devices control menu.</li>
  <li>Support for 3 HVAC models</li>
</ol>
</p>
<p class="indent-8 px-8 mt-10 text-gray-400">
AWS: EC2, Congito, Lambda
</p>
<p class="indent-8 px-8 mt-10 text-gray-400">
Back-end: Docker, MERN
</p>
<p class="indent-8 px-8 mt-3 text-gray-400 ">
  
<ol class="list-disc">
  
  <li>Implementation of Docker on EC2</li>
  <li>Development of an application for managing MQTT data and its storage in a database</li>
  <li>Utilization of MQTT broker, an application for processing MQTT data, and a MERN stack within Docker</li>
</ol>
</p>


<p class="indent-8 px-8 mt-10 text-gray-400 underline decoration-double">
Demo
</p>
<div className="flex justify-evenly mt-10 ">
<a href="https://www.youtube.com/watch?v=XVwf_Dut-0A&ab_channel=DC" target="_blank" rel="noreferrer">
      <AiFillYoutube className=" fill-red-600 duration-500 hover:fill-gray-700" size={40} />
        </a></div>
<p class="indent-8 px-8 mt-10 text-gray-400 underline decoration-double">
  Download
</p>
<div className="flex justify-evenly my-10 ">
<a href="https://apps.apple.com/us/app/avan-stats/id1584621935" target="_blank" rel="noreferrer">
      <FaAppStoreIos className=" fill-blue-600 duration-500 hover:fill-gray-700" size={40} />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.avantec.avanstat&hl=en_CA&gl=US" target="_blank" rel="noreferrer">
      <FaGooglePlay className=" fill-green-500 duration-500 hover:fill-gray-700" size={40} />
      </a></div>

</div>
     </div>   


)

}