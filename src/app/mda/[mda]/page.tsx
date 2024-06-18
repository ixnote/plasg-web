import Newsletter from "@/app/landing/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";
import { Header } from "@/layouts";
import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";

export default function Mda() {
  return (
    <main>
      <Header />
      <ViewMdaWidget />
      <Newsletter />
      <SectionDividerDark />
    </main>
  );
}
