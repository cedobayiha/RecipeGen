import React from 'react';
import styles from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';
import Logo from '../NavItems/Logo/Logo';

const sideDrawer = (props) => {
  let combinedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    combinedStyles = [styles.SideDrawer, styles.Open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={combinedStyles.join(' ')}>
        <div className={styles.Logo}><Logo /></div>


        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer;