import type { Repository, Stat } from '../types/portfolio';

export const githubProfile = 'https://github.com/enabeteleazar';

export const githubStats: Stat[] = [
  { label: 'Dépôts publics', value: '21' },
  { label: 'Domaine dominant', value: 'IA locale' },
  { label: 'NéronOS', value: '728 commits' },
  { label: 'Langages visibles', value: 'Python, TypeScript, Shell' },
];

export const openSourceRepos: Repository[] = [
  { name: 'neronOS', meta: 'Python · assistant IA local · 728 commits', url: 'https://github.com/enabeteleazar/neronOS' },
  { name: 'neron_core', meta: 'Python · API, gateways, runtime, SQLite', url: 'https://github.com/enabeteleazar/neron_core' },
  { name: 'neron_llm', meta: 'Python · FastAPI · Ollama/Claude/llama.cpp', url: 'https://github.com/enabeteleazar/neron_llm' },
  { name: 'neron_vocal', meta: 'TypeScript · Next.js · interface vocale', url: 'https://github.com/enabeteleazar/neron_vocal' },
  { name: 'neronHUB', meta: 'TypeScript · React/Express/PostgreSQL', url: 'https://github.com/enabeteleazar/neronHUB' },
  { name: 'orane_coatch_therapeutique', meta: 'TypeScript · Vite · Postgres · Calendar', url: 'https://github.com/enabeteleazar/orane_coatch_therapeutique' },
];
