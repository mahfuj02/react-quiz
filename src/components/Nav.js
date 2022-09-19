import {Link} from 'react-router-dom'
import Account from "./Account";
import classes from '../styles/Nav.module.css';
import Logo from '../assets/images/signature.png';
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={Logo} alt="Quiz Logo Logo" />
            {/* <h3>Mahfuj Ahmed</h3> */}
          </Link>
        </li>
      </ul>

      <Account />
    </nav>
  );
}
