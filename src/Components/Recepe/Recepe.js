import React, { Component } from 'react';
import styles from './recepe.module.css';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/Aux/Aux";
// import FullRecipe from '../FullRecipe/FullRecipe';

class Recepe extends Component {


  // viewMealHandler = () => {
  //   const queryParams = [];
  //   this.props.ingredientsLines.map((ig, idx) => {
  //     queryParams.push(idx + 1 + '=' + ig)
  //   })

  //   queryParams.push('title=' + this.props.title);
  //   queryParams.push('img=' + this.props.img);
  //   queryParams.push('calories=' + this.props.calories.toFixed(2));
  //   const queryString = queryParams.join('&');
  //   this.props.history.push({
  //     pathname: '/' + this.props.id,
  //     search: '?' + queryString
  //   })
  // }

  render() {
    const queryParams = [];
    this.props.ingredientsLines.map((ig, idx) => {
      return queryParams.push(idx + 1 + '=' + ig)
    })
    queryParams.push('directions=' + this.props.directions);
    queryParams.push('title=' + this.props.title);
    queryParams.push('img=' + this.props.img);
    queryParams.push('calories=' + this.props.calories.toFixed(2))
    queryParams.push('servings=' + this.props.servings);
    queryParams.push('source=' + this.props.source);
    const queryString = queryParams.join('&');


    return (
      <Aux>
        <Link to={{
          pathname: "/list/" + this.props.id,
          search: '?' + queryString
        }}>

          <div className={styles.Recepe_wrapper}>
            <img src={this.props.img} alt={this.props.title} className={styles.Recepe_Img} />
            <h3>{this.props.title}</h3>
          </div>
        </Link>



      </Aux>
    )
  }
}

export default Recepe;