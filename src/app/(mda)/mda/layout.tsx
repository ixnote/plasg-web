import "../../globals.css";
import "@mantine/core/styles.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Nav from "./nav";
import Footer from "@/layouts/Footer";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
