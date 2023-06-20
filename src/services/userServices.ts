import * as userDal from '../db/dal/user';
// import {GetAllIngredientsFilters} from '../dal/types'
import { UserAttributesInput, UserAttributesOutput } from '../models/User';

export const create = (payload: UserAttributesInput): Promise<UserAttributesOutput> => {
  return userDal.create(payload);
};
export const update = (id: number, payload: Partial<UserAttributesInput>): Promise<UserAttributesOutput> => {
  return userDal.update(id, payload);
};
export const getById = (id: number): Promise<UserAttributesOutput> => {
  return userDal.getById(id);
};
export const deleteById = (id: number): Promise<boolean> => {
  return userDal.deleteById(id);
};
export const getAll = (): Promise<UserAttributesOutput[]> => {
  return userDal.getAll();
};
