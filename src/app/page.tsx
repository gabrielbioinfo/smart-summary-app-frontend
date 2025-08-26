import { SummaryClient } from "@/components/summary-client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Smart Summary App</h1>
      <SummaryClient />
    </div>
  );
}
