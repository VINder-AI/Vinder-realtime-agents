'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

export function VinderAgent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col h-screen bg-black text-white px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-[#A166FF]">Vinder AI Assistant</h1>

      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[80%] ${
              m.role === 'user'
                ? 'bg-[#222] self-end text-right'
                : 'bg-[#A166FF] text-black self-start'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
          className="flex-1 bg-[#1a1a1a] text-white border border-[#333] rounded-xl px-4 py-3 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="ml-2 px-4 py-3 bg-[#A166FF] text-black font-semibold rounded-xl"
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
}