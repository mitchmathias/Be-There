const mongoose = require('mongoose');

const Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);



const EventSchema = new Schema({
    title: { type: String, required: true },
    photoUrl: {type: String},
    date: { type: Date, default: Date.now, required: true },
    body: {type: String},
    meta: {
        favs: Number,
        default: 0
    },
    location: {
        type: { type: String }, coordinates: [number],
        id: false
    }
});




const Event = mongoose.model("Event", EventSchema);

module.exports = Event;