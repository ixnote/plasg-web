import SearchHero from "@/layouts/Search/SearchHero";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <Suspense>
        <SearchHero />
      </Suspense>
    </main>
  );
}
