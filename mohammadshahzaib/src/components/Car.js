import React, { Component } from 'react';
 
class Car extends Component {
  render() {
    return (
      <div className="car">
        <h2 className='carshead'>{ this.props.meta.model }</h2>
      <div><img width="100%" src={ this.props.meta.picture } alt="" /></div>
        <p className='cardPara'>{ this.props.meta.blurb }</p>
        <a href="#" class="card-button"> Purchase</a>
      </div>
    );
  }
}
 
export default Car;