import type { ColumnDef } from '@tanstack/react-table';
import type { User } from '../../../entities/user/model';
import type { UseUserColumnsProps } from './types';

export const useUserColumns = ({
  onDelete,
}: UseUserColumnsProps): ColumnDef<User>[] => [
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'dob',
    header: 'Birthday',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => (
      <button
        onClick={e => onDelete(e, row.original.id)}
        aria-label="Delete user"
      >
        Delete
      </button>
    ),
  },
];
