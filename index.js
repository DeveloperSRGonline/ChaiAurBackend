require('dotenv').config()
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('Welcome to twitter')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});