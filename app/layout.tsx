import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import Notification from "./Components/Common/Notification/Notification";
import { NotificationContextApiProvider } from "./Context/Notification/NotificationContextApi";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "./Assets/Fonts/DMSans/DMSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/DMSans/DMSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/DMSans/DMSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/DMSans/DMSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "./Assets/Fonts/SpaceGrotesk/SpaceGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/SpaceGrotesk/SpaceGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Assets/Fonts/SpaceGrotesk/SpaceGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const BASE_URL = "https://www.thinkarq.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Think Arq | AI Development, Data Engineering & Digital Marketing | USA & Europe",
  description:
    "Think Arq delivers AI/ML development, custom software, data engineering, UI/UX design, and digital marketing for businesses in the USA & Europe. Think. Build. Disrupt.",
  authors: [{ name: "Think Arq", url: BASE_URL }],
  creator: "Think Arq",
  publisher: "Think Arq",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    orbitrms: "6NQFqFC71bp98gwxDRFF-mjbme4ud",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

// Sitewide Organization + WebSite structured data for Google Knowledge Panel
function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Think Arq",
        alternateName: "ThinkArq Studios",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/meta-images/think-arq.jpg`,
          width: 1200,
          height: 630,
        },
        description:
          "Think Arq delivers AI/ML development, custom software, data engineering, UI/UX design, and digital marketing services for businesses in the USA & Europe.",
        email: "contact.thinkarq@gmail.com",
        founders: [
          { "@type": "Person", name: "Jasmin Rajput", jobTitle: "Founder & CEO" },
          { "@type": "Person", name: "Vaibhav Rajput", jobTitle: "Chief Executive Officer" },
        ],
        areaServed: ["United States", "Europe", "United Kingdom"],
        serviceType: [
          "AI Development",
          "Machine Learning",
          "Custom Software Development",
          "Digital Marketing",
          "Data Engineering",
          "UI/UX Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Think Arq",
        description:
          "Think Arq delivers AI/ML development, custom software, data engineering, and digital marketing for businesses in the USA & Europe.",
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Tag Manager Script - deferred for performance */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T7DGL2QC');
            `,
          }}
        />
      </head>
      <body className={`antialiased`} id="body">
        {/* Sitewide structured data */}
        <SiteJsonLd />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7DGL2QC"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <NotificationContextApiProvider>
          {children}
          <Notification />
        </NotificationContextApiProvider>
      </body>
    </html>
  );
}
