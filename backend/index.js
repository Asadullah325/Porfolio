import app from './app.js';
import connectToDatabase from './database/Db.js';

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Failed to start server due to database connection error:', error);
    process.exit(1); // Exit the process with failure
});