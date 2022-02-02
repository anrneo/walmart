const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb+srv://anreno17:yOVlC74ul9ohJLA3@cluster0.umk1w.mongodb.net/walmart?retryWrites=true&w=majority';


mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
