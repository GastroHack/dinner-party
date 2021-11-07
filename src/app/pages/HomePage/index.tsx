import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedHomeHooks from './HomeHooks';
import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    document.body.classList.add('bg-green');

    return () => {
      document.body.classList.remove('bg-green');
    };
  });

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <PageWrapper className="bg-green">
        <ConnectedHomeHooks />
      </PageWrapper>
    </>
  );
}
