import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  priority: z.enum(['IA', 'Web', 'Automatisation', 'Système']),
  description: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  proof: z.string().min(1),
  impact: z.string().min(1),
  githubUrl: z.url(),
  demoUrl: z.url().optional(),
  featured: z.boolean().optional(),
});

export const projectsSchema = z.array(projectSchema).min(1);

export const skillGroupSchema = z.object({
  title: z.string().min(1),
  icon: z.custom<(...args: never[]) => unknown>(),
  proof: z.string().min(1),
  skills: z.array(z.string().min(1)).min(1),
});

export const skillGroupsSchema = z.array(skillGroupSchema).min(1);
export const roadmapSchema = z.array(z.string().min(1)).min(1);
