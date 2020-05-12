import React, { Component } from 'react';
import axios from 'axios';
import Review from './Review/Review';


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
        <form action="">
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

    // if (this.state.filter.length >= 1) {
    //   newArr = this.state.reviews.filter(review => {
    //     const arr = review.title.split(' ');
    //     for (let word in arr) {
    //       if (word.toLowerCase() === this.state.filter.toLowerCase()) {
    //         return review
    //       }
    //     }
    //   })
    //   return revComp = newArr.map(review => (<Review
    //     title={review.title}
    //     name={review.name}
    //     key={review.id}
    //     review={review.review}
    //   />))
    // }
    // if (this.state.reviews.length > 1 && this.state.filter.length === 0) {
    //   revComp = this.state.reviews.map(review => (<Review
    //     title={review.title}
    //     name={review.name}
    //     key={review.id}
    //     review={review.review}
    //   />
    //   ))
    // }