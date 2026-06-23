import { lazy, Suspense } from 'react';
import { Hero } from '../components/home/Hero';

const About = lazy(() => import('../components/home/About').then(({ About }) => ({ default: About })));
const Contact = lazy(() => import('../components/home/Contact').then(({ Contact }) => ({ default: Contact })));
const Github = lazy(() => import('../components/home/Github').then(({ Github }) => ({ default: Github })));
const Journey = lazy(() => import('../components/home/Journey').then(({ Journey }) => ({ default: Journey })));
const NeronOS = lazy(() => import('../components/home/NeronOS').then(({ NeronOS }) => ({ default: NeronOS })));
const Projects = lazy(() => import('../components/home/Projects').then(({ Projects }) => ({ default: Projects })));
const Skills = lazy(() => import('../components/home/Skills').then(({ Skills }) => ({ default: Skills })));

export function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-slate-950" aria-label="Chargement du contenu" />}>
        <About />
        <NeronOS />
        <Skills />
        <Projects />
        <Github />
        <Journey />
        <Contact />
      </Suspense>
    </main>
  );
}
