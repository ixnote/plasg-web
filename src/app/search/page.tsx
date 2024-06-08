import { Header } from "@/layouts";
import SearchWidget from "@/layouts/Search/SearchWidget";
import Landing from "@/layouts/landing/Landing";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchWidget />
      <p className="text-3xl font-bold min-h-screen p-4">
        Barr. Caleb Mutfwang
      </p>
    </main>
  );
}
