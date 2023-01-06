import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrayDestruct from "../assets/portfolio/dashboard.png";
import db from "../assets/portfolio/db.png";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { SiJavascript,SiMaterialui } from "react-icons/si";
import { FaAws,FaReact } from "react-icons/fa";


export default function MyModal({visable, onClose}){
    const handleOnClose =(e)=>{
    if(e.target.id === "Modal") onClose()};


    if(!visable) return null;
return(
    <div id="Modal" onClick={handleOnClose} className="fixed inset-0 bg-white bg-opacity-30 z-40 backdrop-blur-sm 
    flex flex-col justify-center items-center">
      <p class="indent-8 text-3xl py-3 
      text-white">
Fullstack MQTT Dashboard for HVAC
</p>
<div className="h-[800px] w-5/6 bg-slate-800
border-1 border-gray-500/100 rounded-lg overflow-y-scroll  ">

<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}

      >
        <SwiperSlide>
            <img src={arrayDestruct} className="" alt="web1"/></SwiperSlide>
        <SwiperSlide><img src={db} className="" alt="web2"/></SwiperSlide>
      </Swiper>
      <div className="flex justify-evenly mt-10 ">
      <FaReact className=" fill-blue-600 duration-500 hover:fill-gray-700" size={40} />
        <SiMaterialui className=" fill-blue-600 duration-500 hover:fill-gray-700" size={40} />
        <SiJavascript className=" fill-yellow-400 duration-500 hover:fill-gray-700" size={40} />
        <FaAws className=" fill-orange-400 duration-500 hover:fill-gray-700" size={40} />
        </div>

      <p class="indent-8 mt-10 px-8 text-gray-400">
  A Full stack Web Dashboard for HVAC devices, using React and material UI.
  Recieved mqtt data through by aws iot and lambda. And storing into dynamodb. Using cognito for admin and user identify to access to view the device data.
</p>


<p class="indent-8 px-8 mt-10 text-gray-400">
Front-end: React, material UI
</p>
<p class="indent-8 px-8 mt-10 text-gray-400 my-10 ">
Back-End AWS: EC2, iot, Lambda, gateway, Congito, Dynamodb, Amplify
</p>
<p class="indent-8 my-10 px-8 text-gray-400">
<ol class="list-disc">
  
  <li>recieve mqtt data by using mqtt boker in ec2 and aws iot</li>
  <li>restful api for user get/post/put/delete specfic device .</li>
  <li>application for trasfering data from aws iot into dynamodb.</li>
  <li>deploy with aws amplify.</li>
</ol>

</p>



</div>
     </div>   


)

}