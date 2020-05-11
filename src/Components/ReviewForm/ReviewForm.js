import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ReviewForm extends Component {
  state = {
    name: '',
    title: this.props.title,
    review: '',
    showBtn: true
  }

  nameChangeHandle = (e) => {
    this.setState({ name: e.target.value })
  }

  reviewChangeHandler = (e) => {
    this.setState({ review: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const submiter = {
      name: this.state.name,
      title: this.state.title,
      review: this.state.review
    }

    axios.post("https://recipes-47ca0.firebaseio.com/reviews.json", submiter)
      .then(res => (console.log(res))
      ).catch(error => (console.log(error)))
    this.props.toggle()
    alert('thanks for the feedback, your review has been submitted')
  }



  render() {

    let disabled = true;
    if (this.state.name.length >= 2 && this.state.review.length >= 10) {
      disabled = false;
    }
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <input type="text" placeholder="Your name" onChange={this.nameChangeHandle} />
          <input type="text" value={this.props.title} readOnly />
          <textarea name="" id="" cols="30" rows="10" onChange={this.reviewChangeHandler}>
          </textarea>
          <button disabled={disabled}>Publish</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm;