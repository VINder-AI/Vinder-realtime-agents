export const agentList = [
  { key: 'chatSupervisor', name: 'Supervisor' },
  { key: 'simpleHandoff', name: 'Handoff' },
  { key: 'vinder', name: 'Vinder 🧠' }, // 👈 Your agent
];

export type AgentKey = (typeof agentList)[number]['key'];