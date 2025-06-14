import express from 'express';
import router from './app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', router);
