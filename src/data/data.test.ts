import { describe, expect, it } from 'vitest';
import { neronRoadmap } from './neron';
import { projects } from './projects';
import { projectsSchema, roadmapSchema, skillGroupsSchema } from './schemas';
import { skillGroups } from './skills';

describe('portfolio data', () => {
  it('validates every project', () => {
    expect(projectsSchema.safeParse(projects).success).toBe(true);
  });

  it('validates every skill group', () => {
    expect(skillGroupsSchema.safeParse(skillGroups).success).toBe(true);
  });

  it('validates the NéronOS roadmap', () => {
    expect(roadmapSchema.safeParse(neronRoadmap).success).toBe(true);
  });

  it('keeps project identifiers unique', () => {
    const titles = projects.map(({ title }) => title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
