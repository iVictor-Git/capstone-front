import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    return (
        <div className='home-container row'>
            <div className='home-title-container rounded'>
                <h1>Home</h1>

                <br/>

                <Carousel />

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
            
                <h4>Lengthy Title</h4>
                <div className='btn home-sign-up-btn'>Sign up</div>
            </div>
        </div>
    )
}

export default Home;