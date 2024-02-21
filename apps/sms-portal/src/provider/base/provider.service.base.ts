/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Provider, // @ts-ignore
  Message,
} from "@prisma/client";

export class ProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProviderCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderCountArgs>
  ): Promise<number> {
    return this.prisma.provider.count(args);
  }

  async providers<T extends Prisma.ProviderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderFindManyArgs>
  ): Promise<Provider[]> {
    return this.prisma.provider.findMany(args);
  }
  async provider<T extends Prisma.ProviderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderFindUniqueArgs>
  ): Promise<Provider | null> {
    return this.prisma.provider.findUnique(args);
  }
  async createProvider<T extends Prisma.ProviderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderCreateArgs>
  ): Promise<Provider> {
    return this.prisma.provider.create<T>(args);
  }
  async updateProvider<T extends Prisma.ProviderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderUpdateArgs>
  ): Promise<Provider> {
    return this.prisma.provider.update<T>(args);
  }
  async deleteProvider<T extends Prisma.ProviderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderDeleteArgs>
  ): Promise<Provider> {
    return this.prisma.provider.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.provider
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }
}
