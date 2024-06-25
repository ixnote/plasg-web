import { Header } from "@/layouts";
import MdaWidget from "@/layouts/MdaWidget/MdaWidget";
import Newsletter from "../home/Newsletter";
import SectionDividerDark from "@/components/SectionDividerDark";
import Footer from "@/layouts/Footer";

export default function Mda() {
  return (
    <main>
      <Header />
      <MdaWidget />
      {/* <Newsletter /> */}
      {/* <SectionDividerDark /> */}
      <Footer />
    </main>
  );
}
