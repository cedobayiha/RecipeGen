import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Main from './Components/Main/Main';
// import Recepe from './Components/Recepe/Recepe';
// import FullRecipe from './Components/FullRecipe/FullRecipe';
// import Aux from './hoc/Aux/Aux';



import styles from './App.module.css';
import FullRecipe from './Components/FullRecipe/FullRecipe';
class App extends Component {
  // state = {
  //   recepes: [],
  //   search: '',
  //   query: null
  // }



  // changeHandler = (e) => {
  //   this.setState({ search: e.target.value })
  // }

  // getData = async () => {

  //   const res = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET_KEY}`)
  //   const info = await res.json();
  //   this.setState({ recepes: info.hits })
  //   console.log(info.hits)

  // }

  // submitHandler = (e) => {
  //   e.preventDefault();
  //   let newSearch = this.state.search.trim();
  //   if (newSearch.length > 1) {
  //     this.setState({ query: newSearch, search: '' })
  //   }
  // }



  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.getData()
  //   }
  // }

  render() {
    // let advice = null;
    // let disabled = null;

    // if (this.state.search.trim().length <= 1) {
    //   disabled = true
    // } if (this.state.search.trim().length > 1) {
    //   disabled = false
    // }
    // if (this.state.query === null) {
    //   advice = <p style={{ textAlign: 'center', margin: '25px auto' }}><strong>Look up a recepe</strong></p>
    // } else {
    //   advice = null;
    // }




    return (

      <div className={styles.App}>
        <Layout>
          <Switch>
            <Route path="/:id" component={FullRecipe} />
            <Route exact path="/" component={Main} />
          </Switch>
        </Layout>
        {/* {advice}
          <form className={styles.Form} onSubmit={this.submitHandler}>
            <input type="text" onChange={this.changeHandler} />
            <button disabled={disabled}>Search</button>
          </form>

          {
            this.state.recepes.map((recepes, i) => (
              // <Link to={{ pathname: '/' + recepes.recipe.label + i }} key={recepes.recipe.label + i}>
              <Recepe key={recepes.recipe.label + i}
                id={recepes.recipe.label + i}
                title={recepes.recipe.label}
                img={recepes.recipe.image}
                calories={recepes.recipe.calories}
                ingredientsLines={recepes.recipe.ingredientsLines}
                ingredients={recepes.recipe.ingredients}
              />
              // </Link>

            ))

          } */}
      </div>
    )
  };
}

export default App;
