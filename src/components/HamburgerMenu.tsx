// app/components/HamburgerMenu.tsx

import React from "react";
import Link from "next/link";

interface HamburgerMenuProps {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isDarkMode,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 bottom-0 w-64 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } p-4 transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
        &times;
      </button>
      {["Profile", "Bookings", "Care", "Products", "Settings"].map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="block py-2 hover:text-purple-600"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default HamburgerMenu;

/* 
old code form app/page.tsx
   {/*   <nav
        className={`fixed top-0 left-0 bottom-0 w-64 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } p-4 transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
     <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        {["Profile", "Bookings", "Care", "Products", "Settings"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="block py-2 hover:text-purple-600"
          >
            {item}
          </Link>
        ))}
      </nav> */
