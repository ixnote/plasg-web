import { Header } from "@/layouts";
import SearchHero from "@/layouts/Search/SearchHero";
import SearchWidget from "@/layouts/Search/SearchWidget";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchHero />
      <SearchWidget />
      <p className="text-3xl font-bold min-h-screen p-4">
        Barr. Caleb Mutfwang
      </p>
    </main>
  );
}
