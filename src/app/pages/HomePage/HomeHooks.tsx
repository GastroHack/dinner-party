import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import LoadingIcons from 'react-loading-icons';
import { StyledLink } from '../../components/StyledLink';
import { LogoWrapper } from '../../components/LogoWrapper';
import { LogoTextUp, LogoTextDown } from '../../components/LogoText';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as Arrow } from './images/ArrowDown.svg';

function HomeHooks() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const text = 'ABOUT THE \n   CONCEPT';

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

        <BottomWrapper>
          <p></p>
          <div>have a seat at</div>
          <div>every table you want</div>

          <ButtonAbout>
            <StyledLinkAbout to="/about">{text}</StyledLinkAbout>
          </ButtonAbout>

          <ButtonSeat>
            <StyledLink to="/findSeat">FIND ME A SEAT</StyledLink>
            <PlaceHolder></PlaceHolder>
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
            <ArrowWrapper>
              <Arrow />
            </ArrowWrapper>
          </ButtonSeat>
        </BottomWrapper>
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

const BottomWrapper = styled.div`
  margin-top: 0;
  height: 100vh;
`;

const SpinnerWrapper = styled.div``;

const PlaceHolder = styled.div`
  margin-right: 17px;
`;

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
  position: absolute;
  bottom: 9vh;
  right: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonAbout = styled.div`
  margin-top: 90px;
  border-style: solid;
`;

const ArrowWrapper = styled.div`
  padding-bottom: 18px;
`;

export const StyledLinkAbout = styled(RouterLink)`
  font-family: 'MatterRegular';
  font-size: 40px;
  color: black;
  padding: 0 7px 0 7px;
  line-height: 50px;
  white-space: pre-line;
  text-decoration: none;
  text-align: center;
`;
