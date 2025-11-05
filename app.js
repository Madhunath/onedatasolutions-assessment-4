const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello, this site is deployed using K8s and i have implemented github actions to end-to-end deployment!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

