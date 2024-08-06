// Imports
import { Router } from 'express';
import userRouter from './user-routes.js';
import chatRouter from './chat-routes.js';

// Primary Router
const appRouter = Router();

// Secondary Routers
// For domain/api/v1/user
appRouter.use('/user', userRouter);
// For domain/api/v1/chats
appRouter.use('/chats', chatRouter);

// Export Primary Router
export default appRouter;
