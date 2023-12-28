
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftContainer">
        {/* Left side SVG as a link to the home page */}
        <Link to="/HomePage" className="logoLink">
          <img src="/public/Navbar svg.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/LogIn" className="navLink">
          Log In
        </Link>
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
