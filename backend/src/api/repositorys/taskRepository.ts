import { EntityRepository, Repository } from 'typeorm';
import Task from "../models/Task";

@EntityRepository(Task)
class TaskRepository extends Repository<Task>{
    public async findById(id: number): Promise<Task | undefined> {
    return this.findOne({ where: { id } });
  }
}

export default TaskRepository;