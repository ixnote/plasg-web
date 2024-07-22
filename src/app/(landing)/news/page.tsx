import News from "@/layouts/News/News";
import React from "react";

function NewsPage() {
  return (
    <main className="bg-[#F4F4F4]">
      {/* <Header /> */}
      <News />
      <div className="p-2 rounded-xl overflow-hidden flex">
        <span>{/* <Footer /> */}</span>
      </div>
    </main>
  );
}

export default NewsPage;
