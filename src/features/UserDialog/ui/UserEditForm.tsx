import { useForm } from 'react-hook-form';
import type { UserEditFormProps, UserUpdateFormValues } from '../model/types';
import { FormField } from '../../../shared/ui/FormField';
import {
  addressValidation,
  birthdayValidation,
  emailValidation,
} from '../../../entities/user/model';
import { Button } from '../../../shared/ui';
import styles from '../UserDialog.module.scss';

export function UserEditForm({
  defaultValues,
  onCancel,
  onSave,
}: UserEditFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateFormValues>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div>
        <div className={styles.fields}>
          <FormField
            label="Email"
            error={errors.email}
            {...register('email', emailValidation)}
          />{' '}
          <FormField
            label="Birthday"
            error={errors.dob}
            {...register('dob', birthdayValidation)}
            type="date"
          />{' '}
          <FormField
            label="Address"
            error={errors.address}
            {...register('address', addressValidation)}
          />
        </div>

        <div className={styles.actions}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
}
