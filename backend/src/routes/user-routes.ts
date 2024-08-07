// Imports
import { Router } from 'express';
import { getAllUsers, userSignup } from '../controllers/user-controllers.js';
import { signupValidator, validate } from "../utils/validators.js";

// User Router Definition
const userRouter = Router();

// Routes
userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator), userSignup)

// Export user Router
export default userRouter;