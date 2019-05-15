import React from 'react'

export class Form extends React.Component {
  
    state = {
        djName: '',
        email: '',
        eventDate: '',
        coverPrice: '',
        selectedDate: ''
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
      };
      onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            djName: '',
            email: '',
            eventDate: '',
            coverPrice: '',
            selectedDate: new Date('')
        });
        this.props.onChange({
            djName: '',
            email: '',
            eventAddress: '',
            coverPrice: '',
            selectedDate: new Date('')
        });
      };
  
  
  
    render() {
    return (
        <form>
        <input
          name="djName"
          placeholder="Dj Name"
          value={this.state.djName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email Address"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="eventAddress"
          placeholder="Event Address"
          value={this.state.eventAddress}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="coverPrice"
          placeholder="Cover Price"
          value={this.state.coverPrice}
          onChange={e => this.change(e)}
            />
            <br />
        <input
          name="selectedDate"
          placeholder="Event Date"
          value={this.state.eventDate}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default Form
