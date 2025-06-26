'use client';

import { useState } from 'react';
import { VinderAgent } from '@/app/agentConfigs/VinderAgent';
import { ChatBox } from '@/components/ChatBox';

export default function ChatPage() {
  const [agent] = useState(VinderAgent);

  return (
    <div className="h-screen w-full overflow-hidden">
      <ChatBox agent={agent} />
    </div>
  );
}
pushplz//