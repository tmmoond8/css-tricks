import { addDecorator, configure } from '@storybook/react';

import * as React from 'react';
import GlobalStyle from '../src/styles/global-styles';
import theme from '../src/styles/theme';
import { ThemeProvider } from '../src/styles/typed-components';

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {cb()}
    </ThemeProvider>
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);