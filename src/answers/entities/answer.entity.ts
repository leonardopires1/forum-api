import { Question } from "src/questions/entities/question.entity";
import { User } from "src/user/entities/user.entity";
import { Answer as PrismaAnswer } from "@prisma/client";

export class Answer implements PrismaAnswer{
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    questionId: number;
    user: User; 
    question: Question; 
}
