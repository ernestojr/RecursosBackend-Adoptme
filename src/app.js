import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import viewsRouter from './routes/index.js';
import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect('mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/ecommerce');

app.use(express.json());
app.use(cookieParser());
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
