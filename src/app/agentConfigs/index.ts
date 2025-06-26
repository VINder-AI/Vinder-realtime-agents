import { VinderAgent } from './VinderAgent';

export const agentList = [
  { key: 'chatSupervisor', name: 'Supervisor' },
  { key: 'simpleHandoff', name: 'Handoff' },
  { key: 'vinder', name: 'Vinder 🧠' }, // 👈 Your agent
];

export const agentMap = {
  chatSupervisor: () => import('./chatSupervisor').then(m => m.default),
  simpleHandoff: () => import('./simpleHandoff').then(m => m.default),
  vinder: async () => VinderAgent, // 👈 Add VinderAgent export
};

export type agentKey = (typeof agentList)[number]['key'];