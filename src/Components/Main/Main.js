import React, { Component } from 'react';
// import Recepe from "../Recepe/Recepe"
import List from '../List/List';
import Aux from '../../hoc/Aux/Aux';
import styles from './Main.module.css';
import queryString from 'query-string';


import { Route, Switch } from 'react-router-dom';
class Main extends Component {
  state = {
    search: '',
    query: null
  }

  changeHandler = (e) => {
    this.setState({ search: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    let newSearch = this.state.search.trim();
    if (newSearch.length > 1) {
      this.setState({ query: newSearch, search: '' })
      this.props.history.push('/search/list?q=' + newSearch)
    }
  }

  render() {
    let disabled = null;
    if (this.state.search.trim().length <= 1) {
      disabled = true
    } if (this.state.search.trim().length > 1) {
      disabled = false
    }
    return (
      <Aux>

        <div className={styles.Main}>
          <form className={styles.Form} onSubmit={this.submitHandler}>
            <input className={styles.Search} type="text" onChange={this.changeHandler} placeholder="Look up an aliment..." />
            <button className={styles.Btn} disabled={disabled}>Search</button>
          </form>

        </div>
        <Switch>
          <Route path="/search/list"
            render={() => <List
              query={this.state.query}
              ndQuery={queryString.parse(window.location.search).q}
            />}
          />
        </Switch>
      </Aux>
    )
  };
}

export default Main;