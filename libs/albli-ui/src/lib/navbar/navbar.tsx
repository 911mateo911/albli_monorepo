import styles from "./navbar.module.css";
import { FC } from 'react';
import { NavbarProps } from './navbar.interface';

export const Navbar: FC<NavbarProps> = ({
  title = 'alBLi',
  logo
}) => {
  return (
    <div>
      <h1>Welcome to Navbar!</h1>
    </div>
  );
}
