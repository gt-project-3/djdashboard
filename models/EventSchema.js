const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  venue: {
    type: String,
    unique: false,
    required: false,
  },

  address: {
    type: String,
    required: true,
  },

  date_of: {
    type: Date,
    required: true,
  },
  playlists: {
    type: Array,
  },
  cover: {
    type: Number,
    required: false,
  },
  performing_artisits: {
    type: Array,
    required: false,
  },
  messages:{
    type:Array,
    required:false,
  }
});

const Event = mongoose.model('Event', EventSchema);

// Event.watch().on('change',data => console.log(data))

module.exports = Event;
