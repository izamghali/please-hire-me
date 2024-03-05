import React from "react"
import { greet } from "../helpers";
import Content from "./Content"

export default function Hero(props) {

    return (
        <section className="relative" onLoad={greet}>
            <video className="" autoPlay={true} muted loop={true} mutedplaysinline="">
                <source src='https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video2.mp4?alt=media&token=0e2e74df-3e89-41cd-b4b5-006fa15e3f1c' type="video/mp4" />
                {/* <source src={heroVid} type="video/mp4" /> */}
            </video>

            <audio id="bg-audio">
                <source src="https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/audio2.mp3?alt=media&token=247202bf-a038-4c9d-958d-7358fad9a08c" type="audio/mp3" ></source>
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

