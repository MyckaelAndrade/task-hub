import { Router } from 'express';
import taskRouter from './taskRouter';

const routes = Router();

routes.use('/task', taskRouter);

export default routes;
