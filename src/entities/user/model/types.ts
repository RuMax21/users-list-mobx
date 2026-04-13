export type Sex = 'male' | 'female' | 'nonbinary';

export interface User {
  id: string;
  username: string;
  gender: Sex;
  address: string;
  name: string;
  email: string;
  dob: string;
}
