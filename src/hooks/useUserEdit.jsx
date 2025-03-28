import { useState } from 'react';
import { updateUser } from '../users/users';

const useUserDataEdit = (user, onSuccess) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, formData);
      alert('User updated!');
      onSuccess({ ...user, ...formData });
    } catch {
      alert('Failed to update user');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  }
};

export default useUserDataEdit;
