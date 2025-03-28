import axios from 'axios';
import { USER_DATA_URL } from '../constants';

export const fetchUsers = async (page = 1) => {
  const res = await axios.get(`${USER_DATA_URL}?page=${page}`);
  return res.data;
};

export const updateUser = async (id, userData) => {
  return axios.put(`${USER_DATA_URL}/${id}`, userData);
};

export const deleteUser = async (id) => {
  return axios.delete(`${USER_DATA_URL}/${id}`);
};


