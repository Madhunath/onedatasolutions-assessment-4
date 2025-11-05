const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello, this site is deployed using kubernetes and github actions!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

