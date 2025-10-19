import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import ThinkArqContactForm from "@/app/Components/ThinkArqContactForm";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="pt-[110px]">
        <div className="think-arq-container">
          <ThinkArqContactForm />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
