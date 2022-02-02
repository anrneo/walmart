const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    brand: {
            type: String,
            required: true,
            trim: true
        },
        threshold: {
            type: Number,
            required: true,
            trim: true
        }
        ,
        discount: {
            type: Number,
            required: true,
            trim: true
        }
    }
    );

module.exports = model('discounts', userSchema);