import ClientLibraryPage from "./ClientLibraryPage";
import { getMda } from "@/api/mda/getMda";
import axios from "axios";
import CORE_APP from "@/api/URI/CORE_APP";

export async function generateStaticParams() {
  try {
    // Fetch all MDAs by using a large pageSize to get all at once
    const res = await axios.get(`${CORE_APP.plsg.mda}?pageSize=10000`);
    const data = res.data.data.mdas;

    console.log(`Generating static params for ${data.length} MDAs (library)`);

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
  return <ClientLibraryPage slug={params.slug} initialData={initialData} />;
}
