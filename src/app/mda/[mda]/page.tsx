import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";

export default function Mda() {
  return (
    <main>
      <Header />
      <ViewMdaWidget />
      {/* <span className="p-5 overflow-hidden bg-white z-20 relative mt-[-50px] min-h-screen">
        <Footer />
      </span> */}
    </main>
  );
}
