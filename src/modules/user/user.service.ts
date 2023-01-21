import { hashPassword } from "../../utils/hash";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput) {
  const { password, ...rest } = input;

  const { hash, salt } = hashPassword(password);

  const user = await userRepo.createUser({
    data: { ...rest, salt, password: hash },
  });

  return user;
}

export async function findUserByEmail(email: string) {
  return userRepo.findUserByEmail(email)
  // return prisma.user.findUnique({
  //   where: {
  //     email,
  //   },
  // });
}

export async function findUsers(query:object) {
  return userRepo.findUsers(query);
  // return prisma.user.findMany({
  //   select: {
  //     email: true,
  //     name: true,
  //     id: true,
  //   },
  // });
}