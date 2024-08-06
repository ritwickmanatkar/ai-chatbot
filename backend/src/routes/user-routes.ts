// Imports
import { Router } from 'express';
import { getAllUsers, userSignup } from '../controllers/user-controllers.js';

// User Router Definition
const userRouter = Router();

// Routes
userRouter.get('/', getAllUsers);
userRouter.post('/signup', userSignup)

// Export user Router
export default userRouter;