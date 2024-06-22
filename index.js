const express = require('express');
const app = express();
const cors = require('cors');
const data_routes = require('./routes/date_routes.js')

app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api',data_routes)

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
