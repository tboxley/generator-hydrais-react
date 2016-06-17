jest.unmock('../../src/components/App');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';

describe('App', () => {
  it('is defined', () => {
    const app = TestUtils.renderIntoDocument(
      <App />
    );

    expect(app).not.toBeUndefined();
  });
});