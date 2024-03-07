import React from "react"

export default function Badge({ videoIndex }) {

    return (
        <section id="badges" className="
        absolute bottom-32 2xl:bottom-60 left-10 translate-y-10 duration-200
        ">

            <h3 id="heading-badge" className={`text-xl ${ videoIndex === 2 ? 'text-slate-800' : 'text-slate-200' } font-light mb-2 w-fit`}>Powered by: </h3>
            
            <div className="flex gap-4">
                {/* codecademy */}
                <a id="badge-codecademy" href="https://www.codecademy.com/learn" target="_blank" className={`badges ${ videoIndex === 2 ? 'border-slate-800' : 'border-slate-200' }  ${ videoIndex === 0 || videoIndex === 1 ? 'bg-[rgba(255,255,255,0.35)]' : '' } `}>
                    <img className="badge-images" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Codecademy.svg" alt="" />
                </a>

                {/* purwadhika */}
                <a id="badge-purwadhika" href="https://purwadhika.com/job-connector/fullstack-web-development" target="_blank" className={`badges ${ videoIndex === 2 ? 'border-slate-800' : 'border-slate-200' } `} >
                    <img className="badge-images" src="https://purwadhika.com/static/brand/logopwdk-text-white.png" alt="" />
                </a>

                {/* udemy */}
                <a id="badge-udemy" href="https://www.udemy.com/" target="_blank" className={`badges ${ videoIndex === 2 ? 'border-slate-800' : 'border-slate-200' }  ${ videoIndex === 0 ? 'bg-[rgba(255,255,255,0.35)]' : '' } `}>
                    <img className="badge-images" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" alt="" />
                </a>
            </div>

        </section>
    )
};

