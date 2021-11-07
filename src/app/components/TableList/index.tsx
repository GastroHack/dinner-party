import React from 'react';
import TableListItem from '../TableListItem';

const TableList = ({ tables }) => (
  <div>
    {tables?.length === 0 ? (
      <div> No tables available... </div>
    ) : (
      <div>
        {tables?.map(table => (
          <TableListItem key={table?.id} table={table} />
        ))}
      </div>
    )}
  </div>
);

export default TableList;
