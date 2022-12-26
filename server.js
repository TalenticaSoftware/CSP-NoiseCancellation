const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var count = 0;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.use(
  bodyParser.json({
    type: ['application/json', 'application/csp-report', 'application/reports+json'],
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index_reportURI.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/index_reportURI.html'));
});

app.post('/__cspreport__', (req, res) => {
  count = count + 1;
  console.log(count)
});

const server = app.listen(process.env.PORT || 5500, () => {
  const { port } = server.address();
  console.log(`Server running on PORT ${port}`);
});
