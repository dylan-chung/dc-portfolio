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
HVAC DASHBOARD
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
      A full-stack web dashboard for HVAC devices is built using React and Material UI. It receives MQTT data through AWS IoT and Lambda, which is then stored in DynamoDB. Cognito is used for admin and user identification to access and view device data.
</p>


<p class="indent-8 px-8 mt-10 text-gray-400">
Front-end: React.js, Material UI(MUI)
</p>
<p class="indent-8 px-8 mt-10 text-gray-400 my-10 ">
Back-end AWS: EC2, IoT, Lambda, Gateway, Cognito, DynamoDB, and Amplify
</p>
<p class="indent-8 my-10 px-8 text-gray-400">
<ol class="list-disc">
  
  <li>Receiving MQTT data by using an MQTT broker on an EC2 instance and AWS IoT.</li>
  <li>Implementing a RESTful API to allow users to perform GET, POST, PUT, and DELETE operations on specific devices.</li>
  <li>Transfering data from AWS IoT into DynamoDB.</li>
  <li>Deploying the project using AWS Amplify.</li>
</ol>

</p>



</div>
     </div>   


)

}