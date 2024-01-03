import './SearchPage.css';
import axios from 'axios';
import { useGlobalSearchPage } from '../../context/SearchPageContext';

const SearchPage = () => {
  const {
    gender,
    setGender,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    country,
    setCountry,
    setSearchResults,
    searchResults,
  } = useGlobalSearchPage();

  const handleSearch = async () => {
    try {
      // Make a GET request to the API endpoint to get all users
      const response = await axios.get('http://localhost:5000/api/users');

      // Assuming the server responds with a 'data' property containing the user data
      const allUsers = response.data.data;

      // Filter the users based on the selected criteria
      const filteredUsers = allUsers.filter((user) => {
        const meetsCountryCriteria = country
          ? user.details.liveIn === country
          : true;

          const userMinAge = parseInt(
            user.preferences.ageRange.split('-')[0],
            10
          );
          const userMaxAge = parseInt(
            user.preferences.ageRange.split('-')[1],
            10
          );

const meetsAgeRangeCriteria = userMinAge >= minAge && userMaxAge <= maxAge;


        const meetsGenderCriteria = user.preferences.gender === gender;

                                            console.log(meetsGenderCriteria);

        return (
          meetsCountryCriteria && meetsAgeRangeCriteria && meetsGenderCriteria
        );
      });


      // Update the state with the filtered users
      setSearchResults(filteredUsers);
    } catch (error) {
      console.error('Error searching for users:', error);
    }
  };

  return (
    <div className="search-container">
      <h2>Find Your Match</h2>
      <div className="search-form">
        <div className="search-input">
          <label htmlFor="gender">Looking for:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Man</option>
            <option value="female">Woman</option>
          </select>
        </div>

        <div className="search-input">
          <label htmlFor="age">Age Range:</label>
          <input
            type="number"
            id="minAge"
            placeholder="Min"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            id="maxAge"
            placeholder="Max"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          />
        </div>

        <div className="search-input">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleSearch}>
          Find Match
        </button>
      </div>

      <h3>Search Results</h3>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((user) => (
            <li key={user._id}>
              <div>
                <img src={user.avatar} alt={`Avatar of ${user.name}`} />
              </div>
              <div>
                <h4>{user.name}</h4>
                <p>{user.description}</p>
                <p>
                  <strong>Location:</strong> {user.details.liveIn}
                </p>
                <p>
                  <strong>Work:</strong> {user.details.workAs}
                </p>
                {/* Add more details based on your schema */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching users found.</p>
      )}
    </div>
  );
};

export default SearchPage;

// import './SearchPage.css';
// import axios from 'axios';
// import { useGlobalSearchPage } from '../../context/SearchPageContext';

// const SearchPage = () => {
//   const {
//     gender,
//     setGender,
//     minAge,
//     setMinAge,
//     maxAge,
//     setMaxAge,
//     country,
//     setCountry,
//     setSearchResults,
//     searchResults,
//   } = useGlobalSearchPage();

//   const handleSearch = async () => {
//     try {
//       // Create a query string based on user input
//       const queryString = `gender=${gender}&ageRange=${minAge}-${maxAge}&country=${country}`;
//       // Make a GET request to the API endpoint
//       const response = await axios.get(
//         `http://localhost:5000/api/users?${queryString}`
//       );

//       setSearchResults(response.data.data);
//       console.log('setSearchResults:', setSearchResults);
//     } catch (error) {
//       console.error('Error searching for users:', error);
//     }
//   };

//   return (
//     <div className="search-container">
//       <h2>Find Your Match</h2>
//       <div className="search-form">
//         <div className="search-input">
//           <label htmlFor="gender">Looking for:</label>
//           <select
//             id="gender"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="male">Man</option>
//             <option value="female">Woman</option>
//           </select>
//         </div>

//         <div className="search-input">
//           <label htmlFor="age">Age Range:</label>
//           <input
//             type="number"
//             id="minAge"
//             placeholder="Min"
//             value={minAge}
//             onChange={(e) => setMinAge(e.target.value)}
//           />
//           <span>-</span>
//           <input
//             type="number"
//             id="maxAge"
//             placeholder="Max"
//             value={maxAge}
//             onChange={(e) => setMaxAge(e.target.value)}
//           />
//         </div>

//         <div className="search-input">
//           <label htmlFor="country">Country:</label>
//           <input
//             type="text"
//             id="country"
//             placeholder="Enter country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           />
//         </div>

//         <button type="button" onClick={handleSearch}>
//           Find Match
//         </button>
//       </div>

//       <h3>Search Results</h3>
//       {searchResults.length > 0 ? (
//         <ul>
//           {searchResults.map((user) => (
//             <li key={user._id}>
//               <div>
//                 <img src={user.avatar} alt={`Avatar of ${user.name}`} />
//               </div>
//               <div>
//                 <h4>{user.name}</h4>
//                 <p>{user.description}</p>
//                 <p>
//                   <strong>Location:</strong> {user.details.liveIn}
//                 </p>
//                 <p>
//                   <strong>Work:</strong> {user.details.workAs}
//                 </p>
//                 {/* Add more details based on your schema */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No matching users found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchPage;
