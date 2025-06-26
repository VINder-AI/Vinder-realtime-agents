'use client';

import { VinderAgent } from '@/agents/VinderAgent';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Vinder 🧠</h1>
      <VinderAgent />
    </main>
  );
}