import React from 'react';
import './Carousel.css';
import firstFriend from './friends4.jpg';
import secondFriend from './friends2.jpg';
import thirdFriend from './friends3.jpg';

const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                    <img className="d-block rounded-circle" src={firstFriend} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block rounded-circle" src={secondFriend} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block rounded-circle" src={thirdFriend} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;