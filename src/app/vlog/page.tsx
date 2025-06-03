'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import vlogData from '../resourceData/vlogData';

const Vlog = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleContent = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };


  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* Back Button */}
      <div className="w-full p-4">
        <Link href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l106.1-106.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
        </Link>
      </div>

      {/* Grid Vlogs */}
      <div className="w-full px-4 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
        {vlogData.map(({ id, image, title, content }) => (
          <div key={id} className="w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="relative w-full h-48 sm:h-64 rounded overflow-hidden bg-gray-300">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="text-xl font-bold mt-4 text-black">{title}</h2>
            <p className={`text-sm mt-2 text-gray-800 transition-all duration-300 overflow-hidden ${expandedId === id ? 'max-h-[1000px]' : 'max-h-[60px]'}`}>
              {content}
            </p>
            <button
              onClick={() => toggleContent(id)}
              className="mt-2 text-sm italic text-black underline"
            >
              {expandedId === id ? 'VIEW LESS--' : 'SEE MORE--'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vlog;
