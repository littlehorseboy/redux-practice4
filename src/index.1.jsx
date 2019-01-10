import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// actions
const CHANGE_NAME = 'CHANGE_NAME';

const changeName = name => ({
  type: CHANGE_NAME,
  payload: {
    name,
  },
});

// reducer
const initState = {
  name: 'horse',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// connect
const mapStateToProps = state => ({
  name: state.name,
});

const mapDispatchToProps = dispatch => ({
  changeName: (name) => {
    dispatch(changeName(name));
  },
});

class ConnectTitle extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
        <button onClick={this.props.changeName.bind(this, 'ggg')}>
          觸發事件
        </button>
      </div>
    );
  }
}

const Title = connect(mapStateToProps, mapDispatchToProps)(ConnectTitle);

ConnectTitle.propTypes = {
  name: PropTypes.string,
  changeName: PropTypes.func,
};

ReactDOM.render(
  <Provider store={store}>
    <Title />
  </Provider>,
  document.querySelector('#app'),
);
