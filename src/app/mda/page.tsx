import { Header } from "@/layouts";
import MdaWidget from "@/layouts/MdaWidget/MdaWidget";
import Newsletter from "../landing/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";

export default function Mda() {
  return (
    <main>
      <Header />
      <MdaWidget />
      <Newsletter />
      <SectionDividerDark />
    </main>
  );
}
