import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import LoadingIcons from 'react-loading-icons';
import { StyledLink } from '../../components/StyledLink';

function HomeHooks() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    return (
      <Wrapper>
        <Wrapper>
          <ButtonWrapper>
            <StyledLink to="/createTable">Open a Table</StyledLink>
          </ButtonWrapper>
          <p></p>
          <div>have a seat at</div>
          <div>every table you want</div>

          <ButtonWrapper>
            <StyledLink to="/findSeat">Find me a Seat</StyledLink>
          </ButtonWrapper>
        </Wrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Wrapper>
        <SpinnerWrapper>
          <LoadingIcons.Puff stroke="black" speed=".5" />
        </SpinnerWrapper>
      </Wrapper>
    </Wrapper>
  );
}

const ConnectedHomeHooks = props => (
  // @ts-ignore
  <Connector>
    {({ actions, state }) => (
      <HomeHooks tableActions={actions.table} state={state} {...props} />
    )}
  </Connector>
);

export default ConnectedHomeHooks;

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  margin-top: 85px;
`;

const SpinnerWrapper = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 90px;
`;
