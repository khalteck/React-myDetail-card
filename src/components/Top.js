import React from "react"
import khal from "../images/hero-khal.jpg";
import mail from "../images/icons8-mail-30.png"
import linkedin from "../images/icons8-linkedin-30.png";

export default function Top() {
    return(
        <div className="bg-[#1A1B21] w-full sm:w-[317px] p-0 pb-[40px] rounded-lg text-center">
            <img src={khal} alt="hero" className="w-[100%] h-[345px] object-cover object-top rounded-t-2xl"/>
            <h1 className="font-bold text-[28px] mt-5">Khalid Oyeneye</h1>
            <h3 className="text-[#F3BF99] mt-[-5px] font-[400]">Frontend Developer</h3>
            <a href="https://khalteck.netlify.app"><p className="text-[11px] mt-1 mb-4">khalteck.netlify.app</p></a>
            <div className="w-full flex justify-between px-[35px]">
                <button className="bg-[#F5F5F5] py-[5px] px-6 text-black rounded-md flex justify-center items-center"><img className="w-[19px] mr-2" src={mail} alt=""/><p>Email</p></button>
                <button className="bg-[#5093E2] py-[5px] px-4 text-white rounded-md flex justify-center items-center"> <img className="w-[21px] mr-2" src={linkedin} alt=""/><p>LinkedIn</p></button>
            </div>
        </div>
    )
}