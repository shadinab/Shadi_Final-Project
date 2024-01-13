import { Link } from 'react-router-dom';
import './Navbar.css';
import { useGlobalSearchPage } from '../context/SearchPageContext';
import svg from '../../public/svg.png'
const Navbar = () => {
  const { MyData } = useGlobalSearchPage();

  return (
    <nav className="navbar">
      <div className="leftContainer">
        {/* Left side SVG as a link to the home page */}
        <Link to="/LogIn" className="navLink">
          Log In
        </Link>
        <Link to="/" className="logoLink">
          <img src={svg} alt="Logo" className="logo" />
        </Link>
        {MyData && (
          <Link to="/LogOut" className="navLink">
            Log Out
          </Link>
        )}

        {/* <Link to="/LogOut" className="navLink">
          Log Out
        </Link> */}
      </div>
      <div className="rightContainer">
        {/* Search Button */}
        <Link to="/search" className="navLink">
          Search
        </Link>

        {/* My Profile Button */}
        <Link to="/MyProfile" className="navLink">
          My Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
