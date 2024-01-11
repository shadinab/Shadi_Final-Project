// api.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
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



export const MyProfileUpdateUser = async (userData) => {
  try {
    const tokenconnectionId = localStorage.getItem('tokenconnectionId');
    console.log('Stored Connection ID:', tokenconnectionId);
    console.log('Update User Data:', userData);
    const response = await apiService.put(
      `/users/${tokenconnectionId}`,
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


export const MyProfileConnectionId = async (userData) => {
  try {
 const tokenconnectionId = (
   localStorage.getItem('tokenconnectionId') );
 
 console.log(`api tokenconnectionId ${tokenconnectionId} `);
    
    // Check if tokenconnectionId is available in localStorage
    if (!tokenconnectionId) {
      // Handle the case where tokenconnectionId is not available (optional)
      console.error('tokenconnectionId not found in localStorage');
      return null;
    }

    // Assuming you want to include tokenconnectionId in the request headers
    const response = await apiService.get(`users/${tokenconnectionId}`, {
      userData,
    });


    console.log('myProfileConnectionId Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting your profile data:', error);
    throw error;
  }
};


// chat-----------------------

export const sendMessage = async (messageData) => {
  try {
    const response = await apiService.post('/messages', messageData);
    console.log('Message saved to MongoDB');
    return response.data;
  } catch (error) {
    console.error('Error saving message to MongoDB:', error.message);
    throw error;
  }
};