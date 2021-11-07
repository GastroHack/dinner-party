import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import LoadingIcons from 'react-loading-icons';
import { StyledLink } from '../../components/StyledLink';
import { LogoWrapper } from '../../components/LogoWrapper';
import { LogoTextDown, LogoTextUp } from '../../components/LogoText';

function AboutHooks() {
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

          <ButtonTopWrapper>
            <ButtonTop>
              <StyledLink to="/createTable">OPEN A TABLE</StyledLink>
            </ButtonTop>
            <ButtonDown>
              <StyledLink to="/findSeat">JOIN A TABLE</StyledLink>
            </ButtonDown>
          </ButtonTopWrapper>
        </TopWrapper>

        <TextWrapper>
          <p>
            Tired of dining alone? In love with cooking? Tremendous fear of
            meeting people in person? Well this could be exactly your platform.
            Here you can meet people, all from the comfort of your own dining
            room. Why go out to a restaurant, when you yourself are the best
            chef? Plenty of challenges provided by different users will push
            your limits and capabilities in the kitchen to unthinkable amounts.
            Spice up your cooking skills and see what tasty preparations other
            people can come up with.
          </p>
          <p>
            Never dine alone again, but rather have the whole world right here,
            on your dining table.
          </p>
        </TextWrapper>
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

const ConnectedAboutHooks = props => (
  // @ts-ignore
  <Connector>
    {({ actions, state }) => (
      <AboutHooks tableActions={actions.table} state={state} {...props} />
    )}
  </Connector>
);

export default ConnectedAboutHooks;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  min-height: 320px;
`;

const TextWrapper = styled.div`
  margin-top: 50px;
  width: 70vh;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const SpinnerWrapper = styled.div``;

const ButtonTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonTop = styled.div`
  position: sticky;
  align-self: start;
  align-items: flex-start;
`;

const ButtonDown = styled.div`
  position: sticky;
  align-self: start;
  align-items: flex-start;
  margin-top: 14px;
`;

const TopWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
