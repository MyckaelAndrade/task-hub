import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
} from 'typeorm';

@Entity('task')
class Task{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: Date;
}

export default Task;