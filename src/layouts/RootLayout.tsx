import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Website from '@/layouts/Website';

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="A friendly terminal-style welcome screen." />
      </Helmet>
      <ScrollRestoration />
      {children}
    </Website>
  );
}
