import React, { Component } from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar';
import styles from "./Layout.module.css"
import Aux from "../Aux/Aux"

import SideDrawer from '../../Components/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  toggleSidedrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    }

    )
  }

  render() {
    return (
      <Aux>
        <Toolbar open={this.toggleSidedrawerHandler} />

        <SideDrawer open={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler}
        />

        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout;