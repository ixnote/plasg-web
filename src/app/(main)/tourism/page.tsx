import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tourism & Culture - Plateau State",
  description:
    "Discover the beauty and rich cultural heritage of Plateau State, Nigeria. Explore tourist attractions, cultural sites, and experience the Home of Peace and Tourism.",
  openGraph: {
    title: "Tourism & Culture - Plateau State",
    description:
      "Discover the beauty and rich cultural heritage of Plateau State, Nigeria. Explore tourist attractions and cultural sites.",
    type: "website",
    images: [
      {
        url: "/images/default.svg",
        width: 1200,
        height: 630,
        alt: "Tourism in Plateau State",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourism & Culture - Plateau State",
    description:
      "Discover the beauty and rich cultural heritage of Plateau State, Nigeria.",
    images: ["/images/default.svg"],
  },
};

export default function Mda() {
  return (
    <main>
      <ViewMdaWidget />
    </main>
  );
}
