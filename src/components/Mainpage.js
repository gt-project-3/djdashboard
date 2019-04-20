import React, { Component } from 'react';
import { Form } from './index';

class Mainpage extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    eventDate: '',
    eventAddress: '',
    cover: 0,
  };

  handleClick(event) {
    event.preventDefault();
    console.log('Clicked');
  }

  handleChange(event) {
      console.log('Changing')
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Form data ={this.state} handleChange={this.handleChange} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default Mainpage;
