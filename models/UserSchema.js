const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: false,
  },
  // password:{
  //     type: String,
  //     required:true,
  // },
  username:{
    type:String,
    unique:false,
    required:false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
