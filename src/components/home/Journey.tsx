import { timeline } from '../../data/timeline';
import { SectionHeading } from '../ui/SectionHeading';

export function Journey() {
  return (
    <section id="journey" className="border-b border-white/10 bg-[#070b16] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Parcours" title="Une trajectoire du front-end vers l’architecture de systèmes IA.">
          Le positionnement reste crédible : des fondations web, puis une montée en complexité vers les APIs, les
          services, l’observabilité, les agents et l’automatisation locale.
        </SectionHeading>

        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <article className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[180px_1fr]" key={item.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="font-semibold text-cyan-200">{item.period}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 leading-7 text-zinc-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
