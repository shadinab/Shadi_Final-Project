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
import AcoountDetails from '../src/Pages/CreateAccount/AcoountDetails';
import Chat  from '../src/Pages/Chat/Chat';
// import { UserProvider } from '../src/context/UserContext';
import LogOut from '../src/Pages/LogOut/LogOut'

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
              path="/SignUp/CreateAccount/AcoountDetails/interests"
              element={<InterestsPage />}
            />
            <Route path="/SignUp/CreateAccount" element={<CreateAccount />} />
            <Route
              path="/SignUp/CreateAccount/AcoountDetails"
              element={<AcoountDetails />}
            />

            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/LogOut" element={<LogOut />} />

            <Route path="/:userId" element={<UserProfile />} />
            <Route path="/:userId/chat" element={<Chat />} />
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
// import InterestsPage from './Pages/InterestsPage/InterestsPage';
// import CreateAccount from './Pages/CreateAccount/CreateAccount';
// import { SearchPageProvider } from './context/SearchPageContext';
// import AcoountDetails from '../src/Pages/CreateAccount/AcoountDetails';
// // import { UserProvider } from '../src/context/UserContext';
// import LogOut from '../src/Pages/LogOut/LogOut'

// function App() {
//   return (
//     <>
//       {/* <UserProvider> */}
//       <SearchPageProvider>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/search" element={<SearchPage />} />
//             <Route path="/MyProfile" element={<MyProfile />} />
//             <Route path="/" element={<HomePage />} />

//             <Route path="/SignUp" element={<SignUp />} />
//             <Route
//               path="/SignUp/CreateAccount/AcoountDetails/interests"
//               element={<InterestsPage />}
//             />
//             <Route path="/SignUp/CreateAccount" element={<CreateAccount />} />
//             <Route
//               path="/SignUp/CreateAccount/AcoountDetails"
//               element={<AcoountDetails />}
//             />

//             <Route path="/LogIn" element={<LogIn />} />
//             <Route path="/LogOut" element={<LogOut />} />

//             <Route path="/:userId" element={<UserProfile />} />
//           </Routes>
//         </Router>
//       </SearchPageProvider>
//       {/* </UserProvider> */}
//     </>
//   );
// }

// export default App;
