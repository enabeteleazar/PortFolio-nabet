import { skillGroups, techStack } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <section id="stack" className="border-b border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Compétences vérifiées" title="Une stack réelle, issue du code et des dépôts publics.">
          Les technologies affichées ici sont présentes dans les fichiers locaux ou dans les dépôts GitHub publics
          analysés. Les éléments non prouvés ne sont pas présentés comme acquis.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6" key={group.title}>
                <div className="flex items-start gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
                    <Icon aria-hidden="true" />
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
            );
          })}
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
