import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
