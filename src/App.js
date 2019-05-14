import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';

// import configureStore from './redux/store';
import UserForm from './UserForm/components/UserForm';

// const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />

      </div>
      
    );
  }
}

export default App;

  // <Provider store={store}>
      //   <div className="App">
      //     <FormContainer />
      //   </div>
      // </Provider>
