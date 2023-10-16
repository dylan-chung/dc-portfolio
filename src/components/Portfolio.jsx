import React from "react";
import { useState } from "react";
import arrayDestruct from "../assets/portfolio/dashboard.png";
//import installNode from "../assets/portfolio/installNode.jpg";
//import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/app.png";
import MyModal from "./Modal";
//import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
//import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import MyModal2 from "./Modal2";
const Portfolio = () => {


  
  const[showModal,setShowModal]=useState(false)
  const handleOnClose=()=>setShowModal(false)
  const[showModal1,setShowModal1]=useState(false)
  const handleOnClose1=()=>setShowModal1(false)
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      title: "Fullstack Dashboard for HVAC",
      text: "A full-stack web dashboard with a React-based UI for device management using AWS.",
      tag:  { 1:"#React.js",
              2:"#AWS",
              3:"#JavaScript"}
      
    },
    {
      id: 2,
      src: reactParallax,
      title: "Fullstack APP for HVAC",
      text: "A full-stack app developed with React Native that allows users to control devices and manages device data.",
      tag:{1:"#React Native",
            2: "#MERN",
          3:"#Docker"}
    }
  ];

  return (
<div
name="portfolio"
className="md:h-screen bg-gradient-to-b from-slate-700 via-slate-800 to-slate-800 shrink h-fit"
>
<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-700 ">
  <div className="pb-8 text-center">
    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
      Projects
    </p>
    <p className="py-6 text-gray-500">
    My most significant experience involves creating full-stack projects and deploying them using cloud infrastructure.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 bg-slate-800 ">
    {portfolios.map(({ id, src,title,text,tag }) => (
      <div key={id} className="shadow-md rounded-lg shadow-gray-500">
        <img
          src={src}
          alt=""
          className="rounded-md duration-500 hover:scale-105 cursor-pointer "
          onClick={()=>{id===1?setShowModal(true):setShowModal1(true)}} 
        />
         <div class="p-5">
  
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white
      "
      >{title}</h5>
  
  <p class="mb-3 font-normal text-gray-400">{text}</p>

  <button onClick={()=>{id===1?setShowModal(true):setShowModal1(true)}} 
          className="inline-flex items-center py-2 px-3 text-sm font-medium 
                      text-center text-white bg-gray-700 rounded-lg 
                      hover:bg-gray-800 focus:ring-4 focus:outline-none 
                      focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 
                      dark:focus:ring-gray-800 duration-500">
            Detail <AiOutlineArrowRight  class="ml-2" />
          </button>

          {id===1?<MyModal onClose={handleOnClose} visable={showModal}/>:
          <MyModal2 onClose={handleOnClose1} visable={showModal1}/>}
          
          
          <div class="flex mt-5">


          {tag[1] ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800">{tag[1]}</span> : <></>}
          {tag[2] ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800">{tag[2]}</span> : <></>}
          {tag[3] ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800">{tag[3]}</span> : <></>}
          {tag[4] ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800">{tag[4]}</span> : <></>}
          {tag[5] ? <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800">{tag[5]}</span> : <></>}
          {/*<span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">{tag[1]}</span>
          <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">{tag[2]}</span>
    <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">{tag[3]}</span>*/}
          </div>
</div>
      </div>
    ))}
  </div>


</div>
</div>
  );
};

export default Portfolio;
