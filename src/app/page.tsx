"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AuthModal from "@/components/AuthModal"; // Import the AuthModal
import Booking from "@/components/Booking";
import FeaturedHairdressers from "@/components/FeaturedHairdressers";
import FeaturedHairstyles from "@/components/FeaturedHairstyles";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import HamburgerMenu from "@/components/HamburgerMenu";
import HorizontalNav from "@/components/HorizontalNav";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const stylists = [
    { name: "Jane Doe", role: "Color Specialist" },
    { name: "John Smith", role: "Cutting Expert" },
  ];

  const styles = [
    { name: "Beachy Waves", file: "beach-wave.jpg" },
    { name: "Sleek Bob", file: "sleek-bob.jpg" },
  ];

  const handleAuthClick = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  // Handle click outside of modal

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Specify the type here
      const target = event.target as HTMLElement; // Cast to HTMLElement
      if (isAuthModalOpen && target.classList.contains("modal-overlay")) {
        closeAuthModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAuthModalOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isAuthModalOpen) {
        closeAuthModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isAuthModalOpen]);

  const menuItems = {
    Trends: ["Gen Z", "Boomer", "Millennial", "Gen X"],
    Styles: [" ", " "],
    Care: [
      "BuJo-bullet journaling",
      "Hair Care",
      "Scalp Care",
      
    ],
    Products: ["Shampoos", "Conditioners", "Styling Products"],
    Bookings: ["Book Appointment", "View Schedule", "Manage Bookings"],
  };

  const womenStyles = ["Bob Cut", "Ponytail", "Beach Waves"];
  const menStyles = ["Crew Cut", "Buzz Cut"];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title>Hair Hub</title>
        <meta name="description" content="Your go-to hair resource" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleMenu={toggleMenu}
        handleAuthClick={handleAuthClick}
      />

      {/* Sliding Menu */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <HamburgerMenu
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/* Horizontal Navigation with Hover Submenus */}
      <HorizontalNav
        isDarkMode={isDarkMode}
        menuItems={menuItems}
        womenStyles={womenStyles}
        menStyles={menStyles}
      />

      {/* Main Content */}
      <MainContent
        isDarkMode={isDarkMode}
        styles={styles}
        stylists={stylists}
      />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isAuthModalOpen={isAuthModalOpen}
          closeAuthModal={closeAuthModal}
          isSignUp={isSignUp}
          toggleAuthMode={toggleAuthMode}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
