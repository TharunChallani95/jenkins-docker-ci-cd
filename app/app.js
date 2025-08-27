const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Jenkins-Docker CI/CD Demo!</h1>');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});