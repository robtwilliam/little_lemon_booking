import './nav.css';
import Logo from '../../assets/Logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/icon _hamburger menu.svg';


function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1300) {
      setShowMenu(false);
    }
  };

  return (
    <header>
      <nav>
        <Link to="/little_lemon_booking" className='nav__logo'>
          <img src={Logo} alt="logo" height="60rem"/>
        </Link>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className='nav__list'>
              <li className='nav__item'><Link to="/little_lemon_booking" onClick={closeMenuOnMobile}>Home</Link></li>
              <li className='nav__item'><Link to="/little_lemon_booking/about" onClick={closeMenuOnMobile}>About</Link></li>
              <li className='nav__item'><Link to="/little_lemon_booking/menu" onClick={closeMenuOnMobile}>Menu</Link></li>
              <li className='nav__item'><Link to="/little_lemon_booking/booking" onClick={closeMenuOnMobile}>Reservations</Link></li>
              <li className='nav__item'><Link to="/little_lemon_booking/order" onClick={closeMenuOnMobile}>Order Online</Link></li>
              <li className='nav__item'><Link to="/little_lemon_booking/login" onClick={closeMenuOnMobile}>Log In</Link></li>
          </ul>
          <div className='nav__close' onClick={toggleMenu}>
            <img src={Hamburger} alt="hamburger nav"/>
          </div>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <img src={Hamburger} alt="hamburger nav"/>
        </div>
      </nav>
    </header>
  );
}

export default Nav;