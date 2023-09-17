import {createGlobalStyle} from 'styled-components';
import {variables} from './utils';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  ${variables}
	body{
		font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	* {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;
