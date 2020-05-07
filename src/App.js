import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './Components/Main/Main';
// import Recepe from './Components/Recepe/Recepe';
// import FullRecipe from './Components/FullRecipe/FullRecipe';
// import Aux from './hoc/Aux/Aux';



import styles from './App.module.css';
import FullRecipe from './Components/FullRecipe/FullRecipe';
class App extends Component {

  render() {

    return (

      <div className={styles.App}>
        <Layout>
          <Switch>
            <Route path="/list/:id" component={FullRecipe} />
            <Route path="/search" component={Main} />
            <Redirect from="/" to="/search" />
          </Switch>
        </Layout>

      </div>
    )
  };
}

export default App;
