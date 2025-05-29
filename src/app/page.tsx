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
          <div className="w-full h-[8vh] flex justify-between items-center sm:h-[5vh] md:h-[5vh]">
            <div className="w-[50px]">            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="45" height="30">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
            </div>
            <div className={`${jacques.className} text-4xl text-black`}>
              Ankit Dalei
            </div>
          </div>
          <div className=" mt-1 w-full h-[16vh] sm:h-[12vh]">
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
                    <div className="w-full h-[4px] absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] text-black tracking-[0.7em] z-10">
                      WELCOME TO MY PAGE
                    </div>
                  </div>
                  <div className="text-6xl">
                    YOUR TODAY
                  </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className={`${italiana.className} text-7xl text-black tracking-[0.2rem]`}>
                 GENERATE YOUR TODAY
              </div>
              <div>
                <div className="w-full h-[4px] bg-[#5C724A] mt-0.5"></div>
                <div className={` text-4xl text-black instrument-serif-regular tracking-[1.3rem] w-full flex justify-center items-center`}>WELCOME TO MY PAGE</div>
              </div>
            </div>
          </div>
          <div className="sm:h-[50vh] sm:flex sm:justify-between sm:items-center">
            <div className="mt-1 w-full h-[35vh] flex justify-center items-center opacity-[88%] mix-blend-luminosity sm:h-[90%] sm:w-[85%] sm:mt-0">
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
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[15%] w-[75%] bg-pink-800 rounded-3xl"></div>
            </div>
          </div>
          <div className="mt-1 w-full h-[25vh] flex justify-between items-center">
            <div className="w-[35%] sm:w-[30%] h-full flex flex-col justify-between">
              <div className="h-[80%] bg-gray-400"></div>
              <div className="h-[13%] bg-[#5C724A]"></div>
            </div>
            <div className="w-[63%] sm:w-[68%] h-full">
              <div className="w-full h-[4px] bg-[#5C724A]"></div>
              <div className={`${jacques.className} text-black`}>ABOUT ME</div>
              <div className={`${italianno.className} instrument-serif-regular-italic text-[14px] indent-10 text-wrap text-black`}>From humble beginnings, I embarked on a path filled with curiosity and resilience. Each challenge I faced became a stepping stone, shaping my skills and sharpening my determination. I learned to trust the process—failing, learning, and growing with every step. The late nights, the sfough fxkgb vo ijgn fsldf hno funsmo h oludj ol hnozlu hfnu hnoluh nfgb uzhn foj gs uhjgfsou jhusjh nulhjg nosluh gnfosuh slh soh os uhofulh osu hoslu hsoul hgsou lhgsoul hsou ghosug hsoulghfi.</div>
            </div>
          </div>
          <div className="mt-1 w-full h-[10vh] sm:h-[5vh]">
            <div className="w-full h-[4px] bg-[#5C724A]"></div>
            <div className="w-full h-[8px] bg-[#5C724A] mt-0.5"></div>
            <div className=" sm:w-full sm:h-[3vh] hidden sm:flex sm:justify-between sm:items-center text-black">
              <div>Contact Via Email</div>
              <div><a href="ankitdalei123@gmail.com">ankitdalei123@gmail.com</a></div>
              <div>Copyright @ 2025</div>
            </div>
            <div className="h-[95%] w-full mt-1 flex justify-around items-center sm:hidden">
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
              <div className="h-[70%] w-[15%] bg-pink-800 rounded-3xl"></div>
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
        <div className="sm:hidden">
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
        <div className="lg:h-[100vh] lg:w-full lg:p-2">
          <div className="lg:h-[8%] lg:w-full lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
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
          <div className="lg:h-[13%] lg:w-full  lg:mt-2">
            <div>
              <div className="lg:w-full lg:h-[3px] lg:bg-[#5C724A]"></div>
            </div>
            <div className={`${jacques.className} lg:text-[65px] tracking-[1.7rem] lg:text-black lg:flex lg:justify-center lg:items-center`}>
              GENERATE YOUR TODAY
            </div>
            <div className="lg:flex lg:justify-end">
              <div className="lg:w-[28.7%] lg:h-[2px] lg:bg-[#5C724A]"></div>
            </div>
          </div>
          <div className=" lg:h-[77%] lg:w-full lg:mt-2 lg:flex lg:justify-between lg:items-center">
            <div className="lg:h-[95%] lg:w-[25%] lg:flex lg:flex-col">
              <div className="lg:h-[5%] lg:text-black lg:w-full">
                <h1 className="lg:font-serif">My Story </h1>
              </div>
              <div className="lg:text-[14px] lg:tracking-[0.09rem] lg:w-full lg:h-[95%]">
                <p className={`${italianno.className} lg:text-wrap lg:text-black`}>From humble beginnings, I embarked on a path filled with curiosity and resilience. Each challenge I faced became a stepping stone, shaping my skills and sharpening my determination. I learned to trust the process—failing, learning, and growing with every step. The late nights, the silent battles, and the unwavering desire to improve fueled my transformation. Along the way, I discovered my strengths, faced my fears, and embraced the unknown. I turned obstacles into opportunities and doubts into direction. Passion became my compass, and purpose, my destination. Today, I stand not as someone who had it easy, but as someone who refused to give up. My journey isn’t about perfection—it’s about progress. And while there’s still much ahead, I carry with me the lessons, scars, and triumphs that remind me how far I’ve come—and how far I’m ready to go.
Every moment teste layer to my growth. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto ipsum fugit natus. Tempora neque ex dolore pariatur deserunt delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi inventore culpa libero. Aliquid officiis tempora voluptate laborum ea. Ea eos non sapiente obcaecati tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi totam in accusantium natus veritatis at. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="lg:h-[95%] lg:w-[30%] lg:flex lg:flex-col lg:justify-between lg:items-center">
              <div className="lg:relative lg:opacity-[88%] lg:mix-blend-luminosity lg:h-[55%] lg:w-[95%]">
                <Image
                src="/profile.png"
                alt="profileImage"
                fill
                className="rounded-3xl object-cover"
                />
              </div>
              <div className="lg:text-[14px] lg:tracking-[0.09rem] lg:w-full lg:h-[42.6%]">
                <p className={`${italianno.className} lg:text-wrap lg:text-black`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptatibus! Quo laudantium amet, nisi velit reprehenderit saepe vel deserunt nihil quae fugiat maiores cumque vero, eum ipsum quia. Non deserunt veritatis repellendus et iusto earum dolorum, debitis atque ut culpa!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla libero aliquid quaerat culpa id molestiae aut quisquam quasi nesciunt temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium placeat vero asperiores at maxime dolore officia sint quidem sit dolorum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum eos excepturi recusandae delectus quas consequatur corrupti consequuntur quam saepe fugit temporibus odit numquam, molestiae impedit rem.
                </p>
              </div>
            </div>
            <div className="lg:h-[95%] lg:w-[44%] lg:flex lg:justify-between lg:items-center">
              <div className="lg:h-[100%] lg:w-[7%] lg:flex lg:flex-col lg:justify-start  lg:items-start">
                <h1 className={`${fredericka.className} lg:text-black lg:text-[39px] lg:flex lg:flex-col lg:items-center`}>
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
                    <div className={`${fredericka.className} lg:col-span-3 lg:row-span-1 lg:text-black lg:text-7xl tracking-[1.3rem]`}>Creativity</div>

                    <div className={`${fredericka.className} lg:col-span-1 lg:row-span-2 lg:rotate-90 lg:leading-none lg:text-5xl lg:text-black`}>INDIA</div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:relative">
                      <Image
                        src="/Group.png"
                        alt="profileImage"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="lg:col-span-1 lg:row-span-1"></div>
                    <div className="lg:col-span-1 lg:row-span-1"></div>

                    <div className={`${fredericka.className} lg:col-span-1 lg:row-span-1 lg:text-black lg:text-[50px] lg:tracking-[0.7rem]`}>Idea</div>
                  </div>
                </div>
                <div className="lg:w-full lg:h-[55%] lg:flex lg:justify-between lg:items-center">
                  <div className="lg:h-full lg:w-[45%] lg:flex lg:flex-col lg:justify-between lg:items-center">
                    <div className="bg-gray-300 lg:w-full lg:h-[42%] rounded-2xl"></div>
                    <div className="bg-gray-300 lg:w-full lg:h-[42%] rounded-2xl"></div>
                    <div className="lg:w-full lg:h-[10%] lg:flex lg:justify-end lg:items-center lg:text-black">
                      <a href="">
                        See More
                      </a>
                    </div>
                  </div>
                  <div className={`${fredericka.className} lg:text-black lg:text-4xl lg:flex lg:justify-center lg:h-full lg:w-[13%]`}>
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
