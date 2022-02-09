import styles from "./navbar.module.scss";
import Link from 'next/link';
import { FC } from 'react';
import { NavbarProps } from './navbar.interface';
import { Logo } from '../logo';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as MenuIcon } from '../icons/menu.svg';

const {
  'navbar-wrapper': cls_navbarWrapper,
  'menu-icon': cls_menuIcon,
  'search-icon-wrapper': cls_searchIconWrapper,
  'search-icon': cls_searchIcon,
  'navbar-app-title': cls_navbarAppTitle,
  'navbar-navigation-wrapper': cls_navbarNavWrapper,
  'navbar-navigation_login': cls_navbarNavLogin,
  'navbar-navigation': cls_navbarNav
} = styles;

export const Navbar: FC<NavbarProps> = ({
  title = 'al-Bli',
  logo = <Logo />,
  onMenuToggle = () => ({}),
  onSearchToggle = () => ({})
}) => {
  return (
    <>
      <div onClick={onSearchToggle} className={cls_searchIconWrapper} >
        <SearchIcon className={cls_searchIcon} />
      </div>
      <div className={cls_navbarWrapper} >
        <span className={cls_navbarNavWrapper} >
          <MenuIcon onClick={onMenuToggle} className={cls_menuIcon} />
          {logo}
          <Link href='/' ><p className={cls_navbarAppTitle} >{title}</p></Link>
        </span>
        <span className={cls_navbarNavWrapper} >
          <Link href='/' >
            <p className={cls_navbarNav} >Shtëpia</p>
          </Link>
          <p className={cls_navbarNav} >Kategori</p>
          <Link href='/oferta' >
            <p className={cls_navbarNav} >Oferta</p>
          </Link>
          <Link href='/kycu' >
            <p className={cls_navbarNavLogin} >Kycu</p>
          </Link>
        </span>
      </div>
    </>
  );
}
