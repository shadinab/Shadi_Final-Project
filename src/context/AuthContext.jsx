// import  { createContext, useState, useEffect } from 'react';
// import { setAuthToken, authAPI } from '../api/index';
// import { showToast } from '../utils/index';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();
//   const [loading, setLoading] = useState(true);

//   const loadUser = async () => {
//     if (localStorage.token) {
//       setAuthToken(localStorage.token);
//       try {
//         const res = await authAPI.getCurrentUser();
//         setUser(res.data.data);
//       } catch (err) {
//         handleError(err);
//         setUser(null);
//         localStorage.removeItem('token');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadUser();
//     // eslint-disable-next-line
//   }, []);

//   const handleAuthSuccess = (res) => {
//     localStorage.setItem('token', res.data.token);
//     loadUser();
//     setUser(res.data.data);
//   };

//   const handleError = (err) => {
//     let errorMessage = err.response.data.error;
//     if (errorMessage.includes('Duplicate')) {
//       errorMessage = 'This email is already in use';
//     } else if (!errorMessage) {
//       ('An unknown error occurred');
//     }
//     showToast(errorMessage, 'error');
//   };

//   const login = async (email, password) => {
//     try {
//       const res = await authAPI.login(email, password);
//       handleAuthSuccess(res);
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const register = async (formData) => {
//     try {
//       const res = await authAPI.register(formData);
//       handleAuthSuccess(res);
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const logout = async () => {
//     try {
//       await authAPI.logout();
//       localStorage.removeItem('token');
//       setUser(null);
//     } catch (err) {
//       handleError(err);
//     }
//   };

//   const value = {
//     user,
//     loading,
//     login,
//     register,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
