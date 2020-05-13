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
    showReview: false,
    ingredientsArray: null
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    const igArr = [];
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
        ingredients[param[0]] = param[1];
        igArr.push()
      }
    }

    this.setState({ ingredientsLines: ingredients, ingredientsArray: igArr, calories: calories, img: img, title: title, directionsUrl: directions })
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
    console.log(this.state.ingredientsLines)
    return (
      <div className={styles.Container}>
        <h4>{this.state.title}</h4>
        <div className={styles.ImageDiv}>
          <img src={this.state.img} alt={this.state.title} />
        </div>

        <div className={styles.IngDiv}>
          {this.props.ingredientLines}
          <p>Now that you have the Ingredients, <a target="_blank" rel="noopener noreferrer" href={this.state.directionsUrl} >click here</a> </p>
        </div>


        {this.state.showReview ? <button onClick={this.toggleReviewHandler}>Hide Review form</button> : <button onClick={this.toggleReviewHandler}>Review Meal</button>}

        {rev}

      </div>
    )
  }
}
export default FullRecipe;