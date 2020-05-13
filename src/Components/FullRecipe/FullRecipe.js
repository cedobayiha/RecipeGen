import React, { Component } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './FullRecipe.module.css'
// import { lightblue } from 'color-name';

class FullRecipe extends Component {
  state = {
    title: null,
    img: null,
    calories: null,
    ingredientLines: null,
    directionsUrl: null,
    showReview: false,
    ingredientsArray: null,
    servings: null
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    const igArr = [];
    let title = null;
    let img = null;
    let calories = null;
    let directions = null
    let servings = null;

    for (let param of query.entries()) {
      if (param[0] === 'servings') {
        servings = param[1];
      }
      else if (param[0] === 'calories') {
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
        igArr.push(param[1])
      }
    }

    this.setState({ ingredientsLines: ingredients, ingredientsArray: igArr, calories: calories, img: img, title: title, directionsUrl: directions, servings: servings })
  }

  toggleReviewHandler = () => {
    this.setState((prevState) => {
      return { showReview: !prevState.showReview }
    }
    )
  }


  render() {
    let rev = null;
    let ig = null;
    if (this.state.showReview) {
      rev = <ReviewForm title={this.state.title} toggle={this.toggleReviewHandler} />
    } else {
      rev = null;
    }

    if (this.state.ingredientsArray) {
      ig = (<div>
        <h4 style={{ borderBottom: '1px #ccc solid' }}>{this.state.ingredientsArray.length} Ingredients</h4>
        <ul style={{ width: '80%', margin: 0, textAlign: 'left' }}>
          {this.state.ingredientsArray.map((ig, idx) => (<li key={ig + idx} style={{ listStyleType: 'none', margin: '10px', padding: '10px', }}>{ig}</li>))}
        </ul>
      </div>)
    }



    // console.log(this.state.servings, this.state.calories)

    return (
      <div className={styles.Container}>
        <h4>{this.state.title}</h4>
        <div className={styles.ImageDiv}>
          <img src={this.state.img} alt={this.state.title} />
        </div>

        <div className={styles.IngDiv}>
          {ig}
        </div>
        <div>
          <div className={styles.IngH4}>
            <h4 >Cooking Directions</h4>
            <p>Now that you have the Ingredients, <a target="_blank" rel="noopener noreferrer" href={this.state.directionsUrl} >click here</a> to follow the cooking directions</p>
          </div>

          <div className={styles.IngH4}>
            <h4>Nutrution</h4>
            <div className={styles.Nutrition}>
              <div className={styles.CalData}>{this.state.calories / this.state.servings}
                <p className={styles.Cal}>Calories/Serving</p>
              </div>

              <div>
                <button>{this.state.servings}</button>
                <p>SERVINGS</p>
              </div>
            </div>
          </div>
        </div>


        {this.state.showReview ? <button onClick={this.toggleReviewHandler}>Hide Review form</button> : <button onClick={this.toggleReviewHandler}>Review Meal</button>}

        {rev}

      </div>
    )
  }
}
export default FullRecipe;