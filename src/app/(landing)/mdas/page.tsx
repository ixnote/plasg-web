import { Header } from "@/layouts";
import MdaWidget from "@/layouts/MdaWidget/MdaWidget";

export default function Mda() {
  return (
    <main>
      {/* <Header /> */}
      <MdaWidget />
      <div className="p-2 rounded-xl overflow-hidden">{/* <Footer /> */}</div>
    </main>
  );
}
