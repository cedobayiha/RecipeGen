import React from 'react';
import styles from './recepe.module.css';

const recepe = (props) => {
  let lines = null;
  if (props.ingredientsLines) {
    props.ingredientsLines.map(line => {
      return lines = <li>{line}</li>
    })
  }

  return (
    <div className={styles.Recepe_wrapper}>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.title} height="300" width="400" className={styles.Recepe_Img} />
      <p>Amount of Calories in this Meal: {props.calories.toFixed(2)}</p>
    </div>
  )
}

export default recepe;