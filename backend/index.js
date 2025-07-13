import app from './app.js';
import connectToDatabase from './database/Db.js';
import serverless from 'serverless-http';

await connectToDatabase();

export const handler = serverless(app); // ✅ export the handler Vercel/Netlify expects
