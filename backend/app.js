import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

export default app;
