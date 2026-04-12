import type { User } from '../../../entities/user/model';

export type UserUpdateFormValues = Partial<{
  email: string;
  dob: string;
  address: string;
}>;

export interface UserEditFormProps {
  defaultValues: UserUpdateFormValues;
  onCancel: () => void;
  onSave: (data: UserUpdateFormValues) => void;
}

export interface UserDialogProps {
  user: User;
  onClose: () => void;
  onSave: (userId: string, data: UserUpdateFormValues) => void;
}
