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
    const mdaData: any = await getMda({ queryKey: ["getMda", params.slug] });
    const mda = mdaData?.data?.data?.mda;

    if (!mda) {
      return {
        title: "MDA - Plateau State Government",
        description: "Official page for this MDA in Plateau State Government",
      };
    }

    const title = `${mda.name} - Plateau State Government`;
    const description =
      mda.hero?.description ||
      mda.description ||
      `Official page for ${mda.name} in Plateau State Government`;

    // Ensure image URL is absolute
    const baseUrl =
      process.env.NEXT_PUBLIC_FRONTEND_URL || "https://plateaustate.gov.ng";
    let imageUrl =
      mda.hero?.logo || mda.hero || mda.logo || "/images/default.svg";

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
        type: "website",
        url: `${baseUrl}/mda/${params.slug}`,
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
    // Fetch all MDAs by using a large pageSize to get all at once
    const res = await axios.get(`${CORE_APP.plsg.mda}?pageSize=1000`);
    const data = res.data.data.mdas;

    console.log(`Generating static params for ${data.length} MDAs`);

    return data.map((item: any) => ({
      slug: item.slug.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch MDA list for static params:", error);
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const initialData = (await getMda({ queryKey: ["getMda", params.slug] })).data
    .data;
  return <ClientPage slug={params.slug} initialData={initialData} />;
}
