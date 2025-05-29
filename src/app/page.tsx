import { Jacques_Francois_Shadow , Italiana, Italianno, Fredericka_the_Great } from "next/font/google";
import CardShuffle from "./suffelui/page";
import Link from "next/link";
import Image from 'next/image';

const fredericka = Fredericka_the_Great({
  subsets: ['latin'],
  weight: '400', // Only one weight is available for this font
})

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400', // Italianno only supports 400
});

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
});

const jacques = Jacques_Francois_Shadow({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <>
      <div className="bg-[#ffffe4] h-auto w-auto lg:hidden">
        <div className="h-auto w-screen p-2">
          <div className="w-full h-[5vh] flex justify-between items-center sm:h-[5vh] md:h-[6vh]">
            <div className="w-[50px]">            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="45" height="30">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
            </div>
            <div className={`${jacques.className} text-4xl text-black`}>
              Ankit Dalei
            </div>
          </div>
          <div className=" mt-1 w-full h-auto">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full h-[8px] bg-[#5C724A]"></div>
              <div className="w-full h-[4px] bg-[#5C724A] mt-0.5"></div>
            </div>
            <div className="block sm:hidden">
              <div className={`${italiana.className} text-black`}>
                  <div className="text-6xl">
                    GENERATE 
                  </div>
                  <div className="relative w-full h-[22px]">
                    <div className="w-full h-[4px] top-2.5 bg-[#5C724A] absolute z-0"></div>
                    <div className="w-full h-auto absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-black tracking-[0.5em] z-10 hidden">
                      WELCOME TO MY PAGE
                    </div>
                  </div>
                  <div className="text-5xl">
                    YOUR TODAY
                  </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col justify-center items-center w-[100%]">
              <div className={`${italiana.className} text-5xl md:text-6xl text-black tracking-[0.2rem] w-full flex justify-center items-center`}>
                 GENERATE YOUR TODAY
              </div>
              <div className="w-full">
                <div className="w-full h-[4px] bg-[#5C724A] mt-0.5"></div>
                <div className={` text-xl text-black instrument-serif-regular tracking-[1.3rem] md:tracking-[1.6rem] w-full flex justify-center items-center`}>
                  WELCOME TO MY PAGE
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[45vh] md:h-[55vh] sm:flex sm:justify-between sm:items-center">
            <div className="mt-1 w-full h-[39vh] flex justify-center items-center opacity-[88%] mix-blend-luminosity sm:h-[90%] sm:w-[85%] sm:mt-0">
              <div className="relative w-full h-[90%] sm:h-[100%]">
                <Image
                src="/profile.png"
                alt="profileImage"
                fill
                className="rounded-3xl object-cover"
                />
              </div>
            </div>
            <div className="hidden sm:w-[13%] sm:h-[90%] sm:flex sm:flex-col sm:justify-between sm:items-center">
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={"https://www.linkedin.com/in/ankit-dalei-0aab70161/"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={45} height={45}>
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </Link>
              </div>
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={45} height={45}>
                  <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>
                </Link>
              </div>
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={45} height={45}>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </Link>
              </div>
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={45} height={45}>
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                </Link>
              </div>
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={45} height={45}>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                </Link>
              </div>
              <div className="h-[15%] w-[75%] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={45} height={45}>
                  <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-1 w-full h-auto flex justify-between items-center ">
            {/* <div className="hidden  w-[35%] sm:w-[30%] h-full flex-col justify-between">
              <div className="h-[80%] bg-gray-400"></div>
              <div className="h-[13%] bg-[#5C724A]"></div>
            </div> */}
            <div className="w-[100%] sm:w-full h-auto">
              <div className="w-full h-[4px] bg-[#5C724A]"></div>
              <div className={`${jacques.className} text-black`}>ABOUT ME</div>
              <div className={` instrument-serif-regular-italic text-[10px] tracking-tight indent-0 text-wrap text-black`}>
                A passionate and dedicated Full Stack Developer 
                with a strong foundation in the MERN stack 
                (MongoDB, Express.js, React.js, Node.js) and 
                proficiency in JavaScript and C++. Experienced in 
                building responsive web applications and integrating 
                real-time data from IoT devices such as ESP8266, DHT22,
                LDR, and heart rate sensors. Adept at working on both 
                front-end and back-end development, with a focus on 
                clean code, performance, and user experience. 
                Currently exploring industrial automation, sensor 
                data management, and machine learning applications. 
                A quick learner and problem-solver, eager to contribute 
                to innovative projects and collaborate in dynamic technology environments.
              </div>
            </div>
          </div>
          <div className="mt-1 w-full h-auto">
            <div className="w-full h-[4px] bg-[#5C724A]"></div>
            <div className="w-full h-[8px] bg-[#5C724A] mt-0.5"></div>
            {/* <div className=" sm:w-full hidden sm:justify-between sm:items-center text-black">
              <div>Contact Via Email</div>
              <div><a href="ankitdalei123@gmail.com">ankitdalei123@gmail.com</a></div>
              <div>Copyright @ 2025</div>
            </div> */}
            <div className="h-[75%] w-full mt-1 flex justify-around items-center sm:hidden">
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={"https://www.linkedin.com/in/ankit-dalei-0aab70161/"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40} height={40}>
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </Link>
              </div>
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40} height={40}>
                  <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>
                </Link>
              </div>
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40} height={40}>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </Link>
              </div>
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={40} height={40}>
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                </Link>
              </div>
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40} height={40}>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                </Link>
              </div>
              <div className="h-[50px] w-[50px] rounded-3xl relative flex justify-center items-center">
                <Link href={""}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={40} height={40}>
                  <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[25vh] w-screen p-2 flex justify-between items-center sm:h-[35vh]">
          <div className="bg-gray-300 w-[35%] h-full sm:w-[30%]"></div>
          <div className="w-[64%] h-full flex flex-col justify-between items-center sm:w-[68%]">
            <div className="w-full h-[25%] bg-gray-300 sm:h-[20%]"></div>
            <div className="w-full h-[73%] bg-gray-300 sm:h-[78%]"></div>
          </div>
        </div>
        <div className="h-[19vh] w-screen p-2 flex flex-col justify-center items-center sm:h-[25vh]">
          <div className=" flex h-[80%] w-[100%] justify-between items-center">
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
          </div>
          <div className="w-[100%] h-[10%] flex justify-end text-black font-serif ">
            <Link href="/vlog">See More</Link>
          </div>
        </div>
        <div className="h-[19vh] w-screen p-2 flex flex-col justify-center items-center sm:h-[25vh]">
          <div className=" flex h-[80%] w-[100%] justify-between items-center">
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
          </div>
          <div className="w-[100%] h-[10%] flex justify-end text-black font-serif ">
            <Link href="/project">See More</Link>
          </div>
        </div>
        <div className="hidden">
          <CardShuffle/>
        </div>
        <div className="hidden sm:h-[55vh] sm:w-screen sm:p-2 sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div className=" flex h-[92%] w-[100%] justify-between items-center">
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
            <div className="h-[95%] bg-gray-300 w-[48%]"></div>
          </div>
          <div className="w-[100%] h-[8%] flex justify-end text-black font-serif ">
            <Link href="/designs">See More</Link>
          </div>
        </div>
        <div className="w-screen h-[2vh] flex justify-between items-center p-2 sm:hidden">
          <div className="w-[100%] flex justify-end text-black font-serif mb-6">
            <Link href="/designs">See More</Link>
          </div>
        </div>
        <div className="bg-gray-900 h-[5vh] w-screen p-2 flex justify-end items-center">
          <div className="tracking-[0.2rem]">
            <a href="ankitdalei123@gmail.com">
              ankitdalei123@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="lg:h-auto lg:w-auto hidden lg:block">
        <div className="lg:h-[100vh] lg:w-[100%] lg:p-2">
          <div className="lg:h-[9%] lg:w-full lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
            <div className="lg:w-[50px] lg:flex lg:justify-end">            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="45" height="50">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
            </div>
            <div>
              <div className={`${jacques.className} lg:text-4xl lg:text-black`}>
                Ankit Dalei
              </div>
              <div className={`${jacques.className} lg:text-[12px] lg:tracking-[0.3rem] lg:text-black`}>
                Build Your Own Idea
              </div>
            </div>
          </div>
          <div className="lg:h-auto lg:w-full  lg:mt-2">
            <div>
              <div className="lg:w-full lg:h-[3px] lg:bg-[#5C724A]"></div>
            </div>
            <div className={`${jacques.className} lg:text-6xl xl:text-7xl xl:tracking-[0.5rem] tracking-[0.3rem] lg:text-black lg:flex lg:justify-center lg:items-center`}>
              GENERATE YOUR TODAY
            </div>
            <div className="lg:flex lg:justify-end">
              <div className="lg:w-[28.7%] lg:h-[2px] lg:bg-[#5C724A]"></div>
            </div>
          </div>
          <div className=" lg:h-[77%] lg:w-full lg:mt-4 xl:mt-2 lg:flex lg:justify-between lg:items-center">
            <div className="lg:h-[95%] lg:w-[25%] lg:flex lg:flex-col">
              <div className="lg:h-[5%] lg:text-black lg:w-full">
                <h1 className="lg:font-serif">My Story </h1>
              </div>
              <div className="lg:text-[15px] lg:tracking-[0.05rem] xl:text-[17px] lg:w-full lg:h-[95%] xl:hidden block">
                <p className={`${italianno.className} lg:text-wrap lg:text-black`}>
                  My journey into technology started with a deep 
                  curiosity about how websites and systems work 
                  behind the scenes. In the early stages, I began 
                  learning C++ to strengthen my logical thinking and 
                  problem-solving skills. This opened the door to 
                  web development, where I first used PHP to build 
                  dynamic web applications. Working with PHP gave 
                  me a solid understanding of backend development 
                  and how to interact with databases.<br/>
                  As I progressed, I was introduced to Java during 
                  my academic coursework. Java’s versatility and 
                  robustness fascinated me, and I soon applied it 
                  in real-world development using the Spring framework. 
                  For my domain project in the third year, I built a 
                  Spring-based application that helped me understand 
                  enterprise-level architecture, dependency injection,
                  and RESTful APIs. This experience not only sharpened 
                  my backend skills but also deepened my appreciation 
                  for clean and maintainable code.<br/>
                  Later, I transitioned into full-stack 
                  development using the MERN stack—MongoDB, 
                  Express.js, React.js, and Node.js. 
                  This shift allowed me to work seamlessly 
                  on both frontend and backend, giving me 
                </p>
              </div>

              <div className="tracking-[0.05rem] text-[17px] w-full h-[95%] hidden xl:block">
                <p className={`${italianno.className} lg:text-wrap lg:text-black`}>
                  My journey into technology started with a deep 
                  curiosity about how websites and systems work 
                  behind the scenes. In the early stages, I began 
                  learning C++ to strengthen my logical thinking and 
                  problem-solving skills. This opened the door to 
                  web development, where I first used PHP to build 
                  dynamic web applications. Working with PHP gave 
                  me a solid understanding of backend development 
                  and how to interact with databases.<br/>
                  As I progressed, I was introduced to Java during 
                  my academic coursework. Java’s versatility and 
                  robustness fascinated me, and I soon applied it 
                  in real-world development using the Spring framework. 
                  For my domain project in the third year, I built a 
                  Spring-based application that helped me understand 
                  enterprise-level architecture, dependency injection,
                  and RESTful APIs. This experience not only sharpened 
                  my backend skills but also deepened my appreciation 
                  for clean and maintainable code.<br/>
                  Later, I transitioned into full-stack 
                  development using the MERN stack—MongoDB, 
                  Express.js, React.js, and Node.js. 
                  This shift allowed me to work seamlessly 
                  on both frontend and backend, giving me 
                  complete control over the development process. 
                  I built responsive, real-time applications and 
                  started integrating IoT technologies such as ESP8266,
                </p>
              </div>

            </div>
            <div className="lg:h-[95%] lg:w-[30%] lg:flex lg:flex-col lg:justify-between lg:items-center">
              <div className="lg:relative lg:opacity-[88%] lg:mix-blend-luminosity lg:h-[55%] lg:w-[95%] xl:h-[60%]">
                <Image
                src="/profile.png"
                alt="profileImage"
                fill
                className="rounded-3xl object-cover"
                />
              </div>
              <div className="lg:text-[15px] lg:tracking-[0.05rem] lg:w-full lg:h-[42%] xl:h-[38%] block xl:hidden">
                <p className={`${italianno.className} lg:text-wrap lg:text-black`}>
                  complete control over the development process. 
                  I built responsive, real-time applications and 
                  started integrating IoT technologies such as ESP8266,
                  DHT22, LDR, and heart rate sensors. These projects 
                  connected my software skills with real-world data 
                  and sparked my interest in automation and 
                  machine learning.<br/>
                  Through each phase—PHP, Java with Spring, 
                  and the MERN stack—I’ve grown not just as a developer 
                  but as a thinker. I enjoy building solutions
                   that are efficient and user-centered. 
                   My vision is to blend technology with purpose 
                   and create systems that make life smarter and connected.
                </p>
              </div>

              <div className="text-[17px] tracking-[0.05rem] w-full h-[36%] hidden xl:block">
                <p className={`${italianno.className} indent-10 lg:text-wrap lg:text-black`}>
                  DHT22, LDR, and heart rate sensors. These projects 
                  connected my software skills with real-world data 
                  and sparked my interest in automation and 
                  machine learning.<br/>
                  <span className="indent-10">
                    Through each phase—PHP, Java with Spring, 
                  and the MERN stack—I’ve grown not just as a developer, 
                  but as a thinker. I enjoy creating solutions that are 
                  efficient, practical, and human-centered. 
                  My vision is to keep blending technology with purpose, 
                  developing systems that make everyday life smarter and 
                  more connected.
                  </span>
                </p>
              </div>


            </div>
            <div className="lg:h-[95%] lg:w-[44%] lg:flex lg:justify-between lg:items-center">
              <div className="lg:h-[100%] lg:w-auto lg:flex lg:flex-col lg:justify-start  lg:items-start">
                <h1 className={`${fredericka.className} lg:text-black lg:text-[38px] xl:text-5xl lg:flex lg:flex-col lg:items-center`}>
                  {'noitanigamI'.split('').map((letter, i) => (
                    <span key={i} className="lg:transform lg:-rotate-90 lg:leading-none">
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="lg:h-full lg:w-[91%] lg:flex lg:flex-col lg:justify-between lg:items-center">
                <div className="lg:w-full lg:h-[43%]">
                  <div className="lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-1 lg:w-full lg:h-full">
                    <div className={`${fredericka.className} lg:col-span-3 lg:row-span-1 lg:text-black lg:text-5xl tracking-[0.5rem] xl:text-6xl xl:tracking-[1rem]`}>Creativity</div>

                    <div className={`${fredericka.className} lg:col-span-1 lg:row-span-2 lg:leading-none lg:text-4xl lg:text-black flex justify-end`}>I<br/>N<br/>D<br/>I<br/>A</div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:relative">
                      <Image
                        src="/Group.png"
                        alt="profileImage"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="lg:col-span-1 lg:row-span-1"></div>
                    {/* <div className="lg:col-span-1 lg:row-span- bg-blue-400"></div> */}

                    <div className={`${fredericka.className} lg:col-span-2 lg:row-span-1 lg:text-black lg:text-[50px] xl:text-[60px] xl:tracking-[2rem] lg:tracking-[0.7rem]`}>Idea</div>
                  </div>
                </div>
                <div className="lg:w-full lg:h-[55%] lg:flex lg:justify-between lg:items-center">
                  <div className="lg:h-full lg:w-[45%] lg:flex lg:flex-col lg:justify-between lg:items-center xl:items-start xl:w-[42%]">
                    <div className="bg-gray-300 lg:w-full lg:h-[42%] rounded-2xl xl:w-[90%]"></div>
                    <div className="bg-gray-300 lg:w-full lg:h-[42%] rounded-2xl xl:w-[90%]"></div>
                    <div className="lg:w-full lg:h-[10%] lg:flex lg:justify-end lg:items-center lg:text-black xl:w-[90%]">
                      <a href="">
                        See More
                      </a>
                    </div>
                  </div>
                  <div className={`${fredericka.className} lg:text-black lg:text-4xl lg:flex lg:justify-center lg:h-full lg:w-[13%] xl:w-[15%] xl:flex xl:justify-center`}>
                    T<br/>R<br/>A<br/>V<br/>E<br/>L<br/>S
                  </div>
                  <div className="lg:h-full lg:w-[40%] lg:relative">
                    <Image
                        src="/travel.png"
                        alt="profileImage"
                        fill
                        className="object-right"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[100vh] lg:w-full lg:p-2 bg-amber-500">

        </div>
        <div className="lg:h-[5vh] lg:w-full lg:p-2 bg-gray-800 lg:flex lg:justify-between lg:items-center lg:font-serif">
          <div>Contact Via Email</div>
          <div>
            <a href="ankitdalei123@gmail.com">ankitdalei123@gmail.com</a>
          </div>
          <div>Copyright @ 2025</div>
        </div>
      </div>
    </>
  );
}
