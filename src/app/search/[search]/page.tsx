import { Header } from "@/layouts";
import SearchWidget from "@/layouts/Search/SearchWidget";
import SearchResult from "@/layouts/SearchResult/SearchResult";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchResult />
      <p className="text-3xl font-bold min-h-screen p-4">
        Barr. Caleb Mutfwang
      </p>
    </main>
  );
}
