import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const LogoWrapper = styled(RouterLink)`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  color: ${p => p.theme.border};
  text-decoration: none;

  position: sticky;
  align-self: baseline;
  top: 20px;
  left: 22px;

  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }

  .sign {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem;
  }
`;
