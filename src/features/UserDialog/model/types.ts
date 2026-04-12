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
