import ClientLibraryPage from "./ClientLibraryPage";
import axios from 'axios';
import CORE_APP from "@/api/URI/CORE_APP";

export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${CORE_APP.plsg.mda}`
    )
    const data = res.data.data.mdas;

    return data.map((item: any) => ({
      slug: item.slug.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch MDA list for static params:", error);
    return [{ slug: "1" }];
  }
}


export default function Page() {
  return (
      <ClientLibraryPage />
  );
}