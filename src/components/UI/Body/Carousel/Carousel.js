import React from 'react';
import classes from './Carousel.css';
import firstFriend from './friends4.jpg';
import secondFriend from './friends2.jpg';
import thirdFriend from './friends3.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={firstFriend} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={secondFriend} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={thirdFriend} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;