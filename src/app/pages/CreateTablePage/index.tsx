import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import ConnectedCreateTableHooks from './CreateTableHooks';

export function CreateTablePage() {
  return (
    <>
      <Helmet>
        <title>Create Table</title>
        <meta name="description" content="Create a Table Page" />
      </Helmet>

      <PageWrapper className="bg-green">
        <ConnectedCreateTableHooks />
      </PageWrapper>
    </>
  );
}
