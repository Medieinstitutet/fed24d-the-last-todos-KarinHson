import { v4 as uuidv4 } from 'uuid';

export class Todo {
    id: string;
    content: string;
    created_at: Date;
    isDone: boolean;

    constructor (content: string, created_at: Date, isDone: boolean = false) {
        this.id = uuidv4(); 
        this.content = content;
        this.created_at = created_at;
        this.isDone = isDone;
    }

}