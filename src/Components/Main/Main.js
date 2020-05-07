import React, { Component } from 'react';
import Recepe from "../Recepe/Recepe"
import List from '../List/List';
import Aux from '../../hoc/Aux/Aux';
import styles from './Main.module.css'

import { Route, Link, Switch } from 'react-router-dom';

class Main extends Component {
  state = {
    // recepes: [],
    search: '',
    query: null
  }

  changeHandler = (e) => {
    this.setState({ search: e.target.value })
  }

  // getData = async () => {

  //   const res = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET_KEY}`)
  //   const info = await res.json();
  //   this.setState({ recepes: info.hits })
  //   console.log(info.hits)

  // }

  submitHandler = (e) => {
    e.preventDefault();
    let newSearch = this.state.search.trim();
    if (newSearch.length > 1) {

      this.setState({ query: newSearch, search: '' })
      this.props.history.push('/search/list?q=' + newSearch)
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.recepes !== this.state.recepes
  // }


  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.getData()
  //   }
  // }

  render() {
    let advice = null;
    let disabled = null;

    if (this.state.search.trim().length <= 1) {
      disabled = true
    } if (this.state.search.trim().length > 1) {
      disabled = false
    }
    if (this.state.query === null) {
      advice = <p style={{ textAlign: 'center', margin: '25px auto' }}><strong>Look up a recepe</strong></p>
    } else {
      advice = null;
    }



    return (
      <Aux>
        <div className={styles.Main}>
          {advice}
          <form className={styles.Form} onSubmit={this.submitHandler}>
            <input type="text" onChange={this.changeHandler} />
            <button className={styles.Btn} disabled={disabled}>Search</button>
          </form>
          {/* {
            this.state.recepes.map((recepes, i) => (
              <Recepe key={recepes.recipe.label + i}
                id={recepes.recipe.label + i}
                title={recepes.recipe.label}
                img={recepes.recipe.image}
                calories={recepes.recipe.calories}
                ingredientsLines={recepes.recipe.ingredientLines}
                ingredients={recepes.recipe.ingredients}
                directions={recepes.recipe.url}
              />
            ))
          } */}
          <Switch>
            <Route path="/search/list" component={List} />
          </Switch>
        </div>
      </Aux>


    )
  };
}

export default Main;

