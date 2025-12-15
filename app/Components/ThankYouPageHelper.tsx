"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function ThankYouPageHelper() {
  const [visible, setVisible] = useState(false);
  const searchParams = useSearchParams();
  const hasRedirected = useRef(false);
  useEffect(() => {
    const source = searchParams.get("source");

    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;

    const isReload = navigationEntry?.type === "reload";

    if (isReload && !source) {
      window.location.replace("/");
      return;
    }

    if (source) {
      window.history.replaceState(null, "", "/thank-you");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="py-[200px] flex items-center justify-center p-4 relative overflow-hidden bg-(--main-bg-color)">
      {/* Elegant background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 top-1/4 left-1/4 animate-pulse-slow" />
        <div
          className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 bottom-1/4 right-1/4 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`max-w-2xl w-full transition-all duration-1000 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
        <div className="glass-effect rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer" />

          <div className="relative z-10 text-center">
            {/* Success icon with elegant animation */}
            <div className="flex justify-center mb-8 animate-scaleIn">
              <div className="relative">
                <div className="absolute inset-0 bg-green-600 rounded-full blur-2xl opacity-60" />
                <div className="relative bg-green-600 rounded-full p-6">
                  <FiCheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Main heading with elegant typography */}
            <h1
              className="text-5xl md:text-6xl font-bold text-(--theme-black-color) font-space-grotesk mb-4 tracking-wide animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}>
              Thank You
            </h1>

            {/* Elegant message */}
            <p
              className="text-base md:text-xl lg:text-2xl text-(--theme-black-color) font-space-grotesk font-medium mb-6 leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}>
              Your message has been received
            </p>

            <p
              className="text-(--theme-black-color) font-space-grotesk font-light mb-12 max-w-md mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}>
              We appreciate you reaching out to us. Our team will review your message and respond within 24-48 hours.
            </p>

            {/* Single elegant button */}
            <div className="animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
              <Link
                href={"/"}
                className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-linear-to-br from-purple-600 to-blue-600 rounded-full hover:scale-105">
                <span className="absolute inset-0 w-full h-full bg-linear-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-lg tracking-wide">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
