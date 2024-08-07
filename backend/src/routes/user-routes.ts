// Imports
import { Router } from 'express';
import { getAllUsers, userSignup, userLogin } from '../controllers/user-controllers.js';
import { signupValidator, loginValidator, validate } from "../utils/validators.js";

// User Router Definition
const userRouter = Router();

// Routes
userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator), userSignup)
userRouter.post('/login', validate(loginValidator), userLogin)

// Export user Router
export default userRouter;