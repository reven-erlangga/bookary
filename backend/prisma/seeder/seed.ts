import { PrismaClient } from '@prisma/client';
import { userSeed } from './db/user';

const prisma = new PrismaClient();

async function main() {
  for (const user of userSeed) {
    // await prisma.user.create({ data: user });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
