import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import TableList from '../../components/TableList';
import { getFirebase } from 'react-redux-firebase';
import { LogoWrapper } from '../../components/LogoWrapper';
import { LogoTextUp } from '../../components/LogoText';
import spinner from '../../../fonts/dinnerparty_loading_funktioniert.gif';

// TODO Refactor when possible
function FindSeatHooks({ tableActions }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  const [tables, setTables] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [err, setErrors] = useState({});

  const firebase = getFirebase();

  useEffect(() => {
    const fetchTables = async () => {
      try {
        if (!firebase) return;
        const db = firebase.firestore();
        const ref = db.collection('tables');

        const docs = await ref.get();

        let tableinos = [];
        docs.forEach(doc => {
          const data = doc.data();
          // @ts-ignore
          tableinos.push(data);
        });
        setTables(tableinos);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchTables().then();
  }, [isLoading, firebase]);

  useEffect(() => {
    if (isLoading) {
      tableActions
        .fetchTablesNew()
        .then(result => {
          setTables(result);
        })
        .catch(err => {
          setErrors({ resErr: err.message });
          setIsLoading(false);
        });
    }
  }, [isLoading, tableActions]);

  if (!isLoading) {
    return (
      <Wrapper>
        <LogoWrapper to="/">
          <LogoTextUp>EATING</LogoTextUp>
        </LogoWrapper>
        <Wrapper>
          <div>
            <TableList tables={tables} />
          </div>
        </Wrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Wrapper>
        <SpinnerWrapper>
          <img src={spinner} alt="loading" width="40" height="40" />
        </SpinnerWrapper>
      </Wrapper>
    </Wrapper>
  );
}

const ConnectedFindSeatHooks = props => (
  // @ts-ignore
  <Connector>
    {({ actions, state }) => (
      <FindSeatHooks tableActions={actions.table} state={state} {...props} />
    )}
  </Connector>
);

export default ConnectedFindSeatHooks;

const Wrapper = styled.main`
  // height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 320px;
`;

const SpinnerWrapper = styled.div`
  margin-bottom: 20px;
`;
