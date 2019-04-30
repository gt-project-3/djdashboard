import React, { Component } from 'react';

 class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:'',
        currentMessage:'',
        messages:[],
    };
  };

 
  render(){
    return <div />;
  }
}

export default MessageBox;