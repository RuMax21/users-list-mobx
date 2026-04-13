import { instanceApi } from '../../../shared/api';
import { USER_FIELDS, type User } from '../model';

export const getUser = async (): Promise<User> => {
  const { data } = await instanceApi.get('/randomuser', {
    params: {
      count: 1,
      fields: USER_FIELDS,
    },
  });

  if (!data || data.length === 0) {
    throw new Error('User not found');
  }

  return data[0];
};
