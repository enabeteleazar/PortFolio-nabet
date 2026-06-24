import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import { AppLink } from '../ui/AppLink';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
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
