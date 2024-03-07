import React from "react"
import Avatar from "./Avatar"

export default function FAQ({ videoIndex }) {


    return (
        <div id="faqs" className="relative lg:scale-70 xl:scale-100">

            <div className="
                absolute right-10 w-[25rem] duration-200
                lg:bottom-10
                xl:right-10 xl:bottom-20 xl:w-[30rem]
                2xl:bottom-52 
                flex flex-col gap-2
                ">
                <h2 className={` ${ videoIndex === 2 ? 'text-slate-800' : 'text-slate-200' }  font-semibold xl:text-3xl text-xl`}>FAQs</h2>

                {/* FAQ1 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title faq-question">
                        What's a typical day-to-day of a developer look like?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <p>Usually we copy-paste from <span> </span>
                            <a className="group linked-text" href="https://stackoverflow.com/" target="_blank">
                                <svg className="bi bi-stack-overflow w-4 inline-block group-hover:fill-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"/>
                                    <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z"/>
                                </svg>
                                
                                Stack Overflow</a>
                            , but really, more often than not, we steal our own previous code. That is also from <span> </span>

                            <a className="group linked-text" href="https://stackoverflow.com/" target="_blank">
                                <svg className="bi bi-stack-overflow w-4 inline-block group-hover:fill-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"/>
                                    <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z"/>
                                </svg>
                                
                                Stack Overflow</a>
                            
                            . Nah, I'm kidding, we use chat GPT nowadays, so yeah, we hardly code.</p>
                    </div>

                </div>

                {/* FAQ2 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title faq-question">
                        Do you need to have a computer-science degree to land a coding job at tech companies?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <blockquote className="italic" cite="https://www.glassdoor.com/blog/technical-interview-tips/">
                            "Not really. With a CS degree, a candidate will hopefully already know the core data structures and algorithms. 
                            But that only takes candidates a week or so to learn, so it doesn’t really give those candidates a huge advantage. 
                            <span className="bg-white text-black">
                                The biggest disadvantage that candidates without CS degrees have is just a lack confidence."
                            </span>
                        </blockquote>
                        <br />
                        <span> - <a href="https://www.gayle.com/" target="_blank" className="linked-text">Gayle Laakmann McDowell</a>, author of the best-selling book, 
                        <a target="_blank" className="linked-text" href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=asap_bc?ie=UTF8"> Cracking the Coding Interview</a> </span>
                    </div>
                </div>

                {/* FAQ3 */}
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title faq-question">
                        Can you fix my printer? Can you hack my ex's Instagram account? and can you fix the wifi?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <p>
                            1. No <br />
                            2. No <br />
                            3. Just turn it off, and plug it back in. EZ
                        </p>
                    </div>
                </div>

                {/* other portfolios */}
                <div className="group py-2 h-auto btn bg-slate-50 flex flex-row items-center justify-between gap-2 ">
                    {
                        window.matchMedia("(max-width: 1280px)").matches ? 
                            ''
                        :
                            <Avatar />
                    }

                    
                    <p className={` ${ window.matchMedia("(max-width: 1280px)").matches ? 'w-full' : '' } justify-between font-light flex items-end gap-2 text-slate-800 group-hover:text-slate-50 `}>
                        Check out my developer friends' portfolios! 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </p>
                    
                </div>

                {/* connect button */}
                <div id="connect-button" className="flex xl:justify-end justify-between xl:gap-2 opacity-0">
                    
                    <button  className={` ${ videoIndex === 2 ? 'border-slate-800 text-slate-800' : 'border-slate-200 text-slate-200' } faq-btn group btn bg-transparent  hover:bg-white hover:text-black hover:border-white `} >
                        <svg className={` ${ videoIndex === 2 ?  'fill-slate-800' : 'fill-slate-200 group-hover:fill-slate-800' } w-4 group-hover:-translate-y-1 duration-200 `} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.175 1.991c.81 1.312 1.583 3.43 1.778 6.819l1.5 1.83A2.5 2.5 0 0 1 14 12.202V15.5a.5.5 0 0 1-.9.3l-1.125-1.5c-.166-.222-.42-.4-.752-.57-.214-.108-.414-.192-.627-.282l-.196-.083C9.7 13.793 8.85 14 8 14s-1.7-.207-2.4-.635q-.101.044-.198.084c-.211.089-.411.173-.625.281-.332.17-.586.348-.752.57L2.9 15.8a.5.5 0 0 1-.9-.3v-3.298a2.5 2.5 0 0 1 .548-1.562l.004-.005L4.049 8.81c.197-3.323.969-5.434 1.774-6.756.466-.767.94-1.262 1.31-1.57a3.7 3.7 0 0 1 .601-.41A.55.55 0 0 1 8 0c.101 0 .17.027.25.064q.056.025.145.075c.118.066.277.167.463.315.373.297.85.779 1.317 1.537M9.5 6c0-1.105-.672-2-1.5-2s-1.5.895-1.5 2S7.172 8 8 8s1.5-.895 1.5-2"/>
                            <path d="M8 14.5c.5 0 .999-.046 1.479-.139L8.4 15.8a.5.5 0 0 1-.8 0l-1.079-1.439c.48.093.98.139 1.479.139"/>
                        </svg>
                        Projects
                    </button>
                    <button  className="faq-btn btn btn-info group">Connect
                        <svg className="bi bi-arrow-up-right w-4 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </button>

                </div>
                
            </div>
        </div>
    )
};

