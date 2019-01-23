import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import JSONFormat from '../src/JSONFormat.jsx';

/* global it, expect */

it('先抓得到再說', () => {
  const textAreas = ReactTestUtils.renderIntoDocument(
    <JSONFormat />,
  );

  // const textAreas = ReactTestUtils.findRenderedDOMComponentWithTag(textAreas, 'textarea');

  expect(textAreas.textContent).toEqual(undefined);
  // expect(1).toEqual(1);
});
