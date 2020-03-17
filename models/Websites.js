const mongoose = require('mongoose');

const WebsitesSchema = mongoose.Schema({
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

    date: {
        type: Date,
        default: Date.now
    },
    isShow: {
        type: String,
        default: true
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
    timeSchedule: {
        Sunday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Monday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Tuesday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Wednesday	: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Thursday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Friday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
        Saturday: {
            openHour: { type: String },
            // openMin: { type: String },
            closeHour: { type: String },
            // closeMin: { type: String },
        },
    }
});

module.exports = mongoose.model('website', WebsitesSchema);