import { FastifyReply, FastifyRequest } from 'fastify';
import { verifyPassword } from '../../utils/hash';
import { CreateUserInput, LoginInput } from './user.schema';
import * as userService from './user.service';
import { StatusCodes } from 'http-status-codes';

export const registerUserHandler = async (
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) => {
  try {
    const body = request.body;
    const user = await userService.createUser(body);
    return reply.code(StatusCodes.CREATED).send(user);
  } catch (error) {
    return reply.code(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};
