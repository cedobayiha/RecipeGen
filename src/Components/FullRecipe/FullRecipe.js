import React, { Component } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './FullRecipe.module.css'

class FullRecipe extends Component {
  state = {
    title: null,
    img: null,
    calories: null,
    ingredientLines: null,
    directionsUrl: null,
    showReview: false
  }

  componentDidMount() {
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

  toggleReviewHandler = () => {
    this.setState((prevState) => {
      return { showReview: !prevState.showReview }
    }
    )
  }


  render() {
    let rev = null;
    if (this.state.showReview) {
      rev = <ReviewForm title={this.state.title} toggle={this.toggleReviewHandler} />
    } else {
      rev = null;
    }

    return (
      <div className={styles.Container}>
        <h1>{this.state.title}</h1>

        <img src={this.state.img} alt={this.state.title} />

        <p>Now that you have the Ingredients, <a target="_blank" rel="noopener noreferrer" href={this.state.directionsUrl} >click here</a> </p>
        {this.state.showReview ? <button onClick={this.toggleReviewHandler}>Hide Review form</button> : <button onClick={this.toggleReviewHandler}>Review Meal</button>}

        {rev}
        {/* <button onClick={this.toggleReviewHandler}>Review Meal</button> */}
      </div>
    )
  }
}
export default FullRecipe;