import { Header } from "@/layouts";
import Legislative from "@/layouts/Legislative/Legislative";
import Newsletter from "../landing/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";

export default function LegislativePage() {
  return (
    <main>
      <Header />
      <Legislative />
      <Newsletter />
      <SectionDividerDark />
    </main>
  );
}
