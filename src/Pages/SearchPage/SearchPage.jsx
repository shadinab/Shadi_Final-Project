
import { useState } from 'react';
import './SearchPage.css';

const SearchPage = ({ onSearch }) => {
  const [gender, setGender] = useState('male');
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(30);
  const [country, setCountry] = useState('');

  const handleSearch = () => {
    // Form a search query based on user input
    const searchQuery = {
      gender,
      ageRange: `${minAge} - ${maxAge}`,
      country,
    };

    // Pass the search query to the parent component
    onSearch(searchQuery);
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
    </div>
  );
};

export default SearchPage;