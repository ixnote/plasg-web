import News from "@/layouts/News/News";
import React, { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - Plateau State Government",
  description:
    "Stay updated with the latest news, announcements, and developments from Plateau State Government. Get insights into government initiatives, policies, and community events.",
  openGraph: {
    title: "News & Updates - Plateau State Government",
    description:
      "Stay updated with the latest news, announcements, and developments from Plateau State Government.",
    type: "website",
    images: [
      {
        url: "/images/default.svg",
        width: 1200,
        height: 630,
        alt: "Plateau State Government News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Updates - Plateau State Government",
    description:
      "Stay updated with the latest news, announcements, and developments from Plateau State Government.",
    images: ["/images/default.svg"],
  },
};

function NewsPage() {
  return (
    <main className="bg-[#F4F4F4]">
      <Suspense>
        <News />
      </Suspense>
    </main>
  );
}

export default NewsPage;
