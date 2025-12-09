"use client";

import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import ThankYouPageHelper from "@/app/Components/ThankYouPageHelper";
import { useSearchParams } from "next/navigation";

import { useEffect, useRef } from "react";

function page() {
  const searchParams = useSearchParams();
  const hasRedirected = useRef(false);

  useEffect(() => {
    const source = searchParams.get("source");
    if (!source && !hasRedirected.current) {
      hasRedirected.current = true;
      window.location.href = "/";
    } else {
      window.history.replaceState(null, "", "/thank-you");
    }
  }, [searchParams]);

  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="w-full overflow-hidden">
        <ThankYouPageHelper />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default page;
