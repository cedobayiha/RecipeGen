import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import About from './Components/About/About';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './Components/Main/Main';




import styles from './App.module.css';
import FullRecipe from './Components/FullRecipe/FullRecipe';
class App extends Component {

  render() {

    return (

      <div className={styles.App}>
        <Layout>
          <Switch>
            <Route path="/list/:id" exact component={FullRecipe} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Main} />
            <Redirect from="/" to="/search" />
          </Switch>
        </Layout>

      </div>
    )
  };
}

export default App;
