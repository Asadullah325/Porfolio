import app from './app.js';
import connectToDatabase from './database/Db.js';

const PORT = process.env.PORT || 3000;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
    process.exit(1);
});