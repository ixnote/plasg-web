import { Header } from "@/layouts";
import SearchHero from "@/layouts/Search/SearchHero";
import SearchWidget from "@/layouts/Search/SearchWidget";
import Footer from "@/layouts/Footer";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchHero />
      <SearchWidget />
      <Footer />
    </main>
  );
}
