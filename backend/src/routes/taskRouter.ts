import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TaskController from '../api/controllers/taskController';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      date: Joi.date().required(),
    },
  }),
  taskController.create,
);


export default taskRouter;
