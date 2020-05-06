import React, { Component } from 'react';

class FullRecipe extends Component {
  state = {
    title: null,
    img: null,
    calories: null,
    ingredientLines: null,
    directionsUrl: null
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let title = null;
    let img = null;
    let calories = null;
    let directions = null

    for (let param of query.entries()) {
      if (param[0] === 'calories') {
        calories = param[1];
      } else if (param[0] === 'img') {
        img = param[1];
      } else if (param[0] === 'title') {
        title = param[1];
      }
      else if (param[0] === 'directions') {
        directions = param[1];
      }
      else {
        ingredients[param[0]] = param[1]
      }
    }

    this.setState({ ingredients: ingredients, calories: calories, img: img, title: title, directionsUrl: directions })
  }

  render() {
    // console.log(this.state.ingredients)
    return (
      <div>
        <h1>{this.state.title}</h1>

        <img src={this.state.img} alt={this.state.title} />

        <p>Now that you have the Ingredients, <a target="_blank" href={this.state.directionsUrl} >click here</a> </p>
      </div>
    )
  }
}
export default FullRecipe;