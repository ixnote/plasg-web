import News from "@/layouts/News/News";
import React, { Suspense } from "react";

function NewsPage() {
  return (
    <main className="bg-[#F4F4F4]">
      <Suspense>
        <News />
      </Suspense>
    </main>
  );
}

export default NewsPage;
