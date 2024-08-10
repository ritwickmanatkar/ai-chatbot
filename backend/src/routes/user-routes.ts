// Imports
import { Router } from 'express';
import { getAllUsers, userSignup, userLogin, verifyUser } from '../controllers/user-controllers.js';
import { signupValidator, loginValidator, validate } from "../utils/validators.js";
import { verifyToken } from '../utils/token-manager.js';

// User Router Definition
const userRouter = Router();

// Routes
userRouter.get('/', getAllUsers);
userRouter.post('/signup', validate(signupValidator), userSignup)
userRouter.post('/login', validate(loginValidator), userLogin)
userRouter.get('/auth-status', verifyToken, verifyUser);

// Export user Router
export default userRouter;