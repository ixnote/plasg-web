import GovernmentPage from "@/components/governmentPage/page";
import { Suspense } from "react";

export function generateStaticParams() {
  return [
    { slug: "governor" },
    { slug: "deputy" },
    { slug: "secretary" },
  ];
}

export default function Page() {
  return (
    <Suspense>
      <GovernmentPage />;
    </Suspense>
  );
}

