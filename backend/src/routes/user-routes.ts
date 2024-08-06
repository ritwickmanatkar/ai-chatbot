// Imports
import { Router } from 'express';
import { getAllUsers } from '../controllers/user-controllers.js';

// User Router Definition
const userRouter = Router();

// Routes
userRouter.get('/', getAllUsers);
// Test

// Export user Router
export default userRouter;