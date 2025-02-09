// app/components/Hero.tsx

import React from "react";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
}) => {
  return (
    <div className="relative mb-8">
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={400}
        className="w-full h-[400px] object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-xl text-center max-w-2xl">{description}</p>
        <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;

{
  /*  <div className="relative mb-8">
          <Image
            src="/red-hair-girl-afro.jpg"
            alt="Mesmerizing afro"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg">
            <h2 className="text-4xl font-bold mb-2">Liquid Gold Waves</h2>
            <p className="text-xl text-center max-w-2xl">
              Where sunlight meets silk, your hair becomes a canvas of liquid
              movement. Effortless, radiant, transformative – this isn't just a
              hairstyle, it's your statement.
            </p>
            <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
              Unlock Your Wave
            </button>
          </div>
        </div> */
}
