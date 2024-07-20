import { Header } from "@/layouts";
import Legislative from "@/layouts/Legislative/Legislative";
import Footer from "@/layouts/Footer";

export default function LegislativePage() {
  return (
    <main>
      <Header />
      <Legislative />
      <p className="text-3xl font-bold min-h-screen p-4">
        Barr. Caleb Mutfwang
      </p>
      <Footer />
    </main>
  );
}
