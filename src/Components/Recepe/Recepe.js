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
      queryParams.push(idx + 1 + '=' + ig)
    })
    queryParams.push('directions=' + this.props.directions);
    queryParams.push('title=' + this.props.title);
    queryParams.push('img=' + this.props.img);
    queryParams.push('calories=' + this.props.calories.toFixed(2));
    const queryString = queryParams.join('&');

    // console.log(queryString)
    return (
      <Aux>

        <div className={styles.Recepe_wrapper}>
          <h3>{this.props.title}</h3>
          <img src={this.props.img} alt={this.props.title} height="300" width="400" className={styles.Recepe_Img} />
          <Link to={{
            pathname: "/" + this.props.id,
            search: '?' + queryString
          }}>
            <button className={styles.Btn} >CHECK IT OUT</button>
          </Link>
        </div>



      </Aux>
    )
  }
}

export default Recepe;