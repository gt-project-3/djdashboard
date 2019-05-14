/* eslint-disable default-case */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import LoginDetails from './LoginDetails';
import MessageBox from './MessageBox';

export class UserForm extends Component {
    state = {
        step: 1,
        djName: '',
        email: '',
        eventDate: '',
        coverPrice: '',
        selectedDate: new Date('')
    }

    //Proceed to Message page

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to previous step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
        
    }
    // handleDateChange = date => {
    //     this.setState({ selectedDate: date })
    // }

    render() {
        const { step } = this.state;
        const { djName, email, eventDate, cover, selectedDate } = this.state;
        const values = { djName, email, eventDate, cover, selectedDate }

        switch (step) {
            case 1: 
                return (
                    <LoginDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        // handleDateChange={this.handleDateChange}
                        />
                )
            case 2:
            return (
                <MessageBox
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    // handleDateChange={this.handleDateChange}
                    />
            )
            case 3:
            return <h1>Confirm</h1>
            case 4:
            return <h1>Success</h1>    
  }
    
  }
}

export default UserForm
