import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

//обов'язково додати, це компанує одразу декілька стилів разом для <NavLink>, робить підсвітку активної сторінки
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2>Router</h2>
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
          Home
        </NavLink>
//сам реакт буде встановлювати елемент АКТИВНИМ
        <NavLink className={buildLinkClass} to='/about'>
          About
        </NavLink>
        <NavLink className={buildLinkClass} to='/users'>
          Users
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
