import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import SearchPage from './Pages/SearchPage/SearchPage';
import MyProfile from './Pages/MyProfile/MyProfile';
import HomePage from './Pages/HomePage/HomePage';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/LogIn/LogIn';
import './Component/Navbar.css';
import UserProfile from './Pages/HomePageUseresPictures.jsx/UserProfile';
import InterestsPage from './Pages/InterestsPage/InterestsPage';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import { SearchPageProvider } from './context/SearchPageContext';
// import { UserProvider } from '../src/context/UserContext';

function App() {
  return (
    <>
      {/* <UserProvider> */}
        <SearchPageProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/search" element={<SearchPage />} />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/" element={<HomePage />} />

              <Route path="/SignUp" element={<SignUp />} />
              <Route
                path="/SignUp/CreateAccount/interests"
                element={<InterestsPage />}
              />
              <Route path="/SignUp/CreateAccount" element={<CreateAccount />} />

              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/:userId" element={<UserProfile />} />
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </SearchPageProvider>
      {/* </UserProvider> */}
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import SearchPage from './Pages/SearchPage/SearchPage';
// import MyProfile from './Pages/MyProfile/MyProfile';
// import HomePage from './Pages/HomePage/HomePage';
// import SignUp from './Pages/SignUp/SignUp';
// import LogIn from './Pages/LogIn/LogIn';
// import './Component/Navbar.css';
// import UserProfile from './Pages/HomePageUseresPictures.jsx/UserProfile';
// import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/MyProfile" element={<MyProfile />} />
//           <Route path="/HomePage" element={<HomePage />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/HomePage/:userId" element={<UserProfile />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
