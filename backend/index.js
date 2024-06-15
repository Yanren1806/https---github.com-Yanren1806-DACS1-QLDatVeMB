// index.js

const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./app/config/db');
const course = require('./app/controllers/SiteControler');
const route = require('./route/index')

// Sử dụng CORS và Body-Parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json());

db.connect();

app.use(morgan('combined'))

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req,res) => {
  return res.render('home');
})

// Sử dụng thư mục tĩnh cho các tệp frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Trang chủ
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/html/home.html'));
// });

route(app);

// Lắng nghe kết nối
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
