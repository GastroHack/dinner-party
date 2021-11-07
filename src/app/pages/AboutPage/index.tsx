import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedAboutHooks from './AboutHooks';
import { useEffect } from 'react';

export function AboutPage() {
  useEffect(() => {
    document.body.classList.add('bg-blue');

    return () => {
      document.body.classList.remove('bg-blue');
    };
  });

  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <PageWrapper>
        <ConnectedAboutHooks />
      </PageWrapper>
    </>
  );
}
