import React, { Component } from 'react';
import Recepe from '../Recepe/Recepe';
import queryString from 'query-string';

class List extends Component {



  state = {
    recepes: []
  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    this.getData(parsed.q)
  }

  getData = async (parser) => {
    const res = await fetch(`https://api.edamam.com/search?q=${parser}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_SECRET_KEY}`)
    const info = await res.json();
    this.setState({ recepes: info.hits })

  }

  render() {


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