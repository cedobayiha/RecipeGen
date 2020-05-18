import React, { Component } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import styles from './FullRecipe.module.css'
import FacebookShare from '../Share/FacebookShare/FacebookShare';
import MessengerShare from '../Share/MessengerShare/MessengerShare';
import PintrestShare from '../Share/PintrestShare/PintrestShare';
import TwitterShare from '../Share/TwitterShare/TwitterShare';
import WhatsappShare from '../Share/WhatsappShare/WhatsappShare';
import Modal from '../Modal/Modal';

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
    source: null,
    show: false
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

  toggleSocialShareHandler = () => {
    this.setState((prevState) => {
      return { show: !prevState.show }
    }
    )
  }


  render() {
    let shareUrl = window.location.href
    let modal = null;
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

      newArr.map((igA, idx) => {

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

    if (this.state.show) {
      modal = (<Modal>
        <FacebookShare title={this.state.title} url={shareUrl} size={32} />
        <MessengerShare title={this.state.title} url={shareUrl} size={32} />
        <PintrestShare title={this.state.title} url={shareUrl} img={this.state.img} size={32} />
        <TwitterShare title={this.state.title} url={shareUrl} size={32} />
        <WhatsappShare title={this.state.title} url={shareUrl} size={32} />
      </Modal>)
    }

    // console.log(String(window.location))


    return (
      <div className={styles.Container}>
        <div className={styles.FirstQuat}>
          <h3 className={styles.Title}>{this.state.title}</h3>
          <div className={styles.Main}>
            <div className={styles.ImageDiv}>
              <img src={this.state.img} alt={this.state.title} />
            </div>

            <div className={styles.ShareAndSource}>
              <div>
                <h3 className={styles.SubTitle}>{this.state.title}</h3>
                <p>See full recipe on : <a href={this.state.directionsUrl}>{this.state.source}</a></p>
              </div>
              <div className={styles.Share}>
                <button className={styles.ShareBtn} onClick={this.toggleSocialShareHandler}>Share</button>
              </div>
              <div className={styles.ShareLinks}>
                <FacebookShare title={this.state.title} url={shareUrl} size={40} />
                <MessengerShare title={this.state.title} url={shareUrl} size={40} />
                <PintrestShare title={this.state.title} url={shareUrl} img={this.state.img} size={40} />
                <TwitterShare title={this.state.title} url={shareUrl} size={40} />
                <WhatsappShare title={this.state.title} url={shareUrl} size={40} />
              </div>
            </div>
          </div>
        </div>
        {modal}
        <div className={styles.FirstQuat}>
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
        </div>

        <div className={styles.FormEnabler}>
          <p>Did you have a chance to make this recipe? If so, let Recipe 10 and our other users know what you thought of the dish! Your review will be published on our Inspiration page.</p>
          {this.state.showReview ? <button className={styles.FormEnablerHide} onClick={this.toggleReviewHandler}>Hide Review form</button> : <button className={styles.FormEnablerShow} onClick={this.toggleReviewHandler}>Review Meal</button>}
        </div>
        {rev}

      </div>
    )
  }
}
export default FullRecipe;

