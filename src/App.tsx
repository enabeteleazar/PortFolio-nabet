import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Github,
  GitPullRequest,
  Globe2,
  Layers3,
  Mail,
  Menu,
  Mic,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { FormEvent, ReactNode, useMemo, useState } from 'react';
import avatarUrl from '../images/avatar_icon.png';

type NavItem = {
  href: string;
  label: string;
};

type Stat = {
  label: string;
  value: string;
};

type SkillGroup = {
  title: string;
  icon: ReactNode;
  proof: string;
  skills: string[];
};

type Project = {
  title: string;
  category: string;
  priority: 'IA' | 'Web' | 'Automatisation' | 'Système';
  description: string;
  stack: string[];
  proof: string;
  impact: string;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const githubProfile = 'https://github.com/enabeteleazar';
const contactEmail = 'contact@portfolio.fr.nf';

const navItems: NavItem[] = [
  { href: '#neronos', label: 'NéronOS' },
  { href: '#projects', label: 'Projets' },
  { href: '#stack', label: 'Stack' },
  { href: '#github', label: 'GitHub' },
  { href: '#journey', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
];

const githubStats: Stat[] = [
  { label: 'Dépôts publics', value: '21' },
  { label: 'Domaine dominant', value: 'IA locale' },
  { label: 'NéronOS', value: '728 commits' },
  { label: 'Langages visibles', value: 'Python, TypeScript, Shell' },
];

const heroTags = [
  'Développeur Full Stack',
  'Créateur de NéronOS',
  'Agents IA',
  'Linux',
  'Automatisation',
  'Auto-hébergement',
];

const neronModules = [
  {
    title: 'Core',
    icon: <ServerCog aria-hidden="true" />,
    text: 'API FastAPI, gateways HTTP/Telegram/WebSocket, routage d’intentions, identité, stockage SQLite et état système.',
  },
  {
    title: 'Goal Engine',
    icon: <Workflow aria-hidden="true" />,
    text: 'Gestion d’objectifs, planning, exécution de tâches, pont entre goals et runtime, orchestration progressive.',
  },
  {
    title: 'Runtime',
    icon: <ShieldCheck aria-hidden="true" />,
    text: 'RuntimeGovernor, sandbox, modes normal/prudent/degraded/survival et règles de stabilité avant autonomie.',
  },
  {
    title: 'Agents',
    icon: <Bot aria-hidden="true" />,
    text: 'Agents spécialisés, agent factory, supervision, mémoire, recherche, Home Assistant, review et automatisations.',
  },
  {
    title: 'LLM',
    icon: <BrainCircuit aria-hidden="true" />,
    text: 'Microservice LLM FastAPI avec Ollama, Claude, llama.cpp, router, StrategyEngine et modes single/parallel/race.',
  },
  {
    title: 'Interfaces',
    icon: <Mic aria-hidden="true" />,
    text: 'Clients Next.js, interface vocale HTTPS via Tailscale, STT faster-whisper et TTS Web Speech API.',
  },
];

const neronRoadmap = [
  'Stabiliser le pipeline Goal → Planner → Agent Creator → Tests → Registry → Runtime.',
  'Renforcer le dashboard de supervision et les vues runtime.',
  'Connecter progressivement des intégrations externes, dont MCP en objectif futur.',
  'Documenter les modules publics avec des schémas et captures produit.',
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    icon: <Code2 aria-hidden="true" />,
    proof: 'Portfolio, neronOS_client, neron_vocal, neronHUB, Orane Coaching et projets Vite/React.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind'],
  },
  {
    title: 'Back-End',
    icon: <Database aria-hidden="true" />,
    proof: 'Néron services, neronHUB, Orane Coaching et modules API.',
    skills: ['Node.js', 'Express', 'FastAPI', 'API REST', 'SQLite', 'PostgreSQL', 'Drizzle', 'Auth par clé API'],
  },
  {
    title: 'DevOps & Systèmes',
    icon: <Terminal aria-hidden="true" />,
    proof: 'NéronOS, scripts Shell, services systemd, Docker/Tailscale, déploiements Vercel.',
    skills: ['Linux', 'Shell', 'systemd', 'Git', 'GitHub', 'Vercel', 'Docker', 'Tailscale', 'Auto-hébergement'],
  },
  {
    title: 'Intelligence Artificielle',
    icon: <BrainCircuit aria-hidden="true" />,
    proof: 'neronOS, neron_llm, neron_vocal, neron_doctor et agents Néron.',
    skills: ['LLM', 'Ollama', 'Claude provider', 'llama.cpp', 'Agents IA', 'STT faster-whisper', 'TTS', 'NéronOS'],
  },
  {
    title: 'Automatisation',
    icon: <Zap aria-hidden="true" />,
    proof: 'Home Assistant dans NéronOS, Telegram/Twilio, Google Calendar, scripts Batterie iOS/Siri.',
    skills: ['Home Assistant', 'Telegram Bot', 'Twilio', 'Google Calendar API', 'Siri Shortcuts', 'Workflows'],
  },
];

const projects: Project[] = [
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

const techStack = [
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

const openSourceRepos = [
  { name: 'neronOS', meta: 'Python · assistant IA local · 728 commits', url: 'https://github.com/enabeteleazar/neronOS' },
  { name: 'neron_core', meta: 'Python · API, gateways, runtime, SQLite', url: 'https://github.com/enabeteleazar/neron_core' },
  { name: 'neron_llm', meta: 'Python · FastAPI · Ollama/Claude/llama.cpp', url: 'https://github.com/enabeteleazar/neron_llm' },
  { name: 'neron_vocal', meta: 'TypeScript · Next.js · interface vocale', url: 'https://github.com/enabeteleazar/neron_vocal' },
  { name: 'neronHUB', meta: 'TypeScript · React/Express/PostgreSQL', url: 'https://github.com/enabeteleazar/neronHUB' },
  { name: 'orane_coatch_therapeutique', meta: 'TypeScript · Vite · Postgres · Calendar', url: 'https://github.com/enabeteleazar/orane_coatch_therapeutique' },
];

const timeline: TimelineItem[] = [
  {
    period: '2026',
    title: 'Construction de NéronOS comme produit logiciel',
    description:
      'Structuration d’un assistant personnel intelligent : core, runtime governor, agents, goal engine, LLM service, interface vocale, diagnostic et dashboard.',
  },
  {
    period: '2026',
    title: 'Applications web modernes et intégrations métier',
    description:
      'Projets React/TypeScript/Vite/Next.js avec Vercel, PostgreSQL, Google Calendar, APIs et interfaces administrables.',
  },
  {
    period: '2025-2026',
    title: 'Automatisation, Linux et auto-hébergement',
    description:
      'Scripts Shell, services systemd, Tailscale, Home Assistant, assistants locaux et workflows personnels autour de Linux.',
  },
  {
    period: 'Base initiale',
    title: 'Fondations front-end et projets web publiés',
    description:
      'Sites responsive, JavaScript, HTML/CSS, évaluations STUDI, portfolio et premières mises en production Netlify/Vercel.',
  },
];

function AppLink({
  href,
  children,
  variant = 'primary',
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
}) {
  const isExternal = href.startsWith('http');
  const className = {
    primary:
      'bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:outline-cyan-200',
    secondary:
      'border border-violet-300/45 bg-violet-300/10 text-violet-50 hover:bg-violet-300/20 focus-visible:outline-violet-200',
    ghost:
      'border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 focus-visible:outline-white',
  }[variant];

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`}
      href={href}
      download={download}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">{children}</p>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white" href="#top">
          <span className="grid size-9 place-items-center rounded-md bg-cyan-300 text-sm text-slate-950">EN</span>
          <span className="hidden sm:inline">Eléazar Nabet</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <AppLink href={githubProfile} variant="secondary">
            <Github size={16} aria-hidden="true" />
            GitHub
          </AppLink>
        </div>

        <button
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 lg:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="rounded-xl border border-cyan-300/20 bg-slate-950/90 p-4 shadow-soft">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <img
            className="size-14 rounded-md border border-white/10 object-cover"
            src={avatarUrl}
            alt="Avatar d'Eléazar Nabet"
          />
          <div>
            <p className="font-bold text-white">NéronOS Control</p>
            <p className="text-sm text-zinc-400">Runtime local · agents · LLM</p>
          </div>
        </div>
        <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
          online
        </span>
      </div>

      <div className="mt-4 grid gap-3">
        {[
          ['Observe', 'Inputs web, voix, services, événements'],
          ['Analyze', 'Intent router, contexte, mémoire SQLite'],
          ['Plan', 'GoalSystem, Planner, agents spécialisés'],
          ['Execute', 'RuntimeGovernor, sandbox, vérification'],
        ].map(([step, text], index) => (
          <div className="grid grid-cols-[34px_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3" key={step}>
            <span className="grid size-8 place-items-center rounded-md bg-violet-300/15 text-sm font-bold text-violet-200">
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-white">{step}</p>
              <p className="text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="site-grid relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-200">
            <Sparkles size={16} aria-hidden="true" />
            Développeur Full Stack · Créateur de NéronOS
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Je conçois des applications web, des agents IA et des systèmes intelligents.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Je développe des solutions modernes capables d’automatiser des tâches complexes, de connecter des services
            et de fonctionner dans des environnements Linux auto-hébergés.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AppLink href="#projects">
              Voir mes projets
              <ArrowRight size={17} aria-hidden="true" />
            </AppLink>
            <AppLink href={githubProfile} variant="secondary">
              <Github size={17} aria-hidden="true" />
              GitHub
            </AppLink>
            <AppLink href="#contact" variant="ghost">
              <Mail size={17} aria-hidden="true" />
              Contact
            </AppLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Domaines d'expertise">
            {heroTags.map((item) => (
              <li className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-zinc-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="À propos" title="Un profil Full Stack construit autour du web, de l’IA et des systèmes.">
          Mon parcours part du développement web et s’étend aujourd’hui vers l’architecture logicielle, les agents IA,
          Linux, l’automatisation et les outils auto-hébergés. NéronOS est le fil conducteur de cette évolution.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: <Layers3 aria-hidden="true" />,
              title: 'Créer des produits logiciels',
              text: 'Je ne me limite pas à des pages vitrines : je structure des applications avec front-end, API, données, auth, déploiement et maintenance.',
            },
            {
              icon: <Network aria-hidden="true" />,
              title: 'Relier services et systèmes',
              text: 'NéronOS connecte LLM, agents, mémoire, interfaces web, services systemd, Home Assistant, Telegram et outils locaux.',
            },
            {
              icon: <Activity aria-hidden="true" />,
              title: 'Construire avec supervision',
              text: 'Je privilégie la stabilité, la gouvernance runtime, le diagnostic et la capacité à observer le système avant de pousser l’autonomie.',
            },
          ].map((item) => (
            <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6" key={item.title}>
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeronOSSection() {
  return (
    <section id="neronos" className="border-b border-white/10 bg-[#070b16] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projet phare" title="NéronOS, un assistant personnel intelligent local-first.">
          NéronOS est présenté comme un produit logiciel en développement : un système inspiré du concept JARVIS,
          capable d’orchestrer des services, agents IA, outils externes et workflows locaux avec une gouvernance runtime.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-xl border border-cyan-300/25 bg-cyan-300/8 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Vision produit</p>
                <h3 className="mt-3 text-3xl font-black text-white">Un OS personnel piloté par l’IA.</h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-md border border-cyan-300/30 px-3 py-1.5 text-xs font-bold text-cyan-200">
                <Rocket size={14} aria-hidden="true" />
                En développement
              </span>
            </div>

            <p className="mt-5 leading-8 text-zinc-300">
              Le cœur opérationnel documenté repose sur le pipeline Goal → Planner → Agent Creator → Codex → Tests →
              Validation → Registry → Runtime. Le LLM reste un composant interchangeable : l’identité du système est
              portée par l’orchestration, la mémoire, la gouvernance et les agents permanents.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Objectif', 'Assistance continue, supervision, automatisation progressive.'],
                ['Architecture', 'Core, Runtime, Goal Engine, LLM service, interfaces, diagnostics.'],
                ['Runtime', 'Modes normal, prudent, degraded, survival pour protéger la stabilité.'],
                ['Données', 'Mémoire persistante SQLite, état runtime, historiques et configuration YAML.'],
              ].map(([label, value]) => (
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink href="https://github.com/enabeteleazar/neronOS">
                <Github size={16} aria-hidden="true" />
                Repository
              </AppLink>
              <AppLink href="https://neron-ai.vercel.app" variant="secondary">
                <ExternalLink size={16} aria-hidden="true" />
                Démo
              </AppLink>
            </div>
          </article>

          <aside className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">Roadmap visible</p>
            <ul className="mt-5 grid gap-4">
              {neronRoadmap.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-zinc-300" key={item}>
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-slate-950/70 p-4">
              <p className="font-bold text-white">Captures</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Aucune capture produit locale exploitable n’est présente dans ce portfolio. Les interfaces publiques
                disponibles sont donc liées via les démos GitHub/Vercel/Replit.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {neronModules.map((module) => (
            <article className="rounded-xl border border-white/10 bg-slate-950/70 p-5" key={module.title}>
              <div className="mb-4 grid size-11 place-items-center rounded-md bg-violet-300/12 text-violet-200">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{module.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{module.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="stack" className="border-b border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Compétences vérifiées" title="Une stack réelle, issue du code et des dépôts publics.">
          Les technologies affichées ici sont présentes dans les fichiers locaux ou dans les dépôts GitHub publics
          analysés. Les éléments non prouvés ne sont pas présentés comme acquis.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6" key={group.title}>
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{group.proof}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm font-medium text-zinc-200" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#070b16] p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Stack technique</p>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li className="rounded-md border border-cyan-300/15 bg-cyan-300/8 px-3 py-2 text-sm font-semibold text-cyan-50" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-[#070b16] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Études de cas" title="Projets classés par intérêt professionnel.">
          Priorité aux projets IA, puis aux applications web, automatisations et systèmes Linux. Chaque carte s’appuie
          sur un dépôt public ou un contenu existant du portfolio.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className={`rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-soft ${
                project.featured
                  ? 'border-cyan-300/35 bg-cyan-300/10'
                  : 'border-white/10 bg-white/[0.04]'
              }`}
              key={project.title}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-md border border-violet-300/30 px-3 py-1.5 text-xs font-bold text-violet-200">
                  {project.priority}
                </span>
              </div>

              <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-white">Preuve analysée</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{project.proof}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Compétence démontrée</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{project.impact}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <li className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-200" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <AppLink href={project.githubUrl} variant="secondary">
                  <Github size={16} aria-hidden="true" />
                  Code
                </AppLink>
                {project.demoUrl && (
                  <AppLink href={project.demoUrl} variant="ghost">
                    <ExternalLink size={16} aria-hidden="true" />
                    Démo
                  </AppLink>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section id="github" className="border-b border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="GitHub & Open Source" title="Un profil public orienté IA, web moderne et systèmes.">
          Les dépôts publics montrent une progression nette vers des produits logiciels plus ambitieux : assistant IA,
          runtime, services, dashboards, interfaces vocales et applications métier.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-md bg-cyan-300 text-slate-950">
                <Github size={26} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">enabeteleazar</h3>
                <p className="text-sm text-zinc-400">Profil public GitHub</p>
              </div>
            </div>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {githubStats.map((stat) => (
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={stat.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">{stat.label}</dt>
                  <dd className="mt-2 font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <AppLink href={githubProfile}>
                <Github size={16} aria-hidden="true" />
                Voir mon GitHub
              </AppLink>
            </div>
          </div>

          <div className="grid gap-3">
            {openSourceRepos.map((repo) => (
              <a
                className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/35 hover:bg-cyan-300/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
                href={repo.url}
                key={repo.name}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <span className="block font-bold text-white">{repo.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-400">{repo.meta}</span>
                </span>
                <ExternalLink className="size-5 shrink-0 text-zinc-500 transition group-hover:text-cyan-200" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="border-b border-white/10 bg-[#070b16] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Parcours" title="Une trajectoire du front-end vers l’architecture de systèmes IA.">
          Le positionnement reste crédible : des fondations web, puis une montée en complexité vers les APIs, les
          services, l’observabilité, les agents et l’automatisation locale.
        </SectionHeading>

        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <article className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[180px_1fr]" key={item.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="font-semibold text-cyan-200">{item.period}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const subject = 'Contact depuis le portfolio';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mailtoHref = useMemo(() => {
    const body = [
      `Nom : ${formState.name || ''}`,
      `Email : ${formState.email || ''}`,
      '',
      formState.message || '',
    ].join('\n');

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formState]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Échanger autour d’une application, d’un agent IA ou d’un système local.">
            Disponible pour discuter architecture, interfaces web, automatisation, IA locale, outils auto-hébergés ou
            évolution de NéronOS.
          </SectionHeading>

          <div className="grid gap-3">
            {[
              { icon: <Mail aria-hidden="true" />, label: contactEmail, href: `mailto:${contactEmail}` },
              { icon: <Github aria-hidden="true" />, label: 'github.com/enabeteleazar', href: githubProfile },
              { icon: <Globe2 aria-hidden="true" />, label: 'Portfolio compatible Vercel', href: '#top' },
            ].map((item) => (
              <a
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/10"
                href={item.href}
                key={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="grid size-10 place-items-center rounded-md bg-white/10 text-cyan-200">{item.icon}</span>
                <span className="text-sm font-medium text-zinc-200">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Nom
              <input
                className="min-h-12 rounded-md border border-white/10 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Votre nom"
                required
                value={formState.name}
                onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Email
              <input
                className="min-h-12 rounded-md border border-white/10 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="votre@email.com"
                required
                value={formState.email}
                onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Message
              <textarea
                className="min-h-40 resize-y rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="message"
                placeholder="Bonjour, je vous contacte pour..."
                required
                value={formState.message}
                onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
              />
            </label>

            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              type="submit"
            >
              Envoyer le message
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040711] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eléazar Nabet. Développeur Full Stack · Créateur de NéronOS.</p>
        <p className="inline-flex items-center gap-2">
          <GitPullRequest size={16} aria-hidden="true" />
          Portfolio React, TypeScript, Vite, Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
        href="#about"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <NeronOSSection />
        <Skills />
        <Projects />
        <GitHubSection />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
