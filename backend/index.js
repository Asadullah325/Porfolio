// /api/backend/index.js
import serverless from 'serverless-http';
import app from './app.js';
import connectToDatabase from './database/Db.js';

let isDbConnected = false;

const handler = async (req, res) => {
  if (!isDbConnected) {
    try {
      await connectToDatabase();
      isDbConnected = true;
    } catch (err) {
      console.error('Database connection failed:', err);
      res.status(500).send('Database connection error');
      return;
    }
  }

  const expressHandler = serverless(app);
  return expressHandler(req, res);
};

export default handler;
