import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/email', router);

// Health check route
app.get('/', (req, res) => {
  res.send('******** Server is running! ********');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

