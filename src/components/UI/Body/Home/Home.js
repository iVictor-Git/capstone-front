import React from 'react';
import classes from './Home.css';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    return (
        <div className={classes.Home}>
            <h1 className={classes.slightAdjustment}>Home</h1>
            <Carousel />
            <div className={classes.slighterAdjustment}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>

                <h4>Lengthy Title</h4>
                <div className={classes.center}>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Home;