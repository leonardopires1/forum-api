import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async singupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return await this.userService.createUser(userData);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserModel | null> {
    return await this.userService.user({ id: Number(id) });
  }

  @UseGuards(AuthGuard)
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
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.deleteUser({ id: +id });
  }
}
