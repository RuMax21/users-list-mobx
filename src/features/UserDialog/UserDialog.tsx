import { Button } from '../../shared/ui';
import type { UserDialogProps, UserUpdateFormValues } from './model/types';
import { UserEditForm } from './ui';
import styles from './UserDialog.module.scss';

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
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.dialog}>
        {/* <Button className={styles.closeButton} onClick={onClose}>x</Button> */}

        <div className={styles.header}>
          <h2 className={styles.name}>{user.name}</h2>
          <span className={styles.username}>{user.username}</span>
        </div>

        <div className={styles.info}>
          <span>Gender: {user.gender}</span>
        </div>

        <UserEditForm
          defaultValues={defaultValues}
          onCancel={onClose}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
