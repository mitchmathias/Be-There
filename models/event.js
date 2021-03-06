const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: { type: String, required: true },
    organization: {type: String},
    date: { type: Date, default: Date.now, required: true },
    body: {type: String},
    meta: {
        favs: Number,
        default: 0
    },
    location: {
        type: {
            type: String
            
        } 
    }        
});

EventSchema.set('toObject', { getters: true });
EventSchema.set('toJSON', { getters: true });

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;