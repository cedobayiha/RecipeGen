import React, { Component } from 'react';
import Recepe from '../Recepe/Recepe';
import queryString from 'query-string';

class List extends Component {
  state = {
    recepes: [],
    query: queryString.parse(window.location.search).q,
    newQuery: null
  }


  setStr = (newQuery) => {
    this.setState({ newQuery: newQuery })
  }


  componentDidMount() {
    this.getData(this.state.query)
  }

  getData = async (parser) => {
    const res = await fetch(`https://api.edamam.com/search?q=${parser}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET_KEY}`)
    const info = await res.json();
    this.setState({ recepes: info.hits })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ query: this.props.query })
      this.getData(this.props.query)
    }

    if (prevState.newQuery !== this.state.newQuery) {
      this.getData(this.state.newQuery)
    }

  }

  render() {
    // let str = queryString.parse(window.location.search).q;
    // if (this.state.query !== str) {
    //   this.setStr(str)
    // }
    // console.log(str)
    return (
      <div>
        {
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
        }
      </div>
    )
  }

}

export default List;