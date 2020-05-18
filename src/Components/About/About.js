import React from 'react';
import styles from './About.module.css';
import Aux from '../../hoc/Aux/Aux';

const about = (props) => {

  return (
    <Aux>

      <div className={styles.About}>
        <p>Welcome to 10 Recipes! Have extra ingredients at home, not sure what to do with it? Craving a certain dish, but need a bit of inspiration? We have you covered!</p>

        <p>10 Recipes is a simple and efficient web app that allows you to search for any ingredient and will then give you a list of a bunch of recipes to explore, choose from, and even share with your friends and family! Each recipe profile has a picture, ingredients list, and a direct link to instructions on how to create the dish.</p> <br />

        <p>Looking for even more inspiration? Head to the Inspiration tab to get recommendations and reviews from our other users. Feel free to add in a review if you get a chance to try out one of our recipe suggestions! </p> <br />

        <p>Recipes 10 is always looking for ways to improve. With the current API, you are limited to 5 searches per minute. If you reach this limit, hang in there, in about a minute you can get back to searching. We plan to improve our API setup in the near future, stay tuned!</p>
      </div>
    </Aux>
  )
}

export default about;