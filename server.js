import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";  
import accountRoutes from './routes/accountrouter.js';
 

// Configuration of env
dotenv.config();
// Rest objects
const app = express();
// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
 
// Routes
 
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Account Manager Website</h1>');
});

app.use('/api/accounts', accountRoutes);
const port = process.env.port || 5000;  
// server Run
app.listen(port, () =>
  console.log(`Server running on ${process.env.msg} port ${port}`.bgCyan.white)
);