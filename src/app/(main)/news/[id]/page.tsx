import NewsResult from "@/layouts/NewsResult/NewsResult";
import { Suspense } from "react";

export default function NewsDetails() {
  return (
    <main>
      <Suspense>
        <NewsResult />
      </Suspense>
    </main>
  );
}

