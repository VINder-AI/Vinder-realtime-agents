'use client';

import { useState } from 'react';

export function VinderAgent() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'system', content: 'You are Vinder, a smart vehicle assistant.' }]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white p-4">
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages.slice(1).map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <p className="inline-block p-2 bg-gray-800 rounded-md">{msg.content}</p>
          </div>
        ))}
        {loading && <p className="text-gray-500 italic">Vinder is thinking...</p>}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-700 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask VINder anything..."
        />
        <button type="submit" className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Send</button>
      </form>
    </div>
  );
}