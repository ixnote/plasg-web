import "../globals.css";
import "@mantine/core/styles.css";
import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
