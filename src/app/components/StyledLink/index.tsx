import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const StyledLink = styled(RouterLink)`
  font-family: 'MatterRegular';
  font-size: 40px;
  color: black;
  padding: 0 7px 0 7px;
  line-height: 50px;
  border-style: solid;

  text-decoration: none;
  background-color: #ffffff;

  text-align: center;
`;
