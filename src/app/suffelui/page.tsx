// pages/index.js
'use client'; // if using Next.js app router

import { useState } from 'react';

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
];

export default function CardShuffle() {
  const [order, setOrder] = useState([0, 1, 2]);

  const bringToFront = (index: number) => {
    const newOrder = [...order];
    const clicked = newOrder.splice(index, 1)[0];
    newOrder.unshift(clicked); // Bring clicked card to front
    setOrder(newOrder);
  };

  return (
    <div className="flex justify-center items-center h-[50vh]">
      {order.map((imgIndex, i) => (
        <div
          key={imgIndex}
          onClick={() => bringToFront(i)}
          className="absolute w-72 h-96 cursor-pointer rounded-xl overflow-hidden transition-all duration-500"
          style={{
            zIndex: 3 - i,
            transform: `translateX(${i * 30}px) scale(${1 - i * 0.05})`,
            boxShadow: i === 0 ? '0 10px 20px rgba(0,0,0,0.3)' : '0 5px 10px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={images[imgIndex]}
            alt={`card-${imgIndex}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
