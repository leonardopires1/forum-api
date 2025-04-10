import { Answer, Questions, User } from "@prisma/client";

export class Question implements Questions {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User; 
    answers: Answer[];
}
