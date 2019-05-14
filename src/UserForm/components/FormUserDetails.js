import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';
import Menu from '@material-ui/core/Menu';

const styles = {
    grid: {
      width: '5%',
    },
    button: {
        margin: 15
    }
  };

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleChange();
    };
    state = {
        // The first commit of Material-UI
        selectedDate: new Date('2019-05-16T21:11:54'),
      };
    
      handleDateChange = date => {
        this.setState({ selectedDate: date });
      };
    
    render() {
        const { values, classes, handleChange, handleDateChange} = this.props;
        const { selectedDate } = this.state;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter your Dj Name"
                        floatingLabelFixed="Dj Name"
                        onChange={handleChange('djName')}
                        defaultValue={values.djName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your email"
                        floatingLabelFixed="Email "
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                        <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            margin="normal"
            label="Event Date"
            value={selectedDate}
            onChange={this.handleChange}
                                
                        />
                        <br/>
          <TimePicker
            margin="normal"
            label="Event Time"
            value={selectedDate}
            onChange={this.handleChange}
                        />
                        <br/>

                        <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <RaisedButton label="Cover Cost" primary={true} style={styles.button} variant="contained" {...bindTrigger(popupState)}>
          </RaisedButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>$</MenuItem>
                      <MenuItem onClick={popupState.close}>$$</MenuItem>
            <MenuItem onClick={popupState.close}>$$$</MenuItem>
                      
          </Menu>
        </React.Fragment>
      )}
    </PopupState>

                    </MuiPickersUtilsProvider>
                    <br />
                    <RaisedButton
                        label="CONNECT!"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
        </React.Fragment>
    </MuiThemeProvider>
    );
  }
}

FormUserDetails.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FormUserDetails)
