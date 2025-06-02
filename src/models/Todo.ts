export class Todo {
    id: number;
    content: string;
    created_at: Date;
    isDone: boolean;

    constructor (id: number, content: string, created_at: Date, isDone: boolean) {
        this.id = id; 
        this.content = content;
        this.created_at = created_at;
        this.isDone = isDone;
    }

}