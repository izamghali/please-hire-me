import React from "react"

export default function Loading(props) {
    return (
        <div id="loading-layer" className="absolute top-0 z-40 bg-base-200 w-screen h-screen flex justify-center duration-500">
            <span className="loading loading-infinity w-80 "></span>
        </div>
    )
};

