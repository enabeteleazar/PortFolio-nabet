import { githubStats, openSourceRepos } from '../data/github';
import type { Repository, Stat } from '../types/portfolio';

const API_URL = 'https://api.github.com/users/enabeteleazar';
const CACHE_KEY = 'portfolio-github-data';
const CACHE_DURATION = 15 * 60 * 1000;

type GithubRepository = {
  name: string;
  html_url: string;
  language: string | null;
  description: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

export type GithubData = {
  stats: Stat[];
  repositories: Repository[];
  source: 'api' | 'fallback';
};

export const githubFallback: GithubData = {
  stats: githubStats,
  repositories: openSourceRepos,
  source: 'fallback',
};

function readCache(): GithubData | null {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) ?? 'null') as
      | { timestamp: number; data: GithubData }
      | null;
    return cached && Date.now() - cached.timestamp < CACHE_DURATION ? cached.data : null;
  } catch {
    return null;
  }
}

export async function fetchGithubData(): Promise<GithubData> {
  const cached = readCache();
  if (cached) return cached;

  try {
    const [profileResponse, repositoriesResponse] = await Promise.all([
      fetch(API_URL, { headers: { Accept: 'application/vnd.github+json' } }),
      fetch(`${API_URL}/repos?per_page=100&sort=pushed`, { headers: { Accept: 'application/vnd.github+json' } }),
    ]);
    if (!profileResponse.ok || !repositoriesResponse.ok) throw new Error('GitHub API indisponible');

    const profile = (await profileResponse.json()) as { public_repos: number };
    const repositories = (await repositoriesResponse.json()) as GithubRepository[];
    const publicRepositories = repositories.filter(({ fork }) => !fork);
    const stars = publicRepositories.reduce((total, repository) => total + repository.stargazers_count, 0);
    const latestPush = publicRepositories[0]?.pushed_at;

    const data: GithubData = {
      stats: [
        { label: 'Dépôts publics', value: String(profile.public_repos) },
        { label: 'Stars reçues', value: String(stars) },
        { label: 'Activité récente', value: latestPush ? new Intl.DateTimeFormat('fr-FR').format(new Date(latestPush)) : 'Non disponible' },
        { label: 'Source', value: 'GitHub API' },
      ],
      repositories: publicRepositories.slice(0, 6).map((repository) => ({
        name: repository.name,
        meta: [repository.language, `${repository.stargazers_count} ★`, repository.description].filter(Boolean).join(' · '),
        url: repository.html_url,
      })),
      source: 'api',
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
    return data;
  } catch {
    return githubFallback;
  }
}
