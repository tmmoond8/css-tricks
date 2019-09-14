import React from 'react';

import { storiesOf } from '@storybook/react';
import DefaultFooter from './DefaultFooter';
import StickyFooterLAyout from './StickyFooterLayout';

storiesOf('StickyFooterLayout', module)
  .add('DefaultFooter', () => <DefaultFooter />)
  .add('StickyFooterLayout(10)', () => (
    <div style={{ height: '20rem', backgroundColor: 'lightGrey' }}>
      <StickyFooterLAyout>
        {'a'
          .repeat(10)
          .split('')
          .map(i => (
            <p>{i}</p>
          ))}
      </StickyFooterLAyout>
    </div>
  ))
  .add('StickyFooterLayout(20)', () => (
    <div style={{ height: '20rem', backgroundColor: 'lightGrey' }}>
      <StickyFooterLAyout>
        {'a'
          .repeat(20)
          .split('')
          .map(i => (
            <p>{i}</p>
          ))}
      </StickyFooterLAyout>
    </div>
  ))
  .add('StickyFooterLayout(30)', () => (
    <div style={{ height: '20rem', backgroundColor: 'lightGrey' }}>
      <StickyFooterLAyout>
        {'a'
          .repeat(30)
          .split('')
          .map(i => (
            <p>{i}</p>
          ))}
      </StickyFooterLAyout>
    </div>
  ));
