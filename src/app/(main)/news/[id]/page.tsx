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
    const imageUrl = news.image || "/images/default.svg";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news/${params.id}`,
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

export async function generateStaticParams() {
  try {
    const res = await axios.get(CORE_APP.plsg.news);
    const data = res.data.data.news;

    return data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch News list for static params:", error);
    return [{ id: "1" }];
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
