import { CheckCircle2, ExternalLink, Github, Rocket } from 'lucide-react';
import { neronModules, neronOverview, neronRoadmap } from '../../data/neron';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';

export function NeronOS() {
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
              {neronOverview.map((item) => (
                <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4" key={item.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.value}</p>
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
          {neronModules.map((module) => {
            const Icon = module.icon;

            return (
              <article className="rounded-xl border border-white/10 bg-slate-950/70 p-5" key={module.title}>
                <div className="mb-4 grid size-11 place-items-center rounded-md bg-violet-300/12 text-violet-200">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{module.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
