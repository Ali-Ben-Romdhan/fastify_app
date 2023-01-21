import { hashPassword } from '../../utils/hash';
import { CreateUserInput } from './user.schema';
import * as userRepo from './user.repository';

export async function createUser(input: CreateUserInput) {
  const user = await userRepo.createUser(input);
  return user;
}

// export async function findUserByEmail(email: string) {
//   return userRepo.findUserByEmail(email);
//   // return prisma.user.findUnique({
//   //   where: {
//   //     email,
//   //   },
//   // });
// }

// export async function findUsers(query: object) {
//   return userRepo.findUsers(query);
//   // return prisma.user.findMany({
//   //   select: {
//   //     email: true,
//   //     name: true,
//   //     id: true,
//   //   },
//   // });
// }
