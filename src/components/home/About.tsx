import { aboutCards } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="À propos" title="Un profil Full Stack construit autour du web, de l’IA et des systèmes.">
          Mon parcours part du développement web et s’étend aujourd’hui vers l’architecture logicielle, les agents IA,
          Linux, l’automatisation et les outils auto-hébergés. NéronOS est le fil conducteur de cette évolution.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {aboutCards.map((item) => {
            const Icon = item.icon;

            return (
              <article className="rounded-xl border border-white/10 bg-white/[0.04] p-6" key={item.title}>
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-200">
                  <Icon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
