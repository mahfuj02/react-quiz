import Account from "./Account";
import classes from '../styles/Nav.module.css';
import Logo from '../assets/images/signature.png';
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={Logo} alt="Quiz Logo Logo" />
            {/* <h3>Mahfuj Ahmed</h3> */}
          </a>
        </li>
      </ul>

      <Account />
    </nav>
  );
}
