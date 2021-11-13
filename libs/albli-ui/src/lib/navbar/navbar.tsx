import styles from "./navbar.module.scss";
import { FC } from 'react';
import { NavbarProps } from './navbar.interface';

export const Navbar: FC<NavbarProps> = ({
  title = 'alBli',
  logo
}) => {
  return (
    <div>
      <h1>Welcome to Navbar!</h1>
    </div>
  );
}
