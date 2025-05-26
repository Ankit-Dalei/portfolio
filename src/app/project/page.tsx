'use client';
import Link from "next/link";

 // if using Next.js app router

const project = () => {
  return (
    <div className="bg-[#ffffe4] h-auto w-screen flex flex-col justify-between items-center">
        <div className="p-2 w-screen h-[3vh] flex justify-start items-center mt-4">
            <Link href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </Link>
        </div>
        <div className="h-auto p-2 w-screen flex flex-col justify-between items-center sm:hidden ">
            <div className="h-[20vh] w-[90%] bg-gray-300 mt-5"></div>
        </div>
        <div className="hidden sm:grid grid-cols-2 gap-4 p-4 sm:w-screen sm:h-auto">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="h-[20vh] w-[100%] bg-gray-300"></div>
          ))}
        </div>
    </div>
  )
}

export default project
