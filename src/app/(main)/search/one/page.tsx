import SearchResult from "@/layouts/SearchResult/SearchResult";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Suspense>
        <SearchResult />
      </Suspense>
    </main>
  );
}
