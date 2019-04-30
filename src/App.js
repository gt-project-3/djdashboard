import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FormContainer from './modules/form/form.container';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FormContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
