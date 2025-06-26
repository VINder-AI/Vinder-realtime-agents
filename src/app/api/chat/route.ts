// src/app/api/chat/route.ts

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const prompt = body.prompt;

  const apiKey = process.env.OPENAI_API_KEY;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  return new Response(JSON.stringify({ reply: data.choices[0].message.content }));
}