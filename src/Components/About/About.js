import React from 'react';
import styles from './About.module.css'

const about = (props) => {

  return (
    <div className={styles.About}>
      <p>A small recipe web app that help you learn how to cook any ailment you search for.</p>

      <p>Sadly the set up we have with the API we are using is as follow: you can only query the API 5 times in under a minute, if you do more than that, you have to wait a minute to search something new.</p> <br />

      <p>Also You can only receive 10 different meals. <br />
        Most of these recipes come with the right ingredients, the name of the dish etc... but they miss directions on how to cook them. But don't worry, for each meal, we link you to a site that has the directions to cook that specific meal. </p>
    </div>
  )
}

export default about;