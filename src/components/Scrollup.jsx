import React from 'react'
import "./scrollup.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

const Scrollup = () => {
    window.addEventListener("scroll",function(){
        const scrollUp = document.querySelector(".scrollup");
        
        if(this.scrollY>=560) scrollUp.classList.add
        ("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });

  return (
  

        <Link to="home" smooth duration={500} class="scrollup  ">
            <AiOutlineArrowUp/>
            </Link>

  )
}

export default Scrollup