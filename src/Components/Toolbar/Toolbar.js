import React from 'react';
import NavItems from '../NavItems/NavItems';
import styles from './Toolbar.module.css'
import Logo from '../NavItems/Logo/Logo';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
import { Link } from 'react-router-dom';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Link to="/">
        <div className={styles.Logo}><Logo /></div>
      </Link>

      <DrawerToggler click={props.open} />

      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar;