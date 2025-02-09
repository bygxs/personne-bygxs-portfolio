// app/components/FeaturedHairdressers.tsx

import React from "react";
import Image from "next/image";

interface Stylist {
  name: string;
  role: string;
}

interface FeaturedHairdressersProps {
  stylists: Stylist[];
  isDarkMode: boolean;
}

const FeaturedHairdressers: React.FC<FeaturedHairdressersProps> = ({
  stylists,
  isDarkMode,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Hairdressers</h2>
      <div className="grid grid-cols-2 gap-4">
        {stylists.map((stylist, i) => (
          <div
            key={stylist.name}
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } p-4 rounded-lg shadow text-center`}
          >
            <Image
              src={`/stylist/stylist${i + 1}.jpg`}
              alt={`${stylist.name} - ${stylist.role}`}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h3 className="text-lg font-semibold mt-2">{stylist.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {stylist.role}
            </p>
            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHairdressers;

{
  /* Featured Hairdressers */
}
{
  /*  <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Hairdressers</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Jane Doe", role: "Color Specialist" },
              { name: "John Smith", role: "Cutting Expert" },
            ].map((stylist, i) => (
              <div
                key={stylist.name}
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } p-4 rounded-lg shadow text-center`}
              >
                <Image
                  src={`/stylist/stylist${i + 1}.jpg`}
                  alt={`${stylist.name} - ${stylist.role}`}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <h3 className="text-lg font-semibold mt-2">{stylist.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {stylist.role}
                </p>
                <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Book Now
                </button>
              </div>
            ))}
          </div> 
        </div> */
}
