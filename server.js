const express = require('express')
const app = express();
const port = 3000

const bodyParser = require('body-parser');
var exphbs = require('express-handlebars')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// CHANGE DATABASE NAME
require('./data/general-db');
require('./controllers/auth.js')(app);

module.exports = app;

app.listen(port, () => console.log(`App listening on port ${port}!`))
