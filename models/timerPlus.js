const mongoose = require('mongoose');

const TimerPlusSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    divId: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    selected: {
        type: Number,
    },
    swatches: {
        type: [String],
    },
    date: {
        type: Date,
        default: Date.now
    },
    isShow: {
        type: String,
        default: true
    },
    eventInput: {
        type: String,
    },
    evenCategoryInput: {
        type: String,
    },
    eventLabelInput: {
        type: String,
    },
    wysiwyg: {
        type: String
    },
    wysiwygEditor: {
        type: String
    },
    timeSchedule: {
        Sunday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Monday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Tuesday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Wednesday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Thursday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Friday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
        Saturday: {
            openHour: { type: String },
            closeHour: { type: String },
        },
    }
});

module.exports = mongoose.model('TimerPlus', TimerPlusSchema);