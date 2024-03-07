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

    return (
        <div className="relative flex justify-center ">
            <div role="alert" className={`
                ${ videoIndex === 2 ? 'text-slate-800 bg-[rgba(255,255,255,0.4)]' : 'border-slate-50 bg-transparent text-slate-50' } 
                
                alert z-10 absolute
                bg-transparent backdrop-blur-[0.5px] 
                h-fit w-fit border-[1px] border-black scale-90 xl:scale-100 
                p-3 xl:p-4 duration-200 
                
                
                
            `}>
                <span className="">Play background music?</span>
                <div className="flex gap-2">
                    <button onClick={popOut} className={`btn btn-sm btn-ghost  cursor-pointer border-[1px]`}>Deny</button>
                    <button onClick={autoPlay} className={`
                    btn btn-sm btn-neutral  cursor-pointer bg-transparent
                    ${ videoIndex !== 2 ? ' border-slate-50 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-50 text-slate-50'  : 'text-slate-800 hover:text-slate-50' }
                    
                    `}>Accept</button>
                </div>
            </div>
        </div>
    )
};

