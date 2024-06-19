import Newsletter from "@/app/home/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";
import { Header } from "@/layouts";
import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";

export default function Mda() {
  return (
    <main>
      <Header />
      <ViewMdaWidget />
      {/* <Newsletter />
      <SectionDividerDark /> */}
    </main>
  );
}
