import React from 'react'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      name="footer"
      className="bg-white "
    >

<footer class="p-4 bg-slate-800  shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span class="text-sm sm:text-center text-gray-400">© 2022 DC
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
        <li>
        <Link to="home" smooth duration={500} class="mr-4 cursor-pointer md:mr-6
        relative before:absolute before:w-full before:h-[2px] 
        before:top-4 before:bg-gray-300
        before:hover:scale-x-100 before:scale-x-0 
        before:transition before:ease-in-out before:duration-500">
            Home
            </Link>
            
        </li>
        <li>
            <Link to="about" smooth duration={500} class="mr-4  cursor-pointer md:mr-6
            relative before:absolute before:w-full before:h-[2px] 
            before:top-4 before:bg-gray-300
            before:hover:scale-x-100 before:scale-x-0 
            before:transition before:ease-in-out before:duration-500">
            About
            </Link>
        </li>
        <li>
        <Link to="experience" smooth duration={500} class="mr-4 cursor-pointer md:mr-6
        relative before:absolute before:w-full before:h-[2px] 
        before:top-4 before:bg-gray-300
        before:hover:scale-x-100 before:scale-x-0 
        before:transition before:ease-in-out before:duration-500">
            Experience
            </Link>
        </li>
        <li>
        <Link to="portfolio" smooth duration={500} class="mr-4  cursor-pointer md:mr-6 
        relative before:absolute before:w-full before:h-[2px] 
        before:top-4 before:bg-gray-300
        before:hover:scale-x-100 before:scale-x-0 
        before:transition before:ease-in-out before:duration-500">
            Portfolio
            </Link>
        </li>
    </ul>
</footer>
</div>
        
  )
}

export default Footer