// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = async (userData) => {
  try {
    const response = await apiService.post('/users', userData);
    console.log('createUser Response:', response.data); // Log response to console
    return response.data;
  } catch (error) {
    console.error('createUser Error:', error); // Log error to console
    throw error; // Rethrow the error
  }
};

export const updateUser = async (userData) => {
  try {
    const storedConnectionId = localStorage.getItem('connectionId');
    console.log('Stored Connection ID:', storedConnectionId);
    console.log('Update User Data:', userData);
    const response = await apiService.put(
      `/users/${storedConnectionId}`,
      userData
    );
    console.log('updateUser Response:', response.data); // Log response to console
    return response.data;
  } catch (error) {
    console.error('updateUser Error:', error); // Log error to console
    throw error; // Rethrow the error
  }
};

export const createSignUpUser = async (userData) => {
  try {
    const response = await apiService.post('/auth/register', userData);
    console.log('createSignUpUser Response:', response.data); // Log response to console
    localStorage.setItem('connectionId', response.data.connectionId);
    return response.data;
  } catch (error) {
    console.error('createSignUpUser Error:', error); // Log error to console
    throw error; // Rethrow the error
  }
};

export const myProfileConnectionId = async (userData) => {
  try {
    const storedConnectionId = localStorage.getItem('connectionId');
    const response = await apiService.get(
      `users/${storedConnectionId}`,
      userData
    );
    console.log('myProfileConnectionId Response:', response.data); // Log response to console
    return response.data;
  } catch (error) {
    console.error(' Error getting your profile data:', error); // Log error to console
    throw error; // Rethrow the error
  }
};
