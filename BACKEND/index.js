const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('mongoose');

const userRouter = require('./routers/userRouter');
const dogRouter = require('./routers/dogRouter');
const breedRouter = require('./routers/breedRouter');
const ageRouter = require('./routers/ageRouter');
const sexRouter = require('./routers/sexRouter');
const sizeRouter = require('./routers/sizeRouter');
const colorRouter = require('./routers/colorRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

connect(process.env.DDBB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/user', userRouter);
app.use('/api/dog', dogRouter);
app.use('/api/breed', breedRouter);
app.use('/api/age', ageRouter);
app.use('/api/sex', sexRouter);
app.use('/api/size', sizeRouter);
app.use('/api/color', colorRouter);

app.listen(port, () => debug(`Server running in ${chalk.green(port)}`));
