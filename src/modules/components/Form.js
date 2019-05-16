import React from 'react'
import { GiftedChat } from "react-web-gifted-chat";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import './Form.css';

const config = {
  apiKey: "AIzaSyDnoW7kOC4SX3tRegX2WuCnHNubPibJgPo",
    authDomain: "yodjtest.firebaseapp.com",
    databaseURL: "https://yodjtest.firebaseio.com",
    projectId: "yodjtest",
    storageBucket: "yodjtest.appspot.com",
    messagingSenderId: "1058506296045",
    appId: "1:1058506296045:web:8e631f53758ad1f6"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
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
    this.props.onSubmit(this.state);
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
  }
  
  constructor() {
    super();
    this.state = {
      messages: [],
      user: {},
      isAuthenticated: false,
    };
  }
      
  async signIn() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  signOut() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuthenticated: true, user });
        this.loadMessages();
      } else {
        this.setState({ isAuthenticated: false, user: {}, messages: [] });
      }
    });
  }

  loadMessages() {
    const callback = snap => {
      const message = snap.val();
      message.id = snap.key;
      const { messages } = this.state;
      messages.push(message);
      this.setState({ messages })
      };
      firebase
        .database()
        .ref("/messages/")
        .limitToLast(12)
        .on("child_added", callback);
    }


renderPopup() {
  return (
    <Dialog open={!this.state.isAuthenticated}>
      <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
      <div>
        <List>
          <ListItem button onClick={() => this.signIn()}>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "#eee" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  height="30"
                  alt="G"
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Sign in with Google" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
}

  onSend(messages) {
    for (const message of messages) {
      this.saveMessage(message);
    }
  }

  saveMessage(message) {
    return firebase
      .database()
      .ref("/messages/")
      .push(message)
      .catch(function (error) {
        console.error("Error saving message to Database:", error);
      });
  }

  renderSignOutButton() {
    if (this.state.isAuthenticated) {
      return <Button onClick={() => this.signOut()}>Sign out</Button>;
    }
    return null;
  }

  renderChat() {
    return (
      <GiftedChat
        user={this.chatUser}
        messages={this.state.messages.slice().reverse()}
        onSend={messages => this.onSend(messages)}
      />
    );
  }

  renderChannels() {
    return (
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>D</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Default" />
        </ListItem>
      </List>
    );
  }

  renderChannelsHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Channels
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  renderChatHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Default channel
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  renderSettingsHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    return (
    
<div>
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

      <div style={styles.container}>
        {this.renderPopup()}
        <div style={styles.channelList}>
          {this.renderChannelsHeader()}
          {this.renderChannels()}
        </div>
        <div style={styles.chat}>
          {this.renderChatHeader()}
          {this.renderChat()}
        </div>
        <div style={styles.settings}>
          {this.renderSettingsHeader()}
          {this.renderSignOutButton()}
        </div>
        </div>
        </div>
     )
  }
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  channelList: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  chat: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#ccc",
    borderRightStyle: "solid",
    borderLeftStyle: "solid",
  },
  settings: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

export default Form
