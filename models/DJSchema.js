const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DjSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  password:{
      type: String,
      required:true,
  },

  djName:{
      type: String,
      unique: true,
      required:true,
  },
  playlists:{
      type:Array,
  },
  events:[
    {
      type:Schema.Types.ObjectId,
      ref:"Event"
    }
  ]
});

const Dj = mongoose.model('Dj', DjSchema);

module.exports = Dj;
