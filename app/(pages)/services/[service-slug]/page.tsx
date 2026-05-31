import Navbar from "@/app/Components/Navbar/Navbar";
import CommanHeroSection from "@/app/Components/Common/CommanHeroSection";
import Footer from "@/app/Components/Footer";
import { DigitalMarketingServices } from "@/app/Constant/Services/DigitalMarketingServices";
import OurServices from "@/app/Components/OurServices";
import LetsConnect from "@/app/Components/Common/LetsConnect";
import HowWeWork from "@/app/Components/HowWeWork";
import WhyChooseUs from "@/app/Components/WhyChooseUs";
import { Metadata } from "next";
import { DataEngineeringServiceArray } from "@/app/Constant/Services/DataEngineeringService";
import NotFound from "@/app/not-found";
import { AiMlServicesDataArray } from "@/app/Constant/Services/Ai-Ml-Services";
import { ServicesArrayInterface } from "@/app/interface/interface";

const ServicesArray = [
  ...DigitalMarketingServices,
  ...DataEngineeringServiceArray,
  ...AiMlServicesDataArray,
];

export async function generateStaticParams() {
  return ServicesArray.map((item) => ({
    "service-slug": item.id,
  }));
}

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.thinkarq.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "service-slug": string }>;
}): Promise<Metadata> {
  const { "service-slug": slug } = await params;
  const data = ServicesArray.find((item) => item.id === slug);

  if (!data) {
    return {
      title: "Service Not Found | Think Arq",
      description: "The service you are looking for does not exist.",
    };
  }

  return {
    title: data.meta_data?.title,
    description: data.meta_data?.description,
    alternates: {
      canonical: `${BASE_URL}${data.href}`,
    },
    openGraph: {
      title: data.meta_data?.title,
      description: data.meta_data?.description,
      url: `${BASE_URL}${data.href}`,
      siteName: "Think Arq",
      images: [
        {
          url: data.meta_data?.og_image || "/meta-images/think-arq.jpg",
          width: 1200,
          height: 630,
          alt: data.meta_data?.title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: data.meta_data?.title,
      description: data.meta_data?.description,
      images: [data.meta_data?.og_image || "/meta-images/think-arq.jpg"],
    },
  };
}

// Structured data: BreadcrumbList + ProfessionalService + FAQPage schemas
function ServicePageJsonLd({ data }: { data: ServicesArrayInterface }) {
  const description =
    data.meta_data?.description ||
    (Array.isArray(data.services_description)
      ? data.services_description[0]
      : data.services_description);

  // Only include FAQ items that have both a title and description
  const faqItems = (data.how_we_work || []).filter(
    (item) => item.title?.trim() && item.description?.trim()
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${BASE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.services_title,
            item: `${BASE_URL}${data.href}`,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: data.services_title,
        description,
        url: `${BASE_URL}${data.href}`,
        provider: {
          "@type": "Organization",
          "@id": `${BASE_URL}/#organization`,
          name: "Think Arq",
          url: BASE_URL,
        },
        areaServed: ["United States", "Europe", "United Kingdom"],
        image: data.meta_data?.og_image
          ? `${BASE_URL}${data.meta_data.og_image}`
          : `${BASE_URL}/meta-images/think-arq.jpg`,
      },
      ...(faqItems.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.description,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ "service-slug": string }>;
}) {
  const { "service-slug": slug } = await params;
  const data = ServicesArray.find((item) => item.id === slug);

  if (!data) return <NotFound />;

  return (
    <div className="w-full h-full">
      <ServicePageJsonLd data={data} />
      <Navbar />
      <div className="pt-[90px]">
        <CommanHeroSection
          heroImage={data?.lottieIcon}
          title={data?.services_title}
          descriptions={data?.services_description}
        />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <HowWeWork
          data={data?.how_we_work}
          comanSectionTitle={data?.how_we_work_title}
          comanSectionDescription={data?.how_we_work_description}
        />
      </div>
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <OurServices
            title={data?.other_service_title}
            description={data?.other_service_description}
            ServicesData={ServicesArray.filter((item) => item.id !== slug)}
          />
        </div>
      </div>
      {data?.whyChooseUs !== null && (
        <div className="pt-10 lg:pt-12 xl:pt-24">
          <div className="think-arq-container h-full">
            <WhyChooseUs props={data?.whyChooseUs} />
          </div>
        </div>
      )}
      <div className="pt-10 lg:pt-12 xl:pt-24">
        <div className="think-arq-container h-full">
          <LetsConnect data={data?.lets_connect} service_id={data?.id} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
