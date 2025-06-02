export class Todo {
    content: string;
    created_at: Date;
    isDone: boolean;

    constructor (content: string, created_at: Date, isDone: boolean) {
        this.content = content;
        this.created_at = created_at;
        this.isDone = isDone;
    }

}