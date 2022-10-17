//importing express
const express = require('express');
const cors = require('cors')

//initializing a new app
const app = express();

//cors is the middleware
//cors is for cross origin resource sharing 
app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

//running the server on the port
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));