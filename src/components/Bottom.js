import React from "react"

export default function Bottom() {
    return(
        <div className="bg-[#1A1B21] w-full sm:w-[317px] p-0 pb-[35px] rounded-lg">
            <div className="px-[35px] mb-[15px]">
                <h1 className="text-[19px] font-[700]">About</h1>
                <p className="text-[14px] text-[#DCDCDC]">
                    I am a frontend developer, I build things for the web, I do my best to stay on top of 
                    the changes in the state of the art, so I can meet challenges with skills/tools best suited for the job.
                </p>
            </div>
            <div className="px-[35px]">
                <h1 className="text-[19px] font-[700]">Interests</h1>
                <p className="text-[14px] text-[#DCDCDC]">
                   Football (Playing & watching), Athlete, Chelsea, Social media/Twitter Fanatic, Gamer, Call of Duty, Coding. 
                </p>
            </div>
        </div>
    )
}