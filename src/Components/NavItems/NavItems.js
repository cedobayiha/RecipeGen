import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css'

const navItems = (props) => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/search">
        Search
       </NavItem>
      <NavItem link="/about">
        About
       </NavItem>
    </ul>
  )
}

export default navItems;