import express from 'express';
import { addAccountController } from '../controller/accountController.js';

const router = express.Router();

// Route to add an account
router.post('/add', addAccountController);

export default router;  // Use `export default` instead of `module.exports`
