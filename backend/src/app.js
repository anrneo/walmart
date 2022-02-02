const express = require('express');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/products', require('./routes/products'));
app.use('/api/discounts', require('./routes/discounts'));


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function guard(req, res, next) {
    const bearer = req.headers['authorization']
    if ( bearer != undefined) {
        const token = bearer.split(' ')
        jwt.verify(token[1], token[0], (err, data)=>{
            if (err) {
                res.json(false);
            }else{
                next()
            }
        })
    }else{
        res.json(false);
    }
}

module.exports = app;
