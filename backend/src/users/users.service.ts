import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<Admin | null> {
    return this.prisma.admin.findUnique({ where: { email } });
  }

  createUser(params: {
    email: string;
    passwordHash: string;
    name?: string;
  }): Promise<Admin> {
    return this.prisma.admin.create({
      data: {
        email: params.email,
        password: params.passwordHash,
        name: params.name ?? 'Admin',
      },
    });
  }

  findById(id: string): Promise<Admin | null> {
    return this.prisma.admin.findUnique({ where: { id } });
  }
}
