import styles from "./navbar.module.scss";
import Link from 'next/link';
import { FC } from 'react';
import { NavbarProps } from './navbar.interface';
import { Logo } from '../logo';

export const Navbar: FC<NavbarProps> = ({
  title = 'al-Bli',
  logo = <Logo />
}) => {
  return (
    <div className={styles['navbar-wrapper']} >
      <span className={styles['navbar-navigation-wrapper']} >
        {logo}
        <Link href='/' ><p className={styles['navbar-app-title']} >{title}</p></Link>
      </span>
      <span className={styles['navbar-navigation-wrapper']} >
        <Link href='/' >
          <p className={styles['navbar-navigation']} >Shtëpia</p>
        </Link>
        <p className={styles['navbar-navigation']} >Kategori</p>
        <Link href='/oferta' >
          <p className={styles['navbar-navigation']} >Oferta</p>
        </Link>
        <Link href='/kycu' >
          <p className={styles['navbar-navigation_login']} >Kycu</p>
        </Link>
      </span>
    </div>
  );
}
