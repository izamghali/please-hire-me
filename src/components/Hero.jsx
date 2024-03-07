import React from "react"
import { greet } from "../helpers";
import Content from "./Content"

export default function Hero({ videoIndex }) {

    let videoSources = [
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video2-converted.webm?alt=media&token=8217fa0d-6f8b-4f59-9d80-05b2dc00bfc2', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video3-converted.webm?alt=media&token=acd0df7f-5a6f-48c8-b347-9369ce398dd9', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video4-converted.webm?alt=media&token=fb0f2a7d-0164-4c6e-81a5-d8aef66df5ac',
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video5.webm?alt=media&token=55674362-8a82-49ad-a33b-684c192e9906',
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video6.webm?alt=media&token=8eb4daac-60ba-4829-ab50-6bdab4c8766a',
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video7.webm?alt=media&token=f6cc6bb7-b15e-450b-b0bb-a6e7455ae993'
    ]

    // 0 - ocean 
    // 1 - gold
    // 2 - flower
    // 3 - disk 
    // 4 - greenball 
    // 5 - fireball - alert text white border white deny button

    return (
        <section className="relative" onLoad={greet} >
            <video className={`w-screen ${ videoIndex === 2 && window.matchMedia("(min-width: 1536px)").matches ? '-translate-y-32' : '-translate-y-0' } `} autoPlay={true} muted loop={true} mutedplaysinline="">
                <source className="" src={videoSources[videoIndex]} type="video/webm" />
            </video>

            <audio id="bg-audio">
                <source src="https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/audio2.mp3?alt=media&token=247202bf-a038-4c9d-958d-7358fad9a08c" type="audio/mpeg" ></source>
                {/* <source src={heroAudio} type="audio/mp3" ></source> */}
            </audio>

            {/* Greet */}
            <div className="
            absolute top-80 left-10
            lg:top-36
            xl:top-60
            ">
                <h1 id="greet" className="bg-white font-semibold xl:text-7xl lg:text-5xl w-fit text-black tracking-wider"></h1>
            </div>
            
            <Content />

        </section>
    )
};

