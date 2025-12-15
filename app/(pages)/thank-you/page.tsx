import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import ThankYouPageHelper from "@/app/Components/ThankYouPageHelper";
import { Suspense } from "react";

function page() {
  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="w-full overflow-hidden">
        <Suspense fallback={null}>
          <ThankYouPageHelper />
        </Suspense>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default page;
