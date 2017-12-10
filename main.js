const express = require('express');
const app = express();

let port = 8081;

// Serve static files
app.use(express.static('public'))
app.use(express.static('public/html'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
