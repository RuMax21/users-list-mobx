import { useState } from 'react';
import { useStore } from '../../shared/hooks/useStore';
import type { User } from '../../entities/user/model';
import { observer } from 'mobx-react-lite';
import { useUserColumns } from './model';
import { Table } from '../../shared/ui/Table/Table';

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

  const columns = useUserColumns({ onDelete: handleDeleteUser });

  return (
    <section>
      <div>
        <h1>Users</h1>
        <button onClick={handleAddUser}>
          {userStore.isLoading ? 'Loading...' : 'Add User'}
        </button>
      </div>

      {userStore.allUsers.length === 0 ? (
        <div>No users yet</div>
      ) : (
        <Table
          rows={userStore.allUsers}
          columns={columns}
          onRowClick={(user: User) => setSelectedUser(user)}
        />
      )}
    </section>
  );
});
