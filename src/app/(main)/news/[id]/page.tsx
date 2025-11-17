import NewsResult from "@/layouts/NewsResult/NewsResult";
import { Suspense } from "react";
import axios from "axios";
import CORE_APP from "@/api/URI/CORE_APP";
import { Metadata } from "next";
import { getSingleNews } from "@/api/mda/getSingleNews";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const newsData = await getSingleNews({
      queryKey: ["getSingleNews", params.id],
    });
    const news = newsData?.data?.data;

    if (!news) {
      return {
        title: "News Article - Plateau State Government",
        description: "Read the latest news from Plateau State Government",
      };
    }

    const title = news.headline || "News Article - Plateau State Government";
    const description =
      news.content?.substring(0, 160) ||
      news.headline ||
      "Read the latest news from Plateau State Government";

    // Ensure image URL is absolute
    const baseUrl =
      process.env.NEXT_PUBLIC_FRONTEND_URL || "https://plateaustate.gov.ng";
    let imageUrl = news.image || "/images/default.svg";

    // Convert relative URL to absolute URL
    if (imageUrl.startsWith("/")) {
      imageUrl = `${baseUrl}${imageUrl}`;
    }

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${baseUrl}/news/${params.id}`,
        siteName: "Plateau State Government",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: news.headline || "Plateau State Government News",
          },
        ],
        locale: "en_NG",
        publishedTime: news.createdAt,
        modifiedTime: news.updatedAt,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        site: "@PlateauStateGov",
        creator: "@PlateauStateGov",
      },
    };
  } catch (error) {
    console.error("Error generating metadata for news article:", error);
    return {
      title: "News Article - Plateau State Government",
      description: "Read the latest news from Plateau State Government",
    };
  }
}

// Enable dynamic params for newly created news articles
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    // Fetch all news items by using a large pageSize to get all at once
    const res = await axios.get(`${CORE_APP.plsg.news}?pageSize=10000`);
    const data = res.data.data.news;

    console.log(`Generating static params for ${data.length} news articles`);

    return data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch News list for static params:", error);
    return [];
  }
}

export default function NewsDetails() {
  return (
    <main>
      <Suspense>
        <NewsResult />
      </Suspense>
    </main>
  );
}
