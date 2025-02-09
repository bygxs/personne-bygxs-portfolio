// src/components/Navigation.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 text-white rounded-full"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
          <ul className="py-1">
            <li>
              <Link
                href="/"
                className={`block px-4 py-2 text-sm ${
                  isActive("/")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className={`block px-4 py-2 text-sm ${
                  isActive("/account")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Documents
              </Link>
            </li>
            <li>
              <Link
                href="/find-lawyer"
                className={`block px-4 py-2 text-sm ${
                  isActive("/find-lawyer")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Book Consultation
              </Link>
            </li>
            <li>
              <Link
                href="/stories"
                className={`block px-4 py-2 text-sm ${
                  isActive("/stories")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                podcast & Stories
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className={`block px-4 py-2 text-sm ${
                  isActive("/reviews")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Reviews & Ratings
              </Link>
            </li>
            <li>
              <Link
                href="/podcast"
                className={`block px-4 py-2 text-sm ${
                  isActive("/podcast")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/note"
                className={`block px-4 py-2 text-sm ${
                  isActive("/note")
                    ? "bg-gray-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Sing out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
