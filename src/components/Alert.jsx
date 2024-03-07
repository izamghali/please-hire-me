import React from "react"
import { gsap } from "gsap";

export default function Alert({ videoIndex }) {

    function popOut() {
        gsap.to('.alert', {
            y: -100, duration: 2, delay: 0.2,
        })
    }

    function autoPlay() {
        console.log('audio is playing!');
        const audio = document.getElementById('bg-audio')
        audio.play()
        popOut()
    }

    // ${ videoIndex === 0 ? 'border-slate-50 text-slate-50' : '' }
    return (
        <div className="relative flex justify-center ">
            <div role="alert" className={`
                alert z-10 absolute
                bg-transparent backdrop-blur-[0.5px] 
                h-fit w-fit border-[1px] border-black scale-90 xl:scale-100 
                p-3 xl:p-4 duration-200 
                
                ${ videoIndex === 5 || videoIndex === 0 ? 'border-slate-50 bg-transparent text-slate-50' : 'text-slate-800 bg-[rgba(255,255,255,0.4)]' } 
                
                
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="">Play background music?</span>
                <div className="flex gap-2">
                    <button onClick={popOut} className={`btn btn-sm ${ videoIndex === 5 || videoIndex === 0 ? 'border-slate-50 bg-transparent text-slate-50 hover:bg-slate-50 hover:text-slate-800' : '' } cursor-pointer bg-transparent border-[1px] border-slate-800 text-slate-800 hover:text-white hover:bg-slate-800`}>Deny</button>
                    <button onClick={autoPlay} className="btn btn-sm btn-primary cursor-pointer">Accept</button>
                </div>
            </div>
        </div>
    )
};

