import { getCustomRepository } from 'typeorm';
import Task from "../models/Task";
import AppError from '../middlewares/AppError';

interface IRequest{
    title: string;
    description: string;
    date: Date;
}

class taskService{
    public async create({title, description, date}: IRequest): Promise<Task> {
        const taskRepository = getCustomRepository(TaskRepository);


        const task = taskRepository.create({title, description, date});
        await taskRepository.save(task);
        return task;
    }
}

export default taskService;