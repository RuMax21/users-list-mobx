import { Button } from '../../shared/ui';
import type {
  UserDialogProps,
  UserEditFormProps,
  UserUpdateFormValues,
} from './model/types';
import { UserEditForm } from './ui';

export function UserDialog({ user, onClose, onSave }: UserDialogProps) {
  const handleSave = (data: UserUpdateFormValues) => {
    onSave(user.id, data);
    onClose();
  };

  const defaultValues: UserUpdateFormValues = {
    email: user.email,
    dob: user.dob ? String(user.dob).slice(0, 10) : '',
    address: user.address,
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div onClick={handleBackdropClick}>
      <div>
        <Button onClick={onClose}>X</Button>
      </div>

      <div>
        <h2>{user.name}</h2>
        <span>{user.username}</span>
      </div>

      <div>
        <span>
          <strong>Gender: {user.gender}</strong>
        </span>
      </div>

      <UserEditForm
        defaultValues={defaultValues}
        onCancel={onClose}
        onSave={handleSave}
      />
    </div>
  );
}
