import React from 'react';
import styled from 'styled-components/macro';

const TableListItem = ({ table }) => (
  <Wrapper>
    <h2 style={{marginTop: 0}}>{table?.firstName} openned a table</h2>
    <h3>Shopping list</h3>
      <ul>
          <li>{table?.shoppingList}</li>
      </ul>
    <h3>When?</h3>
    <div>{table?.dinnerDate}</div>
    <div>{table?.dinnerTime}</div>
    <h3>Dress code</h3>
    <div>{table?.dressCode}</div>
    <h3>Dinner type</h3>
    <div>{table?.dinnerType}</div>
    <h3>Table size</h3>
    <div>{table?.tableSize}</div>
    <div style={{display: "flex", flexDirection: "column", alignItems: "end", width: "100%"}}>
    <span style={{border: "2px solid black", padding: ".5em 1.5em"}}>
        <a href={table?.meetUpLink} style={{color: "black", textDecoration: "none"}}>Join</a>
    </span>
    </div>
    <div></div>
  </Wrapper>
);

export default TableListItem;

const Wrapper = styled.div`
  border: 2px solid black;
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
