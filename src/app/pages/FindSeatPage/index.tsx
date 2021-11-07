import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedFindSeatHooks from './FindSeatHooks';
import { useEffect } from 'react';

export function CreateFindSeatPage() {

  useEffect(()  => {
    document.body.classList.add('bg-blue');

    return () => {
      document.body.classList.remove('bg-blue');
    };
  });

  return (
    <>
      <Helmet>
        <title>Find Seat Page</title>
        <meta name="description" content="Find a Seat Page" />
      </Helmet>

      <PageWrapper>
        <ConnectedFindSeatHooks />
      </PageWrapper>
    </>
  );
}
