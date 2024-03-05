import React, { useEffect } from "react"

export default function Badge(props) {

    return (
        <section className="absolute bottom-32 2xl:bottom-60 left-10 translate-y-10">

            <h3 className="text-xl text-slate-100 font-light mb-2">Powered by: </h3>
            
            <div className="flex gap-4">
                <a href="https://www.codecademy.com/learn" target="_blank" className="badges  bg-[rgba(255,255,255,0.4)]">
                    <img className="badge-images" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg" alt="" />
                </a>
                <a href="https://purwadhika.com/job-connector/fullstack-web-development" target="_blank" className="badges backdrop-blur-sm">
                    <img className="badge-images" src="https://purwadhika.com/static/brand/logopwdk-text-white.png" alt="" />
                </a>
                <a href="https://www.udemy.com/" target="_blank" className="badges bg-[rgba(255,255,255,0.4)]">
                    <img className="badge-images" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" alt="" />
                </a>
            </div>

        </section>
    )
};

