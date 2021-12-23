const express = require('express');
const server = express();
server.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});
server.listen(3000,()=>console.log("app is running on http://0.0.0.0:3000"));
