import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connect, Provider } from 'react-redux';

// actions
const SETTIMEOUT_TEST = 'SETTIMEOUT_TEST';

const setTimeoutTest = test => ({
  type: SETTIMEOUT_TEST,
  test,
});

const getTimeoutTest = () => dispatch => (
  setTimeout(() => {
    dispatch(setTimeoutTest('abc'));
  }, 1000)
);

// reducer
const setTimeoutReducer = (state = '', action) => {
  switch (action.type) {
    case SETTIMEOUT_TEST:
      return action.test;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setTimeoutReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

// connect
const mapStateToProps = state => ({
  setTimeoutReducer: state.setTimeoutReducer,
});

class ConnectTitle extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.setTimeoutReducer}</h2>
        <button onClick={() => {
          this.props.dispatch(getTimeoutTest());
        }}>
          觸發事件
        </button>
      </div>
    );
  }
}

const Title = connect(mapStateToProps)(ConnectTitle);

ConnectTitle.propTypes = {
  dispatch: PropTypes.func,
  setTimeoutReducer: PropTypes.string,
};

ReactDOM.render(
  <Provider store={store}>
    <Title />
  </Provider>,
  document.querySelector('#app'),
);
