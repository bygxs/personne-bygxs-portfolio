// app/components/MainContent.tsx

import React from "react";
import Hero from "./Hero";
import FeaturedHairstyles from "./FeaturedHairstyles";
import FeaturedHairdressers from "./FeaturedHairdressers";
import Booking from "./Booking";

interface MainContentProps {
  isDarkMode: boolean;
  styles: any[]; // Replace with actual type
  stylists: any[]; // Replace with actual type
}

const MainContent: React.FC<MainContentProps> = ({
  isDarkMode,
  styles,
  stylists,
}) => {
  return (
    <main className="p-4">
      <Hero
        title="Liquid Gold Waves"
        description="Where sunlight meets silk, your hair becomes a canvas of liquid movement. Effortless, radiant, transformative – this isn't just a hairstyle, it's your statement."
        buttonText="Unlock Your Wave"
        imageUrl="/red-hair-girl-afro.jpg"
      />
      <FeaturedHairstyles styles={styles} isDarkMode={isDarkMode} />
      <FeaturedHairdressers stylists={stylists} isDarkMode={isDarkMode} />
      <Booking isDarkMode={isDarkMode} />
    </main>
  );
};

export default MainContent;