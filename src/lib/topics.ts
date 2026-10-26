export const topicOrder = ['knowledge', 'agent-building'] as const;

export type TopicKey = (typeof topicOrder)[number];

export interface TopicPinned {
  title: string;
  href: string;
  summary: string;
  kicker: string;
}

export interface Topic {
  key: TopicKey;
  label: string;
  href: string;
  intro: string;
  description: string;
  comingNext: readonly string[];
  pinned?: TopicPinned;
}

export const topics: Record<TopicKey, Topic> = {
  knowledge: {
    key: 'knowledge',
    label: 'Knowledge',
    href: '/knowledge/',
    intro:
      "How a software platform is configured for each customer, written so an agent can answer from it and say when it doesn't know. The model is a living document. The posts are the notes around it.",
    description:
      "How a software platform is configured for each customer, written so an agent can answer from it and say when it doesn't know.",
    comingNext: [],
    pinned: {
      title: 'Context Layer Model',
      href: '/knowledge/context-layer-model/',
      summary:
        'A model of how a software platform is configured for each customer, built from exports and documentation, served read-only to AI agents.',
      kicker: 'Living document',
    },
  },
  'agent-building': {
    key: 'agent-building',
    label: 'Agent Building',
    href: '/agent-building/',
    intro:
      'I build agents for my own work, and I write down how they are made: how an agent is defined, what it is allowed to touch, how it remembers, how it decides when to speak up, and how it earns trust. The examples come from one desktop agent I use every day to turn mail, meetings and tasks into decisions.',
    description: 'I build agents for my own work, and I write down how they are made.',
    comingNext: [
      'Memory and the nightly dreaming',
      'Routines and when to kill them',
      'When an email tries to give the agent instructions',
    ],
  },
};

export function getTopic(key: string): Topic | undefined {
  if (key === 'knowledge' || key === 'agent-building') return topics[key];
  return undefined;
}
