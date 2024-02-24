import React from "react";
import avatar from "../assets/avatar.png"
const Jumbotron = ({title}) => {
    return (
        <main>
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={avatar} className="rounded-full w-48 h-48"/>
                <div id="welcome" className="flex">
                    <h1 className="text-7xl m-4 text-amber-600 font-anta mr-0">char</h1>
                    <h2 className="text-7xl m-4 text-sky-200 font-anta mr-0">*welcome</h2>
                    <h2 className="text-7xl m-4 text-gray-200 font-anta mr-0">=</h2>
                    <h2 className="text-7xl m-4 text-green-400 font-anta mr-0">"Simone Panci"</h2>
                </div>
                <div className="mt-4">
                    <button className="rounded-md bg-[#90a4ae] text-lg text-gray-800 shadow-md px-8 py-4 font-fredoka font-medium mr-4">Contact me</button>
                    <button className="rounded-md border-2 text-gray-200 border-[#90a4ae] text-lg shadow-md px-[32px] py-[16px] font-fredoka font-medium">About me</button>
                </div>
            </div>
        </main>
    )
}

export default Jumbotron