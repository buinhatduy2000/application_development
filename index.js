var express = require('express');
var bodyParser = require('body-parser');
var cookiePaser = require('cookie-parser');

var userRoutes = require('./routes/users.routes');
var authRoutes = require('./routes/auth.route');
var adminRoutes = require('./routes/admin.route');
var staffRoutes = require('./routes/staff.route');

var authMiddleware = require('./middlewares/auth.middleware');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookiePaser());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('auth/login')
});

app.use('/admin', authMiddleware.requireAuth, adminRoutes);
app.use('/staff', authMiddleware.requireAuth, staffRoutes);
app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/auth', authRoutes);

app.listen(3000, function () {
    console.log('Server listening on: ' + port);
});