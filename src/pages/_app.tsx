import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import store from '@/store/store';
import {GlobalStyle} from '@/styles/globalStyle';
import {ThemeProvider} from 'styled-components';
import theme from '@/styles/theme/theme';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
