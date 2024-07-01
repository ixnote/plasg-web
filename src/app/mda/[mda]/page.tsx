import { Header } from "@/layouts";
import ViewMdaWidget from "@/layouts/MdaWidget/ViewMdaWidget";

export default function Mda() {
  return (
    <main>
      <Header />
      <ViewMdaWidget />
      <p className="text-3xl font-bold min-h-screen p-4">
        Barr. Caleb Mutfwang
      </p>
    </main>
  );
}
