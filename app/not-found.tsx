import Link from "next/link";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";

function NotFound() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-full py-36 bg-gray-50 text-center">
        <h1 className="text-6xl md:text-[20vw] leading-[20vw] font-space-grotesk font-black text-gray-900">404</h1>
        <p className="text-lg font-space-grotesk text-gray-600 mt-4 mb-8">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="px-5 py-3 bg-[var(--theme-black-color)] text-white rounded-lg hover:bg-gray-800 transition-colors text-sm md:text-base lg:text-lg">
          Go back home
        </Link>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
