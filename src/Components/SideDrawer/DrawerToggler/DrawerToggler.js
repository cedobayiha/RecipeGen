import React from 'react';
import styles from './DrawerToggler.module.css';

const drawerToggler = (props) => {

  return (
    <div className={styles.DrawerToggler} onClick={props.click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
export default drawerToggler;