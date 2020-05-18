import React from 'react';
import styles from './Review.module.css'

const review = (props) => {

  return (
    <div className={styles.Review}>
      <h4><a href={props.url}>
      {props.title}
      </a></h4>
      <p>{props.review}</p>
      <h6>by {props.name}</h6>
    </div>
  )
}

export default review;