// app/page.tsx
import { VinderAgent } from './agentConfigs/VinderAgent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <VinderAgent />
    </main>
  );
}