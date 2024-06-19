import Newsletter from "@/app/landing/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";
import { Header } from "@/layouts";
import SearchResult from "@/layouts/SearchResult/SearchResult";

export default function Search() {
  return (
    <main>
      <Header />
      <SearchResult />
      <Newsletter />
      <SectionDividerDark />
    </main>
  );
}
