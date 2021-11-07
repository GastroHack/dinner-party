import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedFindSeatHooks from './FindSeatHooks';

export function CreateFindSeatPage() {
  return (
    <>
      <Helmet>
        <title>Find Seat Page</title>
        <meta name="description" content="Find a Seat Page" />
      </Helmet>

      <PageWrapper className="bg-blue">
        <ConnectedFindSeatHooks />
      </PageWrapper>
    </>
  );
}
