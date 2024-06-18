import { Header } from "@/layouts";
import SearchHero from "@/layouts/Search/SearchHero";
import SearchWidget from "@/layouts/Search/SearchWidget";
import Newsletter from "../landing/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchHero />
      <SearchWidget />
      <Newsletter />
      <SectionDividerDark />
    </main>
  );
}
