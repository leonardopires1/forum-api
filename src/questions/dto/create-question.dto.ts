import { Answer, User } from '@prisma/client';

export class CreateQuestionDto {
  title: string;
  body: string;
}
