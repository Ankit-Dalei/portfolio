'use client';
import Link from "next/link";
import { useState } from 'react';

 // if using Next.js app router
const vlog = () => {
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
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </Link>
        </div>
        <div className="h-auto p-2 w-screen flex flex-col justify-between items-center">
            <div className="h-auto w-[90%] bg-gray-300 mt-5 flex flex-col justify-center p-4 rounded shadow">
              <div className="h-[20vh] w-[100%] bg-gray-400 mb-4 rounded"></div>
              <div className="text-xl font-semibold mb-2">Title</div>
              <div className={`instrument-serif-regular-italic text-[14px] tracking-[0.2rem] text-black w-[90%] transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[50000vh]' : 'max-h-[500px]'}`}>
                gfdfsdfdsdfsdfafasdasdasfcvddfgbfhgfdsadfvbngfdjksfealdcvjdnbseakwl;eo;filjvhjbeklsrufhbjwsukilemos8ufhbkjhwlz/;eoirkjnfluisirmthoifuwyerikywheliufgwukYESTRGD8WEJHERFYUTHCSDLIHBDDDKGVHJ SJHVDJV YISXH Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati perspiciatis quasi veritatis debitis placeat nihil blanditiis omnis iure atque neque illum sequi ex, esse eum porro? Eum quibusdam corrupti assumenda provident esse quis at, illo accusantium quaerat totam amet atque quidem hic laudantium! Atque fugit ad et delectus eos hic excepturi modi. Consectetur est sit inventore nesciunt veniam mollitia dignissimos quia, molestiae nostrum doloremque doloribus vitae fugiat eius itaque? Quasi sit, libero iusto fuga similique deserunt natus ducimus voluptates autem hic officia, dicta cum odit inventore modi nihil laboriosam optio quam quisquam obcaecati excepturi consequatur repellendus. Necessitatibus illum consequatur, perferendis ut cumque est soluta numquam, similique enim libero ducimus quae exercitationem dolores dolorem animi omnis corporis illo rerum eius. Beatae labore aliquam commodi eveniet corrupti aperiam magni optio non sequi assumenda? Nesciunt dignissimos laudantium iusto, consequuntur tenetur mollitia incidunt aperiam, ea distinctio minima suscipit tempore laborum nemo cumque quod aspernatur id voluptates, fuga voluptas non! Soluta ipsum culpa libero modi perspiciatis. Numquam quisquam praesentium corporis, magnam repudiandae perferendis. Porro obcaecati voluptates natus libero aspernatur necessitatibus quidem exercitationem repellat a, dignissimos fugiat voluptatem facere soluta dolorum possimus suscipit laudantium? Perspiciatis obcaecati ipsa voluptate quidem, libero quos a expedita consectetur nesciunt, praesentium atque sit harum ducimus! Iusto ducimus, sunt excepturi voluptate error ipsam nemo voluptas veritatis saepe totam perspiciatis maxime sapiente? Quidem est ullam nihil aut omnis excepturi eos a in. Nam aliquid sapiente quia illo odit excepturi nisi sunt possimus veritatis enim at voluptatem illum adipisci non molestiae nesciunt sequi impedit natus delectus, beatae suscipit consequatur quam. Aperiam maxime dolorum odit consequatur accusamus accusantium alias pariatur perferendis! Minima et quidem est laboriosam quas! Culpa nobis ipsam amet id, voluptas recusandae, alias delectus similique aut voluptatibus maiores necessitatibus consequatur aperiam ex fugit harum soluta dolor cupiditate? Voluptate eum laboriosam velit consequuntur non modi perferendis earum quis repellat dolorum placeat culpa, magnam ullam magni repellendus soluta amet ducimus commodi sint cum ipsa rerum. Impedit, nobis saepe modi optio veritatis maxime. Esse veritatis voluptate eaque, molestiae vel sit necessitatibus earum dicta unde incidunt nobis doloremque accusamus reiciendis ratione saepe distinctio sapiente quae aut magni minima consectetur minus! Debitis id blanditiis placeat at natus facere ab amet? Repudiandae voluptates molestias ullam praesentium et repellat nam, maiores necessitatibus quam aut hic porro eligendi dolor nihil itaque libero expedita. Quam voluptates nisi quos laudantium? Recusandae laboriosam modi corporis nostrum aperiam optio laudantium, quia alias voluptatum suscipit, iusto dicta excepturi sapiente aut id expedita iure sed. Explicabo inventore facere adipisci vitae quo enim veniam? Pariatur, corrupti assumenda! Molestiae impedit mollitia nemo consequatur veniam eaque asperiores rerum ullam quibusdam quisquam a, ad iste, fugiat quidem omnis quae vel soluta hic at vero ratione ex! Facilis unde saepe, quibusdam error illo laudantium ex voluptas repudiandae qui laborum fuga aut dicta consequuntur accusantium consectetur nulla est deserunt animi possimus enim doloribus voluptatibus corrupti. Ipsum facere, blanditiis porro aperiam, reiciendis sint cumque omnis ut nam odio molestias rem consequuntur. Itaque obcaecati perspiciatis velit officia excepturi saepe minima fuga eius aspernatur id.
              </div>
              <button
                onClick={toggleContent}
                className="mt-2 text-[14px] italic text-black underline flex justify-start w-[30%]"
              >
                {expanded ? 'VIEW LESS--' : 'SEE MORE--'}
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default vlog
