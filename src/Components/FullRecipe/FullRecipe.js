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
    servings: null,
    source: null
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
    let source = null;

    for (let param of query.entries()) {
      if (param[0] === 'source') {
        source = param[1];
      }
      else if (param[0] === 'servings') {
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

    this.setState({ ingredientsLines: ingredients, ingredientsArray: igArr, calories: calories, img: img, title: title, directionsUrl: directions, servings: servings, source: source })
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
    let newArr = null;
    let actualArr = []
    if (this.state.showReview) {
      rev = <ReviewForm title={this.state.title} toggle={this.toggleReviewHandler} />
    } else {
      rev = null;
    }

    if (this.state.ingredientsArray) {
      newArr = this.state.ingredientsArray;
      console.log(newArr)
      newArr.map((igA, idx) => {
        console.log(igA.length)
        if (igA.length > 0) {
          actualArr.push(igA)
        }
      })
      ig = (<div className={styles.Ingredients}>
        <h4 className={styles.IngTitle}
        >{actualArr.length} Ingredients</h4>
        <ul className={styles.IngUl}
        >
          {actualArr.map((ig, idx) => (<li key={ig + idx}
            className={styles.IngLi}
          >{ig}</li>))}
        </ul>
      </div>)
    }

    console.log(newArr)



    return (
      <div className={styles.Container}>
        <h3 className={styles.Title}>{this.state.title}</h3>
        <div className={styles.ImageDiv}>
          <img src={this.state.img} alt={this.state.title} />
        </div>

        <div className={styles.IngDiv}>
          {ig}

          <div className={styles.IngH4}>
            <div >
              <h4>Nutrution</h4>
              <div className={styles.Nutrition}>
                <div className={styles.CalData}>{(this.state.calories / this.state.servings).toFixed(2)}
                  <p className={styles.Cal}>Calories/Serving</p>
                </div>

                <div >
                  <button className={styles.Button}>{this.state.servings}</button>
                  <p className={styles.Servings}>SERVINGS</p>
                </div>
              </div>
            </div>

            <div className={styles.IngDir}>
              <div className={styles.Directions}>
                <h4 >Cooking Directions</h4>
                <p>Now that you have the Ingredients, go to <a target="_blank" rel="noopener noreferrer" href={this.state.directionsUrl} >{this.state.source}</a> to follow the cooking directions</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.FormEnabler}>
          <p>* If you really liked this meal, You can leave constructive feedback to help other users.</p>
          {this.state.showReview ? <button className={styles.FormEnablerHide} onClick={this.toggleReviewHandler}>Hide Review form</button> : <button className={styles.FormEnablerShow} onClick={this.toggleReviewHandler}>Review Meal</button>}
        </div>

        {rev}

      </div>
    )
  }
}
export default FullRecipe;