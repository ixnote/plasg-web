import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Providers from "@/utils/Provider";

import { Header } from "@/layouts";
import Footer from "@/layouts/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import { getTopicTags } from "@/server/actions/tags";

export default async function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getTopicTags();

  // const data = {
  //   resources: result[0],
  //   tags: result[1],
  // };

  return (
    <div className="flex flex-col">
      <Header data={data} />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
