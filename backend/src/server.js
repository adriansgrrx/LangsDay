import express from 'express';
import userRouter from './routes/userRouter.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

/* ---------- MIDDLEWARE ---------- */

// Dev CORS
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({ origin: 'http://localhost:5173' }));
} else {
  // Production: allow all origins or configure as needed
  app.use(cors());
}

app.use(express.json());

/* ---------- ROUTES ---------- */

app.use('/api/users', userRouter);

/* ---------- FRONTEND ---------- */

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

/* ---------- START SERVER FIRST ---------- */

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

/* ---------- CONNECT TO DATABASE ---------- */

connectDB()
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    // Do NOT exit process on Azure — app keeps running
  });
