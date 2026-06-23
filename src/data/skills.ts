import { BrainCircuit, Code2, Database, Terminal, Zap } from 'lucide-react';
import type { SkillGroup } from '../types/portfolio';
import { skillGroupsSchema } from './schemas';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    icon: Code2,
    proof: 'Portfolio, neronOS_client, neron_vocal, neronHUB, Orane Coaching et projets Vite/React.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind'],
  },
  {
    title: 'Back-End',
    icon: Database,
    proof: 'Néron services, neronHUB, Orane Coaching et modules API.',
    skills: ['Node.js', 'Express', 'FastAPI', 'API REST', 'SQLite', 'PostgreSQL', 'Drizzle', 'Auth par clé API'],
  },
  {
    title: 'DevOps & Systèmes',
    icon: Terminal,
    proof: 'NéronOS, scripts Shell, services systemd, Docker/Tailscale, déploiements Vercel.',
    skills: ['Linux', 'Shell', 'systemd', 'Git', 'GitHub', 'Vercel', 'Docker', 'Tailscale', 'Auto-hébergement'],
  },
  {
    title: 'Intelligence Artificielle',
    icon: BrainCircuit,
    proof: 'neronOS, neron_llm, neron_vocal, neron_doctor et agents Néron.',
    skills: ['LLM', 'Ollama', 'Claude provider', 'llama.cpp', 'Agents IA', 'STT faster-whisper', 'TTS', 'NéronOS'],
  },
  {
    title: 'Automatisation',
    icon: Zap,
    proof: 'Home Assistant dans NéronOS, Telegram/Twilio, Google Calendar, scripts Batterie iOS/Siri.',
    skills: ['Home Assistant', 'Telegram Bot', 'Twilio', 'Google Calendar API', 'Siri Shortcuts', 'Workflows'],
  },
];

skillGroupsSchema.parse(skillGroups);

export const techStack = [
  'React',
  'TypeScript',
  'Next.js',
  'Vite',
  'Tailwind',
  'Node.js',
  'Express',
  'Python',
  'FastAPI',
  'SQLite',
  'PostgreSQL',
  'Drizzle',
  'Ollama',
  'Claude',
  'OpenAI SDK',
  'Linux',
  'systemd',
  'Docker',
  'Tailscale',
  'Vercel',
  'GitHub',
  'Home Assistant',
];
