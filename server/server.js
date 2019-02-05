const path = require('path');
//specific path to the public directory
const publicPath = path.join(__dirname, '../public');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.use(express.static(publicPath));




app.listen(port, ()=>{
    console.log(`app active on port ${port}`);
});
