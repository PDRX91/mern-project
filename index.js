const express = require('express');
const PORT = process.env.PORT || 42069;
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res)=>{
    res.send({success: true, message: 'Here is some stuff from the backend'});
})

app.get('/', (req, res)=>{
    res.send('<h1>Import react from react....</h1>')
});

app.listen(PORT, ()=>{
    console.log("Server running on PORT: ", + PORT);
});


