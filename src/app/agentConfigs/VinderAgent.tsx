'use client';

import { useState } from 'react';

export function VinderAgent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse('Error talking to Vinder. Try again soon.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Hello, I’m Vinder 🤖</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything about your next car..."
        className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
        rows={4}
      />
      <button
        onClick={sendPrompt}
        disabled={loading}
        className="mt-2 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700"
      >
        {loading ? 'Thinking...' : 'Ask Vinder'}
      </button>
      {response && (
        <div className="mt-4 bg-gray-900 p-4 rounded-md border border-gray-700">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}