import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowUpRight, CornerDownLeft } from 'lucide-react';

import { home } from 'virtual:content';

const siteUrl = 'https://hello-world.example';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: home.terminal.brand,
        url: `${siteUrl}/`,
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: home.terminal.brand,
        url: `${siteUrl}/`,
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        name: 'Hello, World! | hello.world',
        url: `${siteUrl}/`,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-11',
        dateModified: '2026-08-11',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Hello, World! | hello.world</title>
        <meta name="description" content="A friendly terminal-style welcome screen." />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content="Hello, World! | hello.world" />
        <meta property="og:description" content="A friendly terminal-style welcome screen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/favicon.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello, World! | hello.world" />
        <meta name="twitter:description" content="A friendly terminal-style welcome screen." />
        <meta name="twitter:image" content={`${siteUrl}/favicon.svg`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="terminal-shell relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-background px-4 py-4 text-foreground sm:px-7 sm:py-7 lg:px-12 lg:py-10">
        <div className="terminal-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="terminal-glow pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary blur-3xl" aria-hidden="true" />

        <section className="terminal-window relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl" aria-labelledby="welcome-heading">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
            <div className="flex items-center gap-2" aria-label="Terminal window controls">
              <span className="h-3 w-3 rounded-full bg-destructive" />
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <p className="text-xs font-medium text-muted-foreground">{home.terminal.windowTitle}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="hidden sm:inline">secure session</span>
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between gap-16 px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold tracking-tight text-primary">{home.terminal.brand}</p>
              <p className="hidden text-xs text-muted-foreground sm:block">{home.terminal.status}</p>
            </div>

            <div className="max-w-4xl">
              <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground sm:text-base">
                <span className="font-bold text-primary">{home.terminal.prompt}</span>
                <span>{home.terminal.command}</span>
                <CornerDownLeft className="h-4 w-4 text-primary" aria-hidden="true" />
              </p>
              <h1 id="welcome-heading" className="max-w-3xl font-mono text-5xl font-bold leading-[0.98] tracking-[-0.07em] text-card-foreground sm:text-7xl lg:text-8xl">
                {home.terminal.greeting}
                <span className="terminal-cursor ml-1 inline-block h-[0.84em] w-[0.12em] translate-y-[0.08em] bg-primary" aria-hidden="true" />
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{home.terminal.subheading}</p>
            </div>

            <div className="flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-xs leading-5 text-muted-foreground">{home.terminal.footer}</p>
              <button type="button" className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span>run again</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
