import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";

export default function Mda() {
  return (
    <main>
      <Header />
      <ViewMdaWidget />
      <Footer />
    </main>
  );
}
