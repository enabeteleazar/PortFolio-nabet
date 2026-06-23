import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  proof: string;
  skills: string[];
};

export type Project = {
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

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type NeronModule = {
  title: string;
  icon: LucideIcon;
  text: string;
};

export type ContentCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type LabeledContent = {
  label: string;
  value: string;
};

export type LinkItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export type Repository = {
  name: string;
  meta: string;
  url: string;
};
