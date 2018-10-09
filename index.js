const express = require('express');
const PORT = process.env.PORT || 42069;
const {resolve} = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

function log(message){
    return (req, res, next)=>{
        console.log(message);
        next();
    }
};

function getUser() {
    return (req, res, next) => {
        req.user = { name: 'Peter Parker', age: 15};
        next();
    };
};

app.use(log('This goes everywhere'));

app.get('/api/get-stuff', (req, res)=>{
    res.send({success: true, message: 'Here is some stuff from the backend'});
});

app.post('/api/get-user', getUser(), (req, res)=>{
    res.send({success: true, user:req.user});
});

app.get('*', (req, res) =>{
    //this is a default path resolution thing. any requests that arent define, like about, go here
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, ()=>{
    console.log("Server running on PORT: ", + PORT);
});


