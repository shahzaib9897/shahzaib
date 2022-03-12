import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Car from './Car'
import { initialCars } from '../cars';
import { additionalCars } from '../cars';




class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: initialCars
    };
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this);
    this.addCarToGallery = this.addCarToGallery.bind(this);
  }

  loadAdditionalCars() {
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, additionalCars);
    this.setState({ cars: newCars });
  }

  addCarToGallery(car) {
    var ts = Date.now();
    var newCar = {};
    newCar['car' + ts] = car;
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, newCar);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div className="App">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png" class="d-block w-100 h-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.focus2move.com/wp-content/uploads/2021/02/Bugatti-Divo_Lady_Bug-2020-1024-0b.jpg" class="d-block w-100" alt="..." style={{height:"580px"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg" class="d-block w-100" alt="..." style={{height:"580px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
        <Header text="Car List" />
        <div className="cars">
          {
            Object
              .keys(this.state.cars)
              .map(key => <Car key={key} meta={this.state.cars[key]} />)
          }
        </div>
        <div className="add-cars"><button onClick={this.loadAdditionalCars}>Load more...</button></div>

<div class="container">
    <br/>
	<br/>
	<div class="row" id="ads">
    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge">Low KMS</span>
                <span class="card-notify-year">2018</span>
                <img class="img-flud" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg" alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">Used</span>
                <span class="card-detail-badge">$28,000.00</span>
                <span class="card-detail-badge">13000 Kms</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Honda Accord LX</h5>
                </div>
                <a class="ad-btn" href="#">View</a>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge">Fully-Loaded</span>
                <span class="card-notify-year">2017</span>
                <img class="img-flud" src="https://www.focus2move.com/wp-content/uploads/2021/02/Bugatti-Divo_Lady_Bug-2020-1024-0b.jpg" alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">Used</span>
                <span class="card-detail-badge">$28,000.00</span>
                <span class="card-detail-badge">13000 Kms</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Honda CIVIC HATCHBACK LS</h5>
                </div>
                <a class="ad-btn" href="#">View</a>
            </div>
        </div>
    </div>

    <div class="col-md-4">
        <div class="card rounded">
            <div class="card-image">
                <span class="card-notify-badge">Price Reduced</span>
                <span class="card-notify-year">2018</span>
                <img class="img-flud" src="https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png" alt="Alternate Text" />
            </div>
            <div class="card-image-overlay m-auto">
                <span class="card-detail-badge">Used</span>
                <span class="card-detail-badge">$22,000.00</span>
                <span class="card-detail-badge">8000 Kms</span>
            </div>
            <div class="card-body text-center">
                <div class="ad-title m-auto">
                    <h5>Honda Accord Hybrid LT</h5>
                </div>
                <a class="ad-btn" href="#">View</a>
            </div>
        </div>
    </div>

</div>
</div>
        {/* <AddCar addCar={this.addCarToGallery} /> */}

      </div>
    );
  }
}

export default App;
