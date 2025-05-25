import { Jacques_Francois_Shadow , Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
});

const jacques = Jacques_Francois_Shadow({
  subsets: ['latin'],
  weight: '400',
})
export default function Home() {
  return (
    <>
      <div className="bg-[#ffffe4] h-auto w-auto">
        <div className="h-auto w-screen p-2">
          <div className="w-full h-[8vh] flex justify-between items-center">
            <div className="w-[50px]">            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="45" height="30">
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
            <div className={`${jacques.className} text-4xl text-black`}>
              Ankit Dalei
            </div>
          </div>
          <div className=" mt-1 w-full h-[16vh]">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full h-[8px] bg-[#5C724A]"></div>
              <div className="w-full h-[4px] bg-[#5C724A] mt-0.5"></div>
            </div>
            <div className="block sm:hidden">
              <div className={`${italiana.className} text-black`}>
                  <div className="text-6xl">
                    GENERATE 
                  </div>
                  <div className="relative w-full h-[30px]">
                    <div className="w-full h-[4px] top-2.5 bg-[#5C724A] absolute z-0"></div>
                    <div className="w-full h-[4px] absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-black tracking-[0.724em] z-10">
                      WELCOME TO MY PAGE
                    </div>
                  </div>
                  <div className="text-6xl">
                    YOUR TODAY
                  </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className={`${italiana.className} text-7xl text-black`}>
                 GENERATE YOUR TODAY
              </div>
              <div>
                <div className="w-full h-[4px] bg-[#5C724A] mt-0.5"></div>
                <div className={` text-4xl text-black instrument-serif-regular`}>WELCOME TO MY PAGE</div>
              </div>
            </div>
          </div>
          <div className="mt-1 w-full h-[35vh] flex justify-center items-center opacity-[88%] mix-blend-luminosity">
            <img src="./images/profile.png" alt="" className="rounded-3xl"/>
          </div>
          <div className="hidden sm:block">
            <div className="mt-1 w-full h-[35vh] flex justify-center items-center opacity-[88%] mix-blend-luminosity">
              <img src="./images/profile.png" alt="" className="rounded-3xl"/>
            </div>
            <div></div>
          </div>
          <div className="bg-amber-600 mt-1 w-full h-[30vh]">

          </div>
          <div className="bg-amber-600 mt-1 w-full h-[10vh]">

          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
