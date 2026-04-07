import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Providers from "@/utils/Provider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Plateau State Government - Official Website",
  description:
    "Official portal for governance, services, and development updates in Plateau State, Nigeria. Stay informed with the latest news, access government services, and connect with your community.",
  keywords:
    "Plateau State, Government, Nigeria, Jos, Services, News, Development, Governance, MDAs, Ministries",
  authors: [{ name: "Plateau State Government" }],
  creator: "Plateau State Government",
  publisher: "Plateau State Government",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://plateaustate.gov.ng/"
  ),

  // Open Graph metadata for Facebook, WhatsApp, LinkedIn
  openGraph: {
    title: "Plateau State Government - Official Website",
    description:
      "Official portal for governance, services, and development updates in Plateau State, Nigeria. Bringing governance closer to the people.",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL || "http://plateaustate.gov.ng/",
    siteName: "Plateau State Government",
    images: [
      {
        url: "/images/default.svg",
        width: 1200,
        height: 630,
        alt: "Plateau State Government - Official Website",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Plateau State Government - Official Website",
    description:
      "Official portal for governance, services, and development updates in Plateau State, Nigeria.",
    site: "@PlateauStateGov",
    creator: "@PlateauStateGov",
    images: ["/images/default.svg"],
  },

  // Additional metadata
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

  // Verification tags (you can add these later)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} scrollbar-hide`}
      lang="en"
    >
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-3JC1C9HKDV`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3JC1C9HKDV');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <MantineProvider>
            {children}
            <ScrollToTopButton />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
