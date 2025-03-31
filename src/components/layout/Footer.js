import './footer.css';
import Logo from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <div className='footer-contents'>
          <div className='footer-nav'>
              <h3>
                  Navigate
              </h3>
              <nav className='footer-navlinks'>
                <ul>
                    <li className='nav__item'><Link to="/little_lemon_booking">Home</Link></li>
                    <li className='nav__item'><Link to="/little_lemon_booking/about">About</Link></li>
                    <li className='nav__item'><Link to="/little_lemon_booking/menu">Menu</Link></li>
                    <li className='nav__item'><Link to="/little_lemon_booking/reservations">Reservations</Link></li>
                    <li className='nav__item'><Link to="/little_lemon_booking/order">Order Online</Link></li>
                    <li className='nav__item'><Link to="/little_lemon_booking/login">Log In</Link></li>
                </ul>
              </nav>
            </div>
            <div className='footer-info'>
              <h3>
                Contact
              </h3>
              <ul>
                <li>
                  (555) 555-1234
                </li>
                <li>
                  info@littlelemon.com
                </li>
                <li>
                  1234 Chicago Dr.<br></br>
                  Chicago, IL 60602
                </li>
              </ul>
            </div>
            <div className='footer-socials'>
              <h3>
                Share
              </h3>
              <ul>
                <li>
                  Facebook
                </li>
                <li>
                  Instagram
                </li>
                <li>
                  Yelp
                </li>
                <li>
                  Threads
                </li>
              </ul>
            </div>
            <img src={Logo} className='footer-logo' alt="footer logo"/>
        </div>
      </footer>
    );
  }

  export default Footer;