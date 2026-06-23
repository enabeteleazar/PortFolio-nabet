import { Activity, Github, Globe2, Layers3, Mail, Network } from 'lucide-react';
import type { ContentCard, LabeledContent, LinkItem, NavItem } from '../types/portfolio';
import { githubProfile } from './github';

export const contactEmail = 'contact@portfolio.fr.nf';

export const navItems: NavItem[] = [
  { href: '#neronos', label: 'NéronOS' },
  { href: '#projects', label: 'Projets' },
  { href: '#stack', label: 'Stack' },
  { href: '#github', label: 'GitHub' },
  { href: '#journey', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export const heroTags = [
  'Développeur Full Stack',
  'Créateur de NéronOS',
  'Agents IA',
  'Linux',
  'Automatisation',
  'Auto-hébergement',
];

export const heroSteps: LabeledContent[] = [
  { label: 'Observe', value: 'Inputs web, voix, services, événements' },
  { label: 'Analyze', value: 'Intent router, contexte, mémoire SQLite' },
  { label: 'Plan', value: 'GoalSystem, Planner, agents spécialisés' },
  { label: 'Execute', value: 'RuntimeGovernor, sandbox, vérification' },
];

export const aboutCards: ContentCard[] = [
  {
    icon: Layers3,
    title: 'Créer des produits logiciels',
    text: 'Je ne me limite pas à des pages vitrines : je structure des applications avec front-end, API, données, auth, déploiement et maintenance.',
  },
  {
    icon: Network,
    title: 'Relier services et systèmes',
    text: 'NéronOS connecte LLM, agents, mémoire, interfaces web, services systemd, Home Assistant, Telegram et outils locaux.',
  },
  {
    icon: Activity,
    title: 'Construire avec supervision',
    text: 'Je privilégie la stabilité, la gouvernance runtime, le diagnostic et la capacité à observer le système avant de pousser l’autonomie.',
  },
];

export const contactLinks: LinkItem[] = [
  { icon: Mail, label: contactEmail, href: `mailto:${contactEmail}` },
  { icon: Github, label: 'github.com/enabeteleazar', href: githubProfile },
  { icon: Globe2, label: 'Portfolio compatible Vercel', href: '#top' },
];
