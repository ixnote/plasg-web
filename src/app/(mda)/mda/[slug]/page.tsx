import ClientPage from "./ClientPage";
import { getMda } from "@/api/mda/getMda";
import axios from "axios";
import CORE_APP from "@/api/URI/CORE_APP";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const mdaData = await getMda({ queryKey: ["getMda", params.slug] });
    const mda = mdaData?.data?.data?.mda;

    if (!mda) {
      return {
        title: "MDA - Plateau State Government",
        description: "Official page for this MDA in Plateau State Government",
      };
    }

    const title = `${mda.name} - Plateau State Government`;
    const description =
      mda.description ||
      `Official page for ${mda.name} in Plateau State Government`;
    const imageUrl = mda.hero || mda.logo || "/images/default.svg";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/mda/${params.slug}`,
        siteName: "Plateau State Government",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${mda.name} - Plateau State Government`,
          },
        ],
        locale: "en_NG",
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
    console.error("Error generating metadata for MDA:", error);
    return {
      title: "MDA - Plateau State Government",
      description: "Official page for this MDA in Plateau State Government",
    };
  }
}

export async function generateStaticParams() {
  try {
    const res = await axios.get(`${CORE_APP.plsg.mda}`);
    const data = res.data.data.mdas;

    return data.map((item: any) => ({
      slug: item.slug.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch MDA list for static params:", error);
    return [{ slug: "1" }];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const initialData = (await getMda({ queryKey: ["getMda", params.slug] })).data
    .data;
  return <ClientPage slug={params.slug} initialData={initialData} />;
}
