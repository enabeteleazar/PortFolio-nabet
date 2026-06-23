import type { ReactNode } from 'react';

type AppLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: boolean;
};

export function AppLink({ href, children, variant = 'primary', download }: AppLinkProps) {
  const isExternal = href.startsWith('http');
  const className = {
    primary: 'bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:outline-cyan-200',
    secondary:
      'border border-violet-300/45 bg-violet-300/10 text-violet-50 hover:bg-violet-300/20 focus-visible:outline-violet-200',
    ghost: 'border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 focus-visible:outline-white',
  }[variant];

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`}
      href={href}
      download={download}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
