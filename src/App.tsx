import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
        href="#main-content"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
