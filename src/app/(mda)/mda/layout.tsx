import "../../globals.css";
import "@mantine/core/styles.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Nav from "./nav";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Nav />
      {children}
      <ScrollToTopButton />
    </div>
  );
}
