import { Op } from 'sequelize';
import User from '../../models/User';
import { UserAttributesInput, UserAttributesOutput } from '../../models/User';
import { GetAllUserFilters } from './types';

export const create = async (payload: UserAttributesInput): Promise<UserAttributesOutput> => {
  const user = await User.create(payload);
  return user;
};

export const update = async (id: number, payload: Partial<UserAttributesInput>): Promise<UserAttributesOutput> => {
  const user = await User.findByPk(id);
  if (!user) {
    // @todo throw custom error
    throw new Error('not found');
  }
  const updatedUser = await (user as User).update(payload);
  return updatedUser;
};

export const getById = async (id: number): Promise<UserAttributesOutput> => {
  const user = await User.findByPk(id);
  if (!user) {
    // @todo throw custom error
    throw new Error('not found');
  }
  return user;
};

export const deleteById = async (id: number): Promise<boolean> => {
  const deletedUserCount = await User.destroy({
    where: { id },
  });
  return !!deletedUserCount;
};

// export const getAll = async (filters?: GetAllUserFilters): Promise<UserAttributesOutput[]> => {
//   return User.findAll({
//     where: {
//       ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
//     },
//     ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
//   });
// };

export const getAll = async (): Promise<UserAttributesOutput[]> => {
  const users = await User.findAll();
  return users;
};
