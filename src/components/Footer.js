import React from "react"
import twitter from "../images/icons8-twitter-squared-footer.png";
import github from "../images/icons8-github-footer.png";
import linkedin from "../images/icons8-linkedin-footer.png";
import insta from "../images/icons8-instagram-footer.png";

export default function Footer() {
    return(
        <footer className="bg-[#161619] w-full sm:w-[317px] h-[64px] rounded-b-2xl flex justify-center items-center">
            <a href="https://twitter.com/khalteck"><img className="w-[40px] h-[40px] m-2" src={twitter} alt=""/></a>
            <a href="https://instagram.com/khalteck"><img className="w-[40px] h-[40px] m-2" src={insta} alt=""/></a>
            <a href="https://www.linkedin.com/in/khalid-oyeneye/"><img className="w-[40px] h-[40px] m-2" src={linkedin} alt=""/></a>
            <a href="https://github.com/khalteck">
                <div className="bg-[#918E9B] w-[33px] h-[32px] m-2 rounded-md flex justify-center items-center">
                    <img className="w-[30px] h-[30px]" src={github} alt=""/>
                </div>
            </a>
        </footer>
    )
}