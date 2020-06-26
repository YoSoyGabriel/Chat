// import express 

const express = require('express');
const app = express(); 
const port = 3000; 

// create a server using express 
// listen to port 3000




app.listen(port, () =>{
  console.log('listening on por 3000');

});

app.get('/', (req, res) => {
  res.send(''); 
});




