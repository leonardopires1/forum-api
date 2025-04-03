import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async singupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return await this.userService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserModel | null> {
    return await this.userService.user({ id: Number(id) });
  }

  @Put()
  async updateUser(
    @Body() userData: Prisma.UserUpdateInput,
    @Param('id') id: string,
  ): Promise<UserModel> {
    return await this.userService.updateUser({
      data: userData,
      where: { id: +id },
    });
  }
  
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.deleteUser({ id: +id });
  }
}
