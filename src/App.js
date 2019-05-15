import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';

// import configureStore from './redux/store';
import Form from './modules/components/Form';

// const store = configureStore();

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
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
