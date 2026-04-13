import { useState } from 'react';
import { useStore } from '../../shared/hooks/useStore';
import type { User } from '../../entities/user/model';
import { observer } from 'mobx-react-lite';
import { useUserColumns } from './model';
import { Table } from '../../shared/ui/Table/Table';
import { UserDialog } from '../../features/UserDialog/UserDialog';
import type { UserUpdateFormValues } from '../../features/UserDialog/model/types';

export const UsersDashboard = observer(() => {
  const { userStore } = useStore();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddUser = () => {
    userStore.fetchUser();
  };

  const handleDeleteUser = (e: React.MouseEvent, userId: string) => {
    e.stopPropagation();
    userStore.removeUser(userId);
  };

  const handleSave = (userId: string, data: UserUpdateFormValues) => {
    userStore.updateUser(userId, data);
  };

  const columns = useUserColumns({ onDelete: handleDeleteUser });

  return (
    <section>
      <div>
        <h1>Users</h1>
        <button onClick={handleAddUser}>
          {userStore.isLoading ? 'Loading...' : 'Add User'}
        </button>
      </div>

      <Table
          rows={userStore.allUsers}
          columns={columns}
          onRowClick={(user: User) => setSelectedUser(user)}
          noDataComponent={<div>No users yet</div>}
        />

      {selectedUser && (
        <UserDialog
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleSave}
        />
      )}
    </section>
  );
});
