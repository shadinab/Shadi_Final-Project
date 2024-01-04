// UserContext.js
// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const setLoggedInUser = (userData) => {
//     setUser(userData);
//   };

//   return (
//     <UserContext.Provider value={{ user, setLoggedInUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UserContext);
// };
