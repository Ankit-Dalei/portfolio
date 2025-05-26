'use client';
import Link from "next/link";
import { useState } from 'react';

const Vlog = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#ffffe4] h-auto w-screen flex flex-col justify-between items-center">
        <div className="p-2 w-screen h-[3vh] flex justify-start items-center mt-4">
          <Link href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
            </svg>
          </Link>
        </div>
        <div className="h-auto p-2 w-screen flex flex-col justify-between items-center sm:hidden">
          <div className="h-auto w-[90%] bg-gray-300 mt-5 flex flex-col justify-center p-4 rounded shadow">
            <div className="h-[20vh] w-[100%] bg-gray-400 mb-4 rounded"></div>
            <div className="text-xl font-semibold mb-2">Title</div>
            <div className={`instrument-serif-regular-italic text-[14px] tracking-[0.2rem] text-black w-[90%] transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[50000vh]' : 'max-h-[500px]'}`}>
              {/* Long text content here */}
            </div>
            <button
              onClick={toggleContent}
              className="mt-2 text-[14px] italic text-black underline flex justify-start w-[30%]"
            >
              {expanded ? 'VIEW LESS--' : 'SEE MORE--'}
            </button>
          </div>
        </div>
        <div className="hidden sm:grid grid-cols-2 gap-4 p-4 sm:w-screen sm:h-auto">
          {Array.from({ length: 14 }).map(() => (

            <div className="h-auto w-[90%] bg-gray-300 mt-5 flex flex-col justify-center p-4 rounded shadow">
              <div className="h-[20vh] w-[100%] bg-gray-400 mb-4 rounded"></div>
              <div className="text-xl font-semibold mb-2">Title</div>
              <div className={`instrument-serif-regular-italic text-[14px] tracking-[0.2rem] text-black w-[90%] transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[50000vh]' : 'max-h-[500px]'}`}>
                {/* Long text content here */}
              </div>
              <button
                onClick={toggleContent}
                className="mt-2 text-[14px] italic text-black underline flex justify-start w-[30%]"
              >
                {expanded ? 'VIEW LESS--' : 'SEE MORE--'}
              </button>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}

export default Vlog;
