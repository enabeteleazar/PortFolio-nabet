import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Home,
  Layers3,
  Mail,
  Menu,
  Rocket,
  ServerCog,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';
import { FormEvent, ReactNode, useMemo, useState } from 'react';
import avatarUrl from '../images/avatar_icon.png';

type SkillGroup = {
  title: string;
  icon: ReactNode;
  description: string;
  skills: string[];
};

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  challenge: string;
  result: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

const contactEmail = 'contact@portfolio.fr.nf';

const navItems = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#journey', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
];

const expertise = [
  'Applications web modernes',
  'Architecture Full Stack',
  'IA et automatisation',
  'Linux et auto-hébergement',
  'NéronOS',
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    icon: <Code2 aria-hidden="true" />,
    description: 'Interfaces rapides, responsives et lisibles, avec une attention forte portée à l’expérience utilisateur.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Bootstrap', 'Responsive UI'],
  },
  {
    title: 'Back-End',
    icon: <Database aria-hidden="true" />,
    description: 'Bases solides pour concevoir des APIs, structurer les données et connecter les briques métier.',
    skills: ['Node.js', 'API REST', 'Bases de données', 'Authentification', 'Architecture applicative', 'PHP', 'Symfony'],
  },
  {
    title: 'DevOps & Systèmes',
    icon: <ServerCog aria-hidden="true" />,
    description: 'Capacité à créer, déployer, versionner et maintenir des applications dans des environnements modernes.',
    skills: ['Linux', 'Git', 'GitHub', 'Déploiement', 'Vercel', 'Heroku', 'Auto-hébergement', 'Maintenance'],
  },
  {
    title: 'IA & Automatisation',
    icon: <BrainCircuit aria-hidden="true" />,
    description: 'Exploration d’outils intelligents, d’agents IA et de workflows pour automatiser des tâches techniques.',
    skills: ['LLM', 'Agents IA', 'NéronOS', 'Automatisation', 'Home Assistant', 'Workflows', 'Scripting'],
  },
];

const projects: Project[] = [
  {
    title: 'NéronOS',
    category: 'Projet technique majeur',
    description:
      'Environnement personnel centré sur Linux, l’automatisation, l’IA et l’auto-hébergement pour expérimenter des usages avancés du poste de travail et du serveur.',
    technologies: ['Linux', 'IA', 'Automatisation', 'Systèmes', 'Auto-hébergement'],
    challenge: 'Structurer une base technique cohérente entre outils système, automatisations et interfaces d’usage.',
    result: 'Un projet fil rouge qui met en avant l’architecture, l’innovation et la capacité à faire évoluer un écosystème technique.',
    featured: true,
  },
  {
    title: 'Portfolio Full Stack',
    category: 'Application web',
    description:
      'Refonte complète du portfolio historique vers une application React moderne, typée, maintenable et compatible Vercel.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'SEO'],
    challenge: 'Migrer un site statique ancien avec PHP dormant, styles dispersés et scripts jQuery vers une base npm propre.',
    result: 'Une architecture front-end claire, un build reproductible et une identité plus crédible pour un profil Full Stack.',
    featured: true,
  },
  {
    title: 'Aremac’s',
    category: 'Site web',
    description: 'Projet web publié sur Netlify, issu des réalisations existantes du portfolio.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    challenge: 'Construire une interface web exploitable et la rendre disponible en ligne.',
    result: 'Un site consultable publiquement, utile pour démontrer la mise en production de projets front-end.',
    demoUrl: 'https://aremacs.netlify.app',
  },
  {
    title: 'Jeu Dice Roll',
    category: 'Application interactive',
    description: 'Jeu de lancer de dés permettant de pratiquer la logique JavaScript et l’interaction utilisateur.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
    challenge: 'Gérer les états de jeu, les interactions et l’affichage dynamique.',
    result: 'Un projet simple mais concret pour démontrer la manipulation du DOM et la logique applicative.',
    demoUrl: 'https://dice-roller0-game.netlify.app',
  },
  {
    title: 'Patiss’Orane',
    category: 'Site vitrine',
    description: 'Site de présentation orienté marque, contenu et mise en valeur visuelle.',
    technologies: ['HTML', 'CSS', 'Responsive Design', 'Netlify'],
    challenge: 'Organiser une page claire autour d’un univers visuel et d’un parcours de lecture simple.',
    result: 'Une vitrine publiée qui montre la capacité à produire un site lisible et accessible.',
    demoUrl: 'https://orane-patisserie.netlify.app',
  },
  {
    title: 'Mon Marché',
    category: 'Projet web',
    description: 'Projet web autour d’une expérience de marché en ligne, conservé depuis le portfolio initial.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    challenge: 'Structurer une interface de catalogue et travailler la clarté des contenus.',
    result: 'Une réalisation publiée qui complète les projets front-end orientés produit.',
    demoUrl: 'https://monmarche.netlify.app',
  },
  {
    title: 'Étude Jacek Jeznach',
    category: 'Étude d’interface',
    description: 'Travail d’observation et de reproduction d’une interface portfolio très visuelle.',
    technologies: ['HTML', 'CSS', 'Animation', 'Responsive Design'],
    challenge: 'Comprendre les choix d’animation, de rythme et de mise en scène d’un portfolio créatif.',
    result: 'Une référence utile pour progresser sur les micro-interactions et la direction artistique.',
    demoUrl: 'https://jacekjeznach.com/',
  },
  {
    title: 'Automatisations & Home Assistant',
    category: 'Laboratoire technique',
    description:
      'Expérimentations autour de scénarios automatisés, d’intégrations locales et de solutions auto-hébergées.',
    technologies: ['Home Assistant', 'Linux', 'Automatisation', 'Scripting', 'Self-hosting'],
    challenge: 'Relier des services et des événements pour réduire les actions manuelles répétitives.',
    result: 'Un terrain d’expérimentation qui renforce la vision système et l’approche orientée maintenance.',
    featured: true,
  },
];

const timeline: TimelineItem[] = [
  {
    period: 'Aujourd’hui',
    title: 'Développeur web Full Stack orienté architecture et automatisation',
    description:
      'Positionnement autour de la création d’applications web modernes, du déploiement, de la maintenance, de Linux, de l’IA et de NéronOS.',
  },
  {
    period: 'Projets personnels',
    title: 'NéronOS, IA, Home Assistant et solutions auto-hébergées',
    description:
      'Exploration d’un environnement technique personnel combinant automatisation, agents IA, systèmes Linux et services locaux.',
  },
  {
    period: 'Formation web',
    title: 'Montée en compétences front-end et back-end',
    description:
      'Pratique de JavaScript, Python, Git/GitHub, Bootstrap, React, PHP, Symfony, bases de données et déploiement web.',
  },
  {
    period: 'Premières réalisations',
    title: 'Sites web et applications publiées',
    description:
      'Réalisation de projets front-end, jeux interactifs et sites vitrines pour mettre en pratique les bases de l’intégration et de l’interactivité.',
  },
];

function AppLink({
  href,
  children,
  variant = 'primary',
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
}) {
  const className = {
    primary:
      'bg-emerald-300 text-ink hover:bg-emerald-200 focus-visible:outline-emerald-200',
    secondary:
      'border border-emerald-300/45 bg-emerald-300/10 text-emerald-50 hover:bg-emerald-300/20 focus-visible:outline-emerald-200',
    ghost:
      'border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 focus-visible:outline-white',
  }[variant];

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`}
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-300 sm:text-lg">{children}</p>
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <a className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white" href="#top">
          <span className="grid size-9 place-items-center rounded-md bg-emerald-300 text-sm text-ink">EN</span>
          <span className="hidden sm:inline">Eléazar Nabet</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <AppLink href="#contact" variant="secondary">
            <Mail size={16} aria-hidden="true" />
            Me contacter
          </AppLink>
        </div>

        <button
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200 lg:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="site-grid relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-200">
            <Sparkles size={16} aria-hidden="true" />
            Développeur Web Full Stack
          </p>
          <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Eléazar Nabet conçoit des applications web modernes, utiles et maintenables.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Je développe des interfaces, des architectures applicatives et des solutions techniques autour du web,
            de l’IA, de l’automatisation, de Linux, de Home Assistant et de NéronOS.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AppLink href="#projects">
              Voir mes projets
              <ArrowRight size={17} aria-hidden="true" />
            </AppLink>
            <AppLink href="#contact" variant="secondary">
              <Mail size={17} aria-hidden="true" />
              Me contacter
            </AppLink>
            <AppLink href="/cv-eleazar-nabet.md" variant="ghost" download>
              <Download size={17} aria-hidden="true" />
              Télécharger mon CV
            </AppLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Domaines d'expertise">
            {expertise.map((item) => (
              <li className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm text-zinc-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/10 bg-panel/90 p-5 shadow-soft">
            <div className="flex items-center gap-4 border-b border-white/10 pb-5">
              <img
                className="size-20 rounded-md border border-white/10 object-cover"
                src={avatarUrl}
                alt="Avatar d'Eléazar Nabet"
              />
              <div>
                <p className="text-lg font-bold text-white">Eléazar Nabet</p>
                <p className="text-sm text-zinc-400">Full Stack Web Developer</p>
              </div>
            </div>

            <div className="grid gap-3 pt-5">
              {[
                ['Focus', 'React, TypeScript, APIs, systèmes Linux'],
                ['Projet phare', 'NéronOS et automatisations IA'],
                ['Objectif', 'Créer, déployer et maintenir des applications web'],
              ].map(([label, value]) => (
                <div className="rounded-md border border-white/10 bg-ink/70 p-4" key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="À propos" title="Un profil web orienté produit, système et automatisation.">
          Passionné par la programmation et le pouvoir de création qu’elle offre, je construis progressivement un profil
          Full Stack capable de relier interface, logique applicative, déploiement et maintenance.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: <Layers3 aria-hidden="true" />,
              title: 'Construire des applications',
              text: 'Je travaille sur des projets web concrets, de l’intégration front-end jusqu’à la mise en ligne, avec une attention portée à la lisibilité et à la maintenabilité.',
            },
            {
              icon: <Terminal aria-hidden="true" />,
              title: 'Comprendre les systèmes',
              text: 'Linux, Git, le déploiement et l’auto-hébergement font partie de mon socle technique pour garder la maîtrise des environnements.',
            },
            {
              icon: <Bot aria-hidden="true" />,
              title: 'Automatiser intelligemment',
              text: 'J’explore les LLM, les agents IA, Home Assistant et NéronOS pour créer des workflows utiles et réduire les tâches répétitives.',
            },
          ].map((item) => (
            <article className="rounded-lg border border-white/10 bg-panel p-6" key={item.title}>
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-emerald-300/12 text-emerald-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 bg-[#0c100e] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Compétences" title="Une base Full Stack structurée par usages.">
          Les compétences existantes du portfolio ont été réorganisées en domaines lisibles : front-end, back-end,
          systèmes, déploiement, IA et automatisation.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article className="rounded-lg border border-white/10 bg-panel p-6" key={group.title}>
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-md bg-cyan-300/12 text-cyan-200">
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-300">{group.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projets" title="Des réalisations web et des projets techniques plus ambitieux.">
          Les projets historiques sont conservés et replacés dans une présentation plus professionnelle, avec une place
          forte pour NéronOS, l’IA, l’automatisation et les solutions auto-hébergées.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              className={`rounded-lg border p-6 transition hover:-translate-y-1 hover:shadow-soft ${
                project.featured
                  ? 'border-emerald-300/35 bg-emerald-300/10'
                  : 'border-white/10 bg-panel'
              }`}
              key={project.title}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                {project.featured && (
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-300/35 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                    <Rocket size={14} aria-hidden="true" />
                    Prioritaire
                  </span>
                )}
              </div>

              <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-white">Difficulté technique</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Résultat</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{project.result}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-200" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <AppLink href={project.demoUrl} variant="secondary">
                    <ExternalLink size={16} aria-hidden="true" />
                    Démo
                  </AppLink>
                )}
                {project.codeUrl ? (
                  <AppLink href={project.codeUrl} variant="ghost">
                    <Github size={16} aria-hidden="true" />
                    Code
                  </AppLink>
                ) : (
                  <span className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-zinc-400">
                    <Github size={16} aria-hidden="true" />
                    Code non renseigné
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="border-b border-white/10 bg-[#0c100e] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Parcours" title="Une progression du front-end vers une approche Full Stack complète.">
          Le parcours reste réaliste : apprentissage continu, projets publiés, consolidation back-end et orientation
          croissante vers l’architecture, l’IA et les systèmes.
        </SectionHeading>

        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <article className="grid gap-4 rounded-lg border border-white/10 bg-panel p-5 md:grid-cols-[180px_1fr]" key={item.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-md bg-emerald-300 text-sm font-bold text-ink">
                  {index + 1}
                </span>
                <p className="font-semibold text-emerald-200">{item.period}</p>
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

function Contact() {
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
    <section id="contact" className="bg-ink px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Parlons application web, automatisation ou architecture.">
            Disponible pour échanger autour d’un projet web, d’une refonte, d’un déploiement, d’une automatisation ou
            d’une solution technique auto-hébergée.
          </SectionHeading>

          <div className="grid gap-3">
            {[
              { icon: <Mail aria-hidden="true" />, label: contactEmail },
              { icon: <Globe2 aria-hidden="true" />, label: 'portfolio.fr.nf' },
              { icon: <Home aria-hidden="true" />, label: 'Web, IA, Linux, Home Assistant, NéronOS' },
            ].map((item) => (
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-panel p-4" key={item.label}>
                <span className="grid size-10 place-items-center rounded-md bg-white/10 text-emerald-200">{item.icon}</span>
                <span className="text-sm font-medium text-zinc-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-lg border border-white/10 bg-panel p-5 sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-zinc-200">
              Nom
              <input
                className="min-h-12 rounded-md border border-white/10 bg-ink px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-300/15"
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
                className="min-h-12 rounded-md border border-white/10 bg-ink px-4 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-300/15"
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
                className="min-h-40 resize-y rounded-md border border-white/10 bg-ink px-4 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-300/15"
                name="message"
                placeholder="Bonjour, je vous contacte pour..."
                required
                value={formState.message}
                onChange={(event) => setFormState((state) => ({ ...state, message: event.target.value }))}
              />
            </label>

            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-300 px-5 py-3 text-sm font-bold text-ink transition hover:bg-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200"
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

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060807] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eléazar Nabet. Portfolio Full Stack.</p>
        <p className="inline-flex items-center gap-2">
          <CheckCircle2 size={16} aria-hidden="true" />
          React, TypeScript, Vite, Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-ink text-zinc-100">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-emerald-300 focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        href="#about"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
