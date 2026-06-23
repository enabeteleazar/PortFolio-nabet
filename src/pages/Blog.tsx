import Article from '../../content/blog/neronos-architecture.mdx';

export function Blog() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-950 px-4 py-20 sm:px-6 lg:px-8" tabIndex={-1}>
      <article className="mx-auto max-w-3xl space-y-6 text-lg leading-8 text-zinc-300 [&_h1]:text-balance [&_h1]:text-4xl [&_h1]:font-black [&_h1]:text-white [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white">
        <a className="text-sm font-semibold text-cyan-300 hover:text-cyan-200" href="/">
          ← Retour au portfolio
        </a>
        <Article />
      </article>
    </main>
  );
}
