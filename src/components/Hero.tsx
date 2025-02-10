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

