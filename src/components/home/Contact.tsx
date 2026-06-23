import { ArrowRight } from 'lucide-react';
import { type FormEvent, useMemo, useState } from 'react';
import { contactEmail, contactLinks } from '../../data/site';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  const subject = 'Contact depuis le portfolio';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mailtoHref = useMemo(() => {
    const body = [
      `Nom : ${formState.name || ''}`,
      `Email : ${formState.email || ''}`,
      '',
      formState.message || '',
    ].join('\n');

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formState]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Échanger autour d’une application, d’un agent IA ou d’un système local.">
            Disponible pour discuter architecture, interfaces web, automatisation, IA locale, outils auto-hébergés ou
            évolution de NéronOS.
          </SectionHeading>

          <div className="grid gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/10"
                  href={item.href}
                  key={item.label}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="grid size-10 place-items-center rounded-md bg-white/10 text-cyan-200">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-zinc-200">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <form className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Nom
              <input
                className="min-h-12 rounded-md border border-white/10 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Votre nom"
                required
                value={formState.name}
                onChange={(event) => setFormState((state) => ({ ...state, name: event.target.value }))}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Email
              <input
                className="min-h-12 rounded-md border border-white/10 bg-slate-950 px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="votre@email.com"
                required
                value={formState.email}
                onChange={(event) => setFormState((state) => ({ ...state, email: event.target.value }))}
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Message
              <textarea
                className="min-h-40 resize-y rounded-md border border-white/10 bg-slate-950 px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/15"
                name="message"
                placeholder="Bonjour, je vous contacte pour..."
                required
                value={formState.message}
                onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
              />
            </label>

            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              type="submit"
            >
              Envoyer le message
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
