import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar/Navbar";
import ThinkArqContactForm from "@/app/Components/ThinkArqContactForm";
import { Metadata } from "next";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Contact Think Arq | Get a Free Project Consultation",
  description:
    "Get in touch with Think Arq's team of AI, software, and digital marketing experts. Book a free consultation for your AI development, custom software, or digital marketing project today.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Think Arq | Get a Free Project Consultation",
    description:
      "Book a free consultation with Think Arq's AI and software development experts. We serve businesses across the USA & Europe.",
    url: `${BASE_URL}/contact`,
    siteName: "Think Arq",
    images: [
      {
        url: "/meta-images/think-arq.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Think Arq — Free Project Consultation",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Think Arq | Get a Free Project Consultation",
    description:
      "Book a free consultation with Think Arq's AI and software development experts across the USA & Europe.",
    images: ["/meta-images/think-arq.jpg"],
  },
};

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="pt-[110px]">
        <div className="think-arq-container">
          <Suspense>
            <ThinkArqContactForm />
          </Suspense>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
