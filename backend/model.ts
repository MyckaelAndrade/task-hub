import {
    Column,
    Entity,
} from 'typeorm';

@Entity("task")
class Task{
    @Column()
    title: string;

    @Column
    description: string;

    @Column
    date: Date;
}

export default Task;