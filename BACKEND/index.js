const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('mongoose');
const session = require('express-session');

const userRouter = require('./src/routers/userRouter');
const dogRouter = require('./src/routers/dogRouter');
const breedRouter = require('./src/routers/breedRouter');
const colorRouter = require('./src/routers/colorRouter');
const authRouter = require('./src/routers/authRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

require('./src/passport')(app);

app.use('/api/user', userRouter);
app.use('/api/dog', dogRouter);
app.use('/api/breed', breedRouter);
app.use('/api/color', colorRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => debug(`Server running in ${chalk.green(port)}`));
