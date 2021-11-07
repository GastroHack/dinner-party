import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';

import LoadingIcons from 'react-loading-icons';
import { StyledLink } from '../../components/StyledLink';

function AboutHooks() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    return (
      <Wrapper>
        <Wrapper>
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
            on your dining table.{' '}
          </p>
          <ButtonWrapper>
            <StyledLink to="/createTable">Open a Table</StyledLink>
          </ButtonWrapper>
          <ButtonWrapper>
            <StyledLink to="/">Join a Table</StyledLink>
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
