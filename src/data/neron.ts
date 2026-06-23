import { Bot, BrainCircuit, Mic, ServerCog, ShieldCheck, Workflow } from 'lucide-react';
import type { LabeledContent, NeronModule } from '../types/portfolio';

export const neronModules: NeronModule[] = [
  {
    title: 'Core',
    icon: ServerCog,
    text: 'API FastAPI, gateways HTTP/Telegram/WebSocket, routage d’intentions, identité, stockage SQLite et état système.',
  },
  {
    title: 'Goal Engine',
    icon: Workflow,
    text: 'Gestion d’objectifs, planning, exécution de tâches, pont entre goals et runtime, orchestration progressive.',
  },
  {
    title: 'Runtime',
    icon: ShieldCheck,
    text: 'RuntimeGovernor, sandbox, modes normal/prudent/degraded/survival et règles de stabilité avant autonomie.',
  },
  {
    title: 'Agents',
    icon: Bot,
    text: 'Agents spécialisés, agent factory, supervision, mémoire, recherche, Home Assistant, review et automatisations.',
  },
  {
    title: 'LLM',
    icon: BrainCircuit,
    text: 'Microservice LLM FastAPI avec Ollama, Claude, llama.cpp, router, StrategyEngine et modes single/parallel/race.',
  },
  {
    title: 'Interfaces',
    icon: Mic,
    text: 'Clients Next.js, interface vocale HTTPS via Tailscale, STT faster-whisper et TTS Web Speech API.',
  },
];

export const neronRoadmap = [
  'Stabiliser le pipeline Goal → Planner → Agent Creator → Tests → Registry → Runtime.',
  'Renforcer le dashboard de supervision et les vues runtime.',
  'Connecter progressivement des intégrations externes, dont MCP en objectif futur.',
  'Documenter les modules publics avec des schémas et captures produit.',
];

export const neronOverview: LabeledContent[] = [
  { label: 'Objectif', value: 'Assistance continue, supervision, automatisation progressive.' },
  { label: 'Architecture', value: 'Core, Runtime, Goal Engine, LLM service, interfaces, diagnostics.' },
  { label: 'Runtime', value: 'Modes normal, prudent, degraded, survival pour protéger la stabilité.' },
  { label: 'Données', value: 'Mémoire persistante SQLite, état runtime, historiques et configuration YAML.' },
];
