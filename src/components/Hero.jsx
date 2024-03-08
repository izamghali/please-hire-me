import React from "react"
import { greet } from "../helpers";
import Content from "./Content"

export default function Hero({ videoIndex }) {

    let videoSources = [
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/ocean.mp4?alt=media&token=b2e0b459-aed0-4c27-9331-651d4da56f04', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video5.webm?alt=media&token=55674362-8a82-49ad-a33b-684c192e9906', 
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video4-converted.webm?alt=media&token=fb0f2a7d-0164-4c6e-81a5-d8aef66df5ac',
    ]

    let audioSources = [
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/dresage%20-%20perfect%20day.mp3?alt=media&token=d4f5ab0a-8a6a-4090-8b30-3b23028ac2f9',
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/serani%20poji%20-%20sugar%20boo.mp3?alt=media&token=bad6c553-ceb0-4221-94b4-c8307152792b',
        'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/lola%20marsh%20-%20something%20stupid.mp3?alt=media&token=534d26a9-2a3b-4fc9-bf93-a19d52f06866'
    ]

    // dresage - perfect day
    // serani poji - sugar boo
    // lola marsh - something stupid

    // 0 - ocean 
    // 1 - disk
    // 2 - flower

    function handleProgress() {
        console.log('the video is downloading');
    }

    function handlePlayThrough() {
        console.log('the media can be played through');
    }

    return (
        <section className="relative" onLoad={greet} >
            <video onCanPlayThrough={handlePlayThrough} onProgress={handleProgress} className={`
            w-screen  
            ${ videoIndex === 2 && window.matchMedia("(min-width: 1536px)").matches ? '-translate-y-32' : '-translate-y-0' }
            `} autoPlay={true} muted loop={true} mutedplaysinline="">

                <source className="" src={videoSources[videoIndex]} type={` ${videoIndex === 0 ? "video/mp4" : "video/webm" } `} />

                {
                    videoIndex === 0 ?
                    
                    <source className="" src="https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/video2-converted.webm?alt=media&token=8217fa0d-6f8b-4f59-9d80-05b2dc00bfc2" type="video/webm" />
                    :
                    ''
                }

            </video>

            <audio id="bg-audio">
                <source src={audioSources[videoIndex]} type="audio/mpeg" ></source>
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

