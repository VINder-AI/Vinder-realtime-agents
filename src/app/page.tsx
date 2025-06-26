'use client';

import { useState } from 'react';

export function VinderAgent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [zip, setZip] = useState('');
  const [persona, setPersona] = useState('Buyer'); // or 'Sales' or 'OEM'

  const sendPrompt = async () => {
    if (!input.trim() || !zip.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          zip,
          persona,
        }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse('Error talking to Vinder.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Hello Vinder</h1>
      <input
        className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Enter ZIP code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <select
        className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded"
        value={persona}
        onChange={(e) => setPersona(e.target.value)}
      >
        <option value="Buyer">Buyer</option>
        <option value="Sales">Sales</option>
        <option value="OEM">OEM</option>
      </select>
      <textarea
        className="w-full p-2 mb-2 bg-gray-800 border border-gray-700 rounded"
        placeholder="Talk to Vinder..."
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="w-full p-2 bg-purple-600 hover:bg-purple-700 rounded"
        onClick={sendPrompt}
        disabled={loading}
      >
        {loading ? 'Thinking…' : 'Ask Vinder'}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-900 border border-gray-800 rounded">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}