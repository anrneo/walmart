const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        id: Number,
        brand: { type: String, required: true},
        description: { type: String, required: true},
        image: { type: String },
        price: Number
    }
    );

module.exports = model('products', noteSchema);