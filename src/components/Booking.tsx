import React from 'react';

interface BookingProps {
  isDarkMode: boolean;
}

const Booking: React.FC<BookingProps> = ({ isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="service" className="block mb-1">
            Select Service
          </label>
          <select
            id="service"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <option>Art</option>
            <option>Design</option>
            <option>Code</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">
            Select Time
          </label>
          <input
            type="time"
            id="time"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
