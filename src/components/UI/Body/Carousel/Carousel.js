import React from 'react';
import classes from './Carousel.css';
import firstFriend from './friends4.jpg';
import secondFriend from './friends2.jpg';
import thirdFriend from './friends3.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={firstFriend} alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={secondFriend} alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={thirdFriend} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;