import React from 'react';

const TableListItem = ({ table }) => (
  <div>
    <div>{table?.shoppingList}</div>
    <div>{table?.dinnerDate}</div>
    <div>{table?.dinnerTime}</div>
    <div>{table?.dressCode}</div>
    <div>{table?.dinnerType}</div>
    <div>{table?.tableSize}</div>
    <div>{table?.meetUpLink}</div>
    <div>{table?.firstName}</div>
  </div>
);

export default TableListItem;
