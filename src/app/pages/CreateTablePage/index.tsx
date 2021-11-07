import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedCreateTableHooks from './CreateTableHooks';
import { useEffect } from 'react';

export function CreateTablePage() {
  useEffect(() => {
    document.body.classList.add('bg-green');

    return () => {
      document.body.classList.remove('bg-green');
    };
  });

  return (
    <>
      <Helmet>
        <title>Create Table</title>
        <meta name="description" content="Create a Table Page" />
      </Helmet>

      <PageWrapper>
        <ConnectedCreateTableHooks />
      </PageWrapper>
    </>
  );
}
