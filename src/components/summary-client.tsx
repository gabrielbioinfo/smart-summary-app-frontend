"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/config";
import { useState } from "react";

export function SummaryClient() {


  const [inputText, setInputText] = useState("");
  // Always start with the same initial value for SSR and client
  const SUMMARY_PLACEHOLDER = "Your summary will appear here.";
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    setSummary("");
    setLoading(true);
    try {
  const response = await fetch(`${API_URL}/v1/summarize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      if (!response.body) throw new Error("No response body");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = decoder.decode(value);
          console.log('Received chunk:', chunk);
          // Update summary incrementally for each chunk
          setSummary((prev: string) => prev + chunk);
        }
      }
    } catch {
      setSummary("Error fetching summary.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg p-6">
      <div className="flex-1 flex flex-col">
        <label htmlFor="inputText" className="mb-2 font-semibold">Enter your text</label>
        <Textarea
          id="inputText"
          className="h-48 resize-none mb-4"
          placeholder="Paste or type your content here..."
          value={inputText}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: { target: { value: any; }; }) => setInputText(e.target.value)}
        />
        <Button type="button" className="self-end" onClick={handleSummarize} disabled={loading || !inputText}>
          {loading ? "Summarizing..." : "Summarize"}
        </Button>
      </div>
      <div className="flex-1 flex flex-col">
        <label className="mb-2 font-semibold">Summary</label>
        <div className="w-full h-48 p-3 border border-gray-300 rounded bg-gray-100 text-gray-700 overflow-y-auto">
          <p>{summary ? summary : SUMMARY_PLACEHOLDER}</p>
        </div>
      </div>
    </div>
  );
}
