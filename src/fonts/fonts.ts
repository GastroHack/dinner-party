import { createGlobalStyle } from 'styled-components';
import MatterRegularWoff2 from './Matter-Regular.woff2';
import MatterRegularWoff from './Matter-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'MatterRegular';
        src: local('MatterRegular'), local('MatterRegular'),
        url(${MatterRegularWoff2}) format('woff2'),
        url(${MatterRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
