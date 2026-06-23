import { ExternalLink, Github as GithubIcon } from 'lucide-react';
import { githubProfile, githubStats, openSourceRepos } from '../../data/github';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';

export function Github() {
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
                <GithubIcon size={26} aria-hidden="true" />
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
                <GithubIcon size={16} aria-hidden="true" />
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
