import React from 'react';
import ReactDOM from 'react-dom';
import JSONFormat from './JSONFormat.jsx';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Index extends React.Component {
  render() {
    return (
      <div>
        <JSONFormat />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.querySelector('#app'),
);
