export class Todo {
    id: number;
    content: string;
    created_at: Date;
    isDone: boolean;

    constructor (content: string, created_at: Date, isDone: boolean) {
        this.id = Date.now();
        this.content = content;
        this.created_at = created_at;
        this.isDone = isDone;
    }

}