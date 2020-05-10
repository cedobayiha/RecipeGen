import React from 'react';
import NavItems from '../NavItems/NavItems';
import styles from './Toolbar.module.css'
import Logo from '../NavItems/Logo/Logo';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Logo}><Logo /></div>

      <DrawerToggler click={props.open} />

      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar;