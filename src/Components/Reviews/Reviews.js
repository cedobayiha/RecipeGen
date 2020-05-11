import React, { Component } from 'react';
import axios from 'axios';
import Review from './Review/Review';


class Reviews extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    axios.get("https://recipes-47ca0.firebaseio.com/reviews.json")
      .then(res => {
        const info = []
        for (let key in res.data) {
          info.push({
            ...res.data[key], id: key
          })
        }
        this.setState({ reviews: info })
      })
  }

  render() {
    console.log(this.state.reviews)
    return (
      <div style={{ marginTop: '72px' }}>{
        this.state.reviews.map(review => (<Review
          title={review.title}
          name={review.name}
          key={review.id}
          review={review.review}
        />
        ))
      }</div>
    )
  }
}

export default Reviews