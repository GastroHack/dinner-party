import styled from 'styled-components/macro';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  color: ${p => p.theme.border};

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
