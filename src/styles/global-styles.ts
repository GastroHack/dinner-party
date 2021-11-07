import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body {
    font-family: MatterRegular, Helvetica, Arial, sans-serif;
    // padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: MatterRegular, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;

  }
  
  #root {
    // display: flex;
    // min-height: 100vh;
  }
  
  .bg-green {
    background: #effff1;
  }
  
  .bg-blue {
    background: #e5efff;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
