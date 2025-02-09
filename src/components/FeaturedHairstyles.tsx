// app/components/FeaturedHairstyles.tsx

import React from 'react';
import Image from 'next/image';

interface Hairstyle {
  name: string;
  file: string;
}

interface FeaturedHairstylesProps {
  styles: Hairstyle[];
  isDarkMode: boolean;
}

const FeaturedHairstyles: React.FC<FeaturedHairstylesProps> = ({ styles, isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {styles.map((style, i) => (
        <div
          key={i}
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } p-4 rounded-lg shadow`}
        >
          <Image
            src={`/hairstyle/${style.file}`}
            alt={style.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-xl font-semibold mt-2">{style.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {i === 0
              ? "Perfect for a casual summer look..."
              : "A classic style with a modern twist..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedHairstyles;

{/* Featured Hairstyles */}

{/* 

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { name: "Beachy Waves", file: "beach-wave.jpg" },
            { name: "Sleek Bob", file: "sleek-bob.jpg" },
          ].map((style, i) => (
            <div
              key={i}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-4 rounded-lg shadow`}
            >
              <Image
                src={`/hairstyle/${style.file}`}
                alt={style.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{style.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {i === 0
                  ? "Perfect for a casual summer look..."
                  : "A classic style with a modern twist..."}
              </p>
            </div>
          ))} 
        </div>
 */}