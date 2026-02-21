"use client";

import { useState } from "react";
import { joinWaitlist } from "./actions";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await joinWaitlist(email);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-2 py-4">
        <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] text-sm">
          ✓
        </div>
        <p className="text-white/70 text-sm">You&apos;re on the list. We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00d4ff]/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold text-sm rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "Joining..." : "Join waitlist"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-xs text-center sm:col-span-2 w-full">{errorMsg}</p>
      )}
    </form>
  );
}
