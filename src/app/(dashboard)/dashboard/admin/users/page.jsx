// src/app/(dashboard)/dashboard/admin/users/page.js
import { getUserSession } from '@/lib/core/session';
import { getUsers } from '@/lib/api/users';
import AdminUsersClient from './AdminUsersClient';

export default async function AdminUsersPage() {
  const session = await getUserSession();
  
  if (!session?.id) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Please log in to view users.</p>
      </div>
    );
  }

  // Fetch all users
  const users = await getUsers() || [];

  return (
    <AdminUsersClient 
      users={users}
      adminId={session.id}
    />
  );
}