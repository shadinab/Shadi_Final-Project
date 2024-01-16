import { createContext, useContext, useState } from 'react';

const SearchPageContext = createContext({});

// A custom provider component that wraps your entire application
export const SearchPageProvider = ({ children }) => {
  // Define your state variables here
  const [gender, setGender] = useState('Man');
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(30);
  // const [ageRange, setAgeRange] = useState(null);
  const [country, setCountry] = useState('');

 const [searchResults, setSearchResults] = useState([]);

  const [MyData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add more state variables as needed

  // Wrap the children with the context provider, passing the state variables
  return (
    <SearchPageContext.Provider
      value={{
        gender,
        setGender,
        minAge,
        setMinAge,
        maxAge,
        setMaxAge,
        country,
        setCountry,
        searchResults,
        setSearchResults,
        MyData,
        setMyData,
        loading,
        setLoading,
      }}
    >
      {children}
    </SearchPageContext.Provider>
  );
};

// A custom hook to easily access the global state in any component
export const useGlobalSearchPage = () => {
  const context = useContext(SearchPageContext);
  if (!context) {
    throw new Error(
      'useGlobalSearchPage must be used within a SearchPageProvider'
    );
  }
  return context;
};





// import { createContext, useContext, useState } from 'react';

// const SearchPageContext = createContext({});

// // A custom provider component that wraps your entire application
// export const SearchPageProvider = ({ children }) => {
//   // Define your state variables here
//   const [gender, setGender] = useState('Man');
//   const [minAge, setMinAge] = useState(18);
//   const [maxAge, setMaxAge] = useState(30);
//   const [country, setCountry] = useState('');

//  const [searchResults, setSearchResults] = useState([]);

//   const [MyData, setMyData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Add more state variables as needed

//   // Wrap the children with the context provider, passing the state variables
//   return (
//     <SearchPageContext.Provider
//       value={{
//         gender,
//         setGender,
//         minAge,
//         setMinAge,
//         maxAge,
//         setMaxAge,
//         country,
//         setCountry,
//         searchResults,
//         setSearchResults,
//         MyData,
//         setMyData,
//         loading,
//         setLoading
//       }}
//     >
//       {children}
//     </SearchPageContext.Provider>
//   );
// };

// // A custom hook to easily access the global state in any component
// export const useGlobalSearchPage = () => {
//   const context = useContext(SearchPageContext);
//   if (!context) {
//     throw new Error(
//       'useGlobalSearchPage must be used within a SearchPageProvider'
//     );
//   }
//   return context;
// };
