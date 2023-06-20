// import { Request, Response } from 'express';
// import User from '../models/User';

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;

//     const user = await User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     res.status(201).json(user); // Respond with the created user object
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Failed to create user' });
//   }
// };

import * as service from '../services/userServices';
import { CreateUserDTO, UpdateUserDTO } from '../../dto/ingredient.dto';
import { UserAttributes } from '../models/User';
import * as mapper from './mapper';

export const create = async (payload: CreateUserDTO): Promise<UserAttributes> => {
  return mapper.toIngredient(await service.create(payload));
};
export const update = async (id: number, payload: UpdateUserDTO): Promise<UserAttributes> => {
  return mapper.toIngredient(await service.update(id, payload));
};
export const getById = async (id: number): Promise<UserAttributes> => {
  return mapper.toIngredient(await service.getById(id));
};
export const deleteById = async (id: number): Promise<Boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async (): Promise<UserAttributes[]> => {
  return (await service.getAll()).map(mapper.toIngredient);
};
