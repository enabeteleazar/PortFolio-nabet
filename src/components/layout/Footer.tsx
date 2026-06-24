import { GitPullRequest } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040711] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Eléazar Nabet. Développeur Full Stack · Créateur de NéronOS.</p>
        <p className="inline-flex items-center gap-2">
          <GitPullRequest size={16} aria-hidden="true" />
          Portfolio React, TypeScript, Vite, Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
