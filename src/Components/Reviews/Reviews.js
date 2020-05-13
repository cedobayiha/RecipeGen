import React, { Component } from 'react';
import axios from 'axios';
import Review from './Review/Review';
import styles from './Reviews.module.css';


class Reviews extends Component {
  state = {
    reviews: [],
    filter: ''

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
        // let filteredInfo = info.filter(review => (review.title.indexOf(this.state.search) !== -1));
        this.setState({ reviews: info })
      })
  }

  onSearchChange = (e) => {
    e.preventDefault();
    this.setState({ filter: e.target.value })
  }



  render() {
    let filteredRevs = this.state.reviews.filter(review => (review.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1));


    return (
      <div style={{ marginTop: '72px' }}>
        <form action="" className={styles.InputForm}>
          <input type="text" onChange={this.onSearchChange} value={this.state.filter} />
        </form>
        <div>
          {
            filteredRevs.map(review => (<Review
              title={review.title}
              name={review.name}
              key={review.id}
              review={review.review}
            />))
          }
        </div>
      </div>
    )
  }
}

export default Reviews;

