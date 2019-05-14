import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';


const styles = theme => ({
    grid: {
      width: '5%',
    },
    button: {
        margin: 15
    },
    messageBox: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 20,
        // paddingBottom: theme.spacing.unit * 20,
        display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    },
    Box: {
        // ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 20,
        // paddingBottom: theme.spacing.unit * 20,
        display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    // overflow: 'hidden',
    },
  });

class MessageBox extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleChange();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
        this.props.handleChange();
    };
    
    render() {
        const { values, classes, handleChange, handleDateChange} = this.props;
            return (
            <MuiThemeProvider className={classes.Box} >
                <React.Fragment>
                        <AppBar title="Message Chatroom" />
            <Grid container className={classes.messageBox}>
                            <GridList cellHeight={400} cellWidth={370} spacing={16} className={classes.gridList}>
            <Paper className={classes.root} elevation={10}>
        <Typography component="p">
          Messages will goksssscdksjnkcdcksdnkdjcskkdsccklkccjdddlckckcskccklclld
          csd   mponents/MessageBox.js
  Line 4:    'TextField' is defined but never used                  no-unused-vars
  Line 45:  'values' is assigned a value but never used            no-unused-vars
  Line 45:  'handleChange' is assigned a value but never used      no-unused-vars
  Line 45:  'handleDateChange' is assigned a value but never used                            here
        </Typography>
                                </Paper>
                       
                </GridList>
                        </Grid>
                        <br />
                    <RaisedButton
                        label="RETURN HOME"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                        />
                    </React.Fragment>
                    </MuiThemeProvider>
    );
  }
}

MessageBox.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MessageBox)
