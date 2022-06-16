import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const authCtx = useContext(AuthContext)
  const history = useHistory()

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!authCtx.isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {authCtx.isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {
            authCtx.isLoggedIn &&
            <li>
              <button onClick={() => { authCtx.logout(); history.push('/auth') }}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
