import { Request, Response } from 'express';
import TaskService from '../services/taskService';

export default class taskController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {title, description, date} = request.body;

        const taskService = new TaskService();

        const task = await taskService.create({title, description, date});
        
        return response.status(201).json(task);
    }
}