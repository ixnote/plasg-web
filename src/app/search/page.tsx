import { Header } from "@/layouts";
import SearchHero from "@/layouts/Search/SearchHero";
import SearchWidget from "@/layouts/Search/SearchWidget";
import Newsletter from "../home/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";
import Footer from "@/layouts/Footer";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchHero />
      <SearchWidget />
      {/* <Newsletter />
      <SectionDividerDark /> */}
      <Footer />
    </main>
  );
}
