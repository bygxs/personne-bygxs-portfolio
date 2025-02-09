// app/components/Footer.tsx

import React from "react";

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-gray-900"
      } text-white p-4 mt-8`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Hair Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* Footer */
}
{
  /*   <footer
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-900"
        } text-white p-4 mt-8`}
      >
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Hair Hub. All rights reserved.</p>
        </div>
      </footer> */
}
