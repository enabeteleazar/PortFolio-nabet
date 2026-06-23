import type { Project } from '../types/portfolio';
import { projectsSchema } from './schemas';

export const projects: Project[] = [
  {
    title: 'NéronOS',
    category: 'Assistant personnel intelligent',
    priority: 'IA',
    description:
      'Système cognitif local orienté orchestration d’agents, mémoire persistante, supervision runtime, gouvernance cognitive et assistance continue.',
    stack: ['Python', 'FastAPI', 'Ollama', 'SQLite', 'Shell', 'systemd', 'Home Assistant', 'Telegram'],
    proof: 'Dépôt public Python majoritaire avec 728 commits, dossiers core/runtime/agents/memory/deploy/tests et documentation NERON.md.',
    impact: 'Montre une capacité à concevoir un produit logiciel modulaire, supervisé, local-first et orienté autonomie progressive.',
    githubUrl: 'https://github.com/enabeteleazar/neronOS',
    demoUrl: 'https://neron-ai.vercel.app',
    featured: true,
  },
  {
    title: 'neron_llm',
    category: 'Microservice LLM',
    priority: 'IA',
    description:
      'API FastAPI unifiant plusieurs providers LLM derrière un routeur et un moteur de stratégie capable d’exécuter en single, parallel ou race.',
    stack: ['Python', 'FastAPI', 'Pydantic', 'Ollama', 'Claude', 'llama.cpp', 'httpx', 'pytest'],
    proof: 'README détaillant providers, StrategyEngine, CLI Typer, tests et endpoint `/llm/generate`.',
    impact: 'Démontre une approche back-end IA propre : abstraction de providers, stratégies d’exécution et tests.',
    githubUrl: 'https://github.com/enabeteleazar/neron_llm',
  },
  {
    title: 'neron_vocal',
    category: 'Interface vocale',
    priority: 'IA',
    description:
      'Client vocal Next.js relié à neron-core pour capturer l’audio, déclencher le STT, afficher la réponse et lancer la synthèse vocale navigateur.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailscale', 'Web Speech API'],
    proof: 'README avec pipeline vocal, routes API, serveur HTTPS custom, certificats Tailscale et configuration YAML.',
    impact: 'Relie UI moderne, voix, réseau privé et services IA locaux dans une expérience utilisable.',
    githubUrl: 'https://github.com/enabeteleazar/neron_vocal',
  },
  {
    title: 'neron_doctor',
    category: 'Diagnostic et autocorrection',
    priority: 'Système',
    description:
      'Service FastAPI de diagnostic pour inspecter Core/LLM, tester des endpoints, lire systemd/journalctl et appliquer des redémarrages simples.',
    stack: ['Python', 'FastAPI', 'systemd', 'journalctl', 'psutil', 'YAML'],
    proof: 'README listant les routes `/diagnose`, `/monitor/system`, `/analyze`, `/fixes` et le pipeline de diagnostic.',
    impact: 'Apporte une couche de fiabilité opérationnelle à l’écosystème Néron.',
    githubUrl: 'https://github.com/enabeteleazar/neron_doctor',
  },
  {
    title: 'neronHUB',
    category: 'Dashboard Full Stack',
    priority: 'Web',
    description:
      'Interface type HUD avec serveur Express, React, Vite, Drizzle/PostgreSQL et intégration OpenAI SDK.',
    stack: ['React', 'TypeScript', 'Express', 'Vite', 'Drizzle', 'PostgreSQL', 'OpenAI SDK', 'Docker'],
    proof: 'Dépôt avec `server/`, `client/`, `shared/`, `docker-compose.yml`, `drizzle.config.ts` et package full stack.',
    impact: 'Prouve la capacité à structurer une application full stack avec schéma partagé, API et interface riche.',
    githubUrl: 'https://github.com/enabeteleazar/neronHUB',
    demoUrl: 'https://replit.com/@EleazarNABET/Jarvis-HUD',
  },
  {
    title: 'orane_coatch_therapeutique',
    category: 'Application métier',
    priority: 'Web',
    description:
      'Application de coaching avec site public, dashboard, réservation, créneaux stockés en PostgreSQL/Neon et synchronisation Google Calendar.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'PostgreSQL', 'Google Calendar API', 'Resend'],
    proof: 'README décrivant Formspree, WhatsApp, Neon/Postgres, compte de service Google Calendar et routes admin.',
    impact: 'Cas métier complet avec front, API Vercel, base de données, calendrier et gestion admin.',
    githubUrl: 'https://github.com/enabeteleazar/orane_coatch_therapeutique',
    demoUrl: 'https://replit.com/@EleazarNABET/Modern-Showcase',
  },
  {
    title: 'Patiss-Orane',
    category: 'Site web TypeScript',
    priority: 'Web',
    description:
      'Projet de site vitrine modernisé avec artefacts Vite/React et déploiement Vercel.',
    stack: ['TypeScript', 'React', 'Vite', 'Vercel'],
    proof: 'Dépôt public TypeScript avec démo `patisserie-orane.vercel.app` et modules applicatifs Vite.',
    impact: 'Montre la capacité à produire et publier une expérience web orientée marque.',
    githubUrl: 'https://github.com/enabeteleazar/Patiss-Orane',
    demoUrl: 'https://patisserie-orane.vercel.app',
  },
  {
    title: 'Lowly.eu',
    category: 'Site statique maintenable',
    priority: 'Web',
    description:
      'Site statique simplifié pour publier actualités, projets et carnets de bord, sans PHP ni dépendance Node obligatoire.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    proof: 'README expliquant la suppression de PHP/base de données/scripts tiers et les redirections Vercel.',
    impact: 'Illustre la modernisation pragmatique d’un site vers une architecture statique simple.',
    githubUrl: 'https://github.com/enabeteleazar/Lowly.eu',
    demoUrl: 'https://lowly-eu.vercel.app',
  },
  {
    title: 'Gestion-Batterie-iOS',
    category: 'Automatisation personnelle',
    priority: 'Automatisation',
    description:
      'Scripts JavaScript liés à l’état de batterie iOS, avec variantes pour action et Siri.',
    stack: ['JavaScript', 'iOS', 'Siri Shortcuts'],
    proof: 'Dépôt public contenant `état Batterie (avec Siri).js` et `état Batterie (avec action).js`.',
    impact: 'Montre une pratique d’automatisation légère autour d’usages personnels concrets.',
    githubUrl: 'https://github.com/enabeteleazar/Gestion-Batterie-iOS',
  },
];

projectsSchema.parse(projects);
