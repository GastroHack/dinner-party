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
          <LogoWrapper to="/">
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

          <ButtonAbout>
            <StyledLink to="/about">
              {`
          ABOUT THE 
          CONCEPT
         `}
            </StyledLink>
          </ButtonAbout>

          <ButtonSeat>
            <StyledLink to="/findSeat">FIND ME A SEAT</StyledLink>
          </ButtonSeat>
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
  margin-top: 0;
  height: 100vh;
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

const ButtonSeat = styled.div`
  margin-top: 90px;
`;

const ButtonAbout = styled.div`
  margin-top: 90px;
`;
