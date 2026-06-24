import { ArrowRight, Github, Mail, Sparkles } from 'lucide-react';
import avatarUrl from '../../assets/images/avatar.webp';
import { githubProfile } from '../../data/github';
import { heroSteps, heroTags } from '../../data/site';
import { AppLink } from '../ui/AppLink';

function HeroVisual() {
  return (
    <div className="rounded-xl border border-cyan-300/20 bg-slate-950/90 p-4 shadow-soft">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <img
            className="size-14 rounded-md border border-white/10 object-cover"
            src={avatarUrl}
            alt="Avatar d'Eléazar Nabet"
            loading="eager"
            fetchPriority="high"
            width="274"
            height="184"
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
        {heroSteps.map((step, index) => (
          <div className="grid grid-cols-[34px_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3" key={step.label}>
            <span className="grid size-8 place-items-center rounded-md bg-violet-300/15 text-sm font-bold text-violet-200">
              {index + 1}
            </span>
            <div>
              <p className="font-semibold text-white">{step.label}</p>
              <p className="text-sm leading-6 text-zinc-400">{step.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
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
