import React, { Component } from 'react';
import Recepe from '../Recepe/Recepe';
import queryString from 'query-string';

import Spinner from '../Spinner/Spinner';

class List extends Component {
  state = {
    recepes: [],
    query: queryString.parse(window.location.search).q,
    newQuery: null,
    error: false
  }


  setStr = (newQuery) => {
    this.setState({ newQuery: newQuery })
  }


  componentDidMount() {
    this.getData(this.state.query)
  }

  getData = async (parser) => {
    try {
      const res = await fetch(`https://api.edamam.com/search?q=${parser}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET_KEY}`)
      const info = await res.json();
      this.setState({ recepes: info.hits })
    } catch (err) {
      console.log(err)
      this.setState({ error: true })
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ query: this.props.query })
      this.getData(this.props.query)
    }
    if (prevProps.ndQuery !== this.props.ndQuery) {
      this.getData(this.props.ndQuery)
    }
  }

  render() {
    let list = this.state.error ? <p>Food and recipes can't be loaded, you've reach your max search under a minute. Wait a minute or two and try again</p> : <Spinner />;
    if (this.state.recepes.length > 1 && this.state.error === false) {
      list =
        this.state.recepes.map((recepes, i) => (
          <Recepe key={recepes.recipe.label + i}
            id={recepes.recipe.label + i}
            title={recepes.recipe.label}
            img={recepes.recipe.image}
            calories={recepes.recipe.calories}
            ingredientsLines={recepes.recipe.ingredientLines}
            ingredients={recepes.recipe.ingredients}
            directions={recepes.recipe.url}
            servings={recepes.recipe.yield}
            source={recepes.recipe.source}
          />
        ))
    }
    return (
      <div>
        {list}
      </div>
    )
  }

}

export default List;