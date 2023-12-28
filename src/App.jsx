import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import SearchPage from './Pages/SearchPage/SearchPage';
import MyProfile from './Pages/MyProfile/MyProfile';
import HomePage from './Pages/HomePage/HomePage';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import './Component/Navbar.css';
import UserProfile from './Pages/HomePageUseresPictures.jsx/UserProfile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/HomePage/:userId" element={<UserProfile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
