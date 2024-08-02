import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Providers from "@/utils/Provider";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "PLSG",
  description: "Official site for Plateau State Government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} scrollbar-hide`}
      lang="en"
    >
      <body>
        <Providers>
          <MantineProvider>
            {children}
            <ScrollToTopButton />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
