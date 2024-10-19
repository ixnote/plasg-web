import GovernmentPage from "@/components/governmentPage/page";
import { Suspense } from "react";

export function generateStaticParams() {
  return [
    { government: "governor" },
    { government: "deputy" },
    { government: "secretary" },
  ];
}

export default function Page() {
  return (
    <Suspense>
      <GovernmentPage />;
    </Suspense>
  );
}
