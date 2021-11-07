import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import LoadingIcons from 'react-loading-icons';
import { StyledLink } from '../../components/StyledLink';
import { LogoWrapper } from '../../components/LogoWrapper';
import { LogoTextUp, LogoTextDown } from '../../components/LogoText';

function HomeHooks() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    return (
      <Wrapper>
        <TopWrapper>
          <LogoWrapper>
            <LogoTextUp>DINNER</LogoTextUp>
            <LogoTextDown>PARTY</LogoTextDown>
          </LogoWrapper>
          <ButtonTop>
            <StyledLink to="/createTable">OPEN A TABLE</StyledLink>
          </ButtonTop>
        </TopWrapper>

        <Wrapper>
          <p></p>
          <div>have a seat at</div>
          <div>every table you want</div>

          <ButtonBottom>
            <StyledLink to="/findSeat">Find me a Seat</StyledLink>
          </ButtonBottom>
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
  margin-top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;

const SpinnerWrapper = styled.div``;

const ButtonTop = styled.div`
  position: sticky;
  align-self: start;
  align-items: flex-start;
`;

const TopWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonBottom = styled.div`
  margin-top: 90px;
`;
