jest.unmock('../../../src/components/layout/Main');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from '../../../src/components/layout/Main';

describe('Main', () => {
  it('is defined', () => {
    const main = TestUtils.renderIntoDocument(
      <Main />
    );

    expect(main).not.toBeUndefined();
  });
});