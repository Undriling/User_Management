import { useState, useEffect } from 'react';
import { deleteUser, fetchUsers } from '../users/users';
// import { fetchUsers, deleteUser } from '../api/users';

const useUsersData = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

 
  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers(page);
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((e) => e.id !== id));
      alert('User deleted');
    } catch {
      alert('Failed to delete user.');
    }
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((e) => (e.id === updatedUser.id ? { ...e, ...updatedUser } : e))
    );
  };

  useEffect(() => {
    loadUsers();
  }, [page]);


  return {
    users,
    page,
    totalPages,
    setPage,
    handleDelete,
    updateUser,
    loading
  }
};

export default useUsersData;
