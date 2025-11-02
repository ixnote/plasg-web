import SearchResult from "@/layouts/SearchResult/SearchResult";
import { Suspense } from "react";
import axios from 'axios';
import CORE_APP from "@/api/URI/CORE_APP";


export async function generateStaticParams() {
  try {
    const res = await axios.get(
      `${CORE_APP.plsg.resources}/all`,
    )
    const data = res.data.data.resources;
    console.log(data.map((item: any) => ({
      id: item.id.toString(),
    })))

    return data.map((item: any) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch News list for static params:", error);
    return [{ id: "1" }];
  }
}
export default function Search() {
  return (
    <main>
      <Suspense>
        <SearchResult />
      </Suspense>
    </main>
  );
}

