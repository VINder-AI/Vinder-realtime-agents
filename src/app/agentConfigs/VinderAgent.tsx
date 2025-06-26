'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef } from 'react';

export function VinderAgent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen p-4 bg-black text-white">
      <div className="text-2xl font-bold mb-2 text-lavender">Vinder 🧠</div>
      
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto border border-gray-700 rounded-xl p-4 mb-4"
      >
        {messages.map((m, i) => (
          <div key={i} className="mb-3">
            <div className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <span className={`inline-block p-2 rounded-xl ${m.role === 'user' ? 'bg-lavender text-black' : 'bg-gray-800 text-white'}`}>
                {m.content}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 rounded-lg text-black"
          placeholder="Ask me anything about vehicles..."
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-lavender text-black rounded-lg font-semibold"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}