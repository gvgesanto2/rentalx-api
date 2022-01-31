import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { TypeormUsersRepository } from "../modules/users/repositories/implementations/TypeormUsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Not authorized to access this route", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(token, "umasenhadeteste") as IPayload;

    const usersRepository = new TypeormUsersRepository();
    const existingUser = usersRepository.findById(userId);

    if (!existingUser) {
      throw new AppError("This user does not exist!", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
