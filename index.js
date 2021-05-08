var express = require('express');
var bodyParser = require('body-parser');
var cookiePaser = require('cookie-parser');

var authRoutes = require('./routes/auth.route');
var traineeRoutes = require('./routes/trainee.route');
var trainerRoutes = require('./routes/trainer.route');
var staffRoutes = require('./routes/staff.route');
var adminRoutes = require('./routes/admin.route');

var authMiddleware = require('./middlewares/auth.middleware');

var db = require('./db');
db.connect();

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiePaser());

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('auth/login')
});

app.use('/auth', authRoutes);
app.use('/trainee', authMiddleware.requireAuth, authMiddleware.checkLogin('trainee'), traineeRoutes);
app.use('/trainer', authMiddleware.requireAuth, authMiddleware.checkLogin('trainer'), trainerRoutes);
app.use('/staff', authMiddleware.requireAuth, authMiddleware.checkLogin('staff'), staffRoutes);
app.use('/admin', authMiddleware.requireAuth, authMiddleware.checkLogin('admin'), adminRoutes);

var PORT = process.env.PORT || 8000
app.listen(PORT);
console.debug("Server is running on port: " + PORT);
