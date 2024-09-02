import GovernmentPage from "@/components/governmentPage/page";

export function generateStaticParams() {
  return [
    { government: "governor" },
    { government: "deputy" },
    { government: "secretary" },
  ];
}

export default function Page() {
  return <GovernmentPage />;
}
