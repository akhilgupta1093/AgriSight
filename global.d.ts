// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined; // Use `var` instead of `let` or `const` to declare a global variable
}
