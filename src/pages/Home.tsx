import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';
import { Github } from '../components/home/Github';
import { Hero } from '../components/home/Hero';
import { Journey } from '../components/home/Journey';
import { NeronOS } from '../components/home/NeronOS';
import { Projects } from '../components/home/Projects';
import { Skills } from '../components/home/Skills';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <NeronOS />
      <Skills />
      <Projects />
      <Github />
      <Journey />
      <Contact />
    </main>
  );
}
