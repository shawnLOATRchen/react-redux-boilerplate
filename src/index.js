import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

// Components
import RouterComponent from './router';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

class App extends Component {

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <RouterComponent />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));