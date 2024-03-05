import React from "react"

export default function FAQ(props) {


    return (
        <div id="faqs" className="relative lg:scale-70 xl:scale-100">

            <div className="
                absolute
                lg:right-0 lg:bottom-10
                xl:right-10 xl:bottom-40 
                2xl:bottom-80 
                w-[30rem] flex flex-col gap-2
                ">
                <h2 className="text-white font-semibold text-3xl">FAQs</h2>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title faq-question">
                        What's a typical day-to-day of a developer look like?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <p>Usually we copy-paste from Stackoverflow, but more often we steal our own previous code</p>
                    </div>

                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title faq-question">
                        Do you need to have a computer-science degree to be a developer?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <p>content 2</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title faq-question">
                        What kind of projects or coding challenges have you been tackling lately?
                    </div>
                    <div className="collapse-content faq-ans"> 
                        <p>content 3</p>
                    </div>
                </div>

                <div id="connect-button" className="flex justify-end gap-2 opacity-0">
                    
                    <button  className="group btn bg-transparent border-white text-white w-fit hover:bg-white hover:text-black hover:border-white">
                        <svg className="bi bi-rocket-fill w-4 group-hover:-translate-y-1 duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.175 1.991c.81 1.312 1.583 3.43 1.778 6.819l1.5 1.83A2.5 2.5 0 0 1 14 12.202V15.5a.5.5 0 0 1-.9.3l-1.125-1.5c-.166-.222-.42-.4-.752-.57-.214-.108-.414-.192-.627-.282l-.196-.083C9.7 13.793 8.85 14 8 14s-1.7-.207-2.4-.635q-.101.044-.198.084c-.211.089-.411.173-.625.281-.332.17-.586.348-.752.57L2.9 15.8a.5.5 0 0 1-.9-.3v-3.298a2.5 2.5 0 0 1 .548-1.562l.004-.005L4.049 8.81c.197-3.323.969-5.434 1.774-6.756.466-.767.94-1.262 1.31-1.57a3.7 3.7 0 0 1 .601-.41A.55.55 0 0 1 8 0c.101 0 .17.027.25.064q.056.025.145.075c.118.066.277.167.463.315.373.297.85.779 1.317 1.537M9.5 6c0-1.105-.672-2-1.5-2s-1.5.895-1.5 2S7.172 8 8 8s1.5-.895 1.5-2"/>
                            <path d="M8 14.5c.5 0 .999-.046 1.479-.139L8.4 15.8a.5.5 0 0 1-.8 0l-1.079-1.439c.48.093.98.139 1.479.139"/>
                        </svg>
                        Projects
                    </button>
                    <button  className="btn btn-info w-fit group">Connect
                        <svg className="bi bi-arrow-up-right w-4 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </button>

                </div>

            </div>
        </div>
    )
};

