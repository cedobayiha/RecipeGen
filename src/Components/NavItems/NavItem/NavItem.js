import React from 'react';
import styles from "./NavItem.module.css";
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
  return (
    <li className={styles.NavItem}>
      <NavLink to={props.link} activeClassName={styles.active}>
        {props.children}
      </NavLink>
    </li>
  )
}

export default navItem;