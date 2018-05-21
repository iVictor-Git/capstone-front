import React from 'react';
import classes from './Home.css';
import Carousel from '../Carousel/Carousel';
import SideBar from '../../SideBar/SideBar';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className={classes.Title}>Home</h1>
            </div>
            <div className={classes.Home}>
                <Carousel />
            </div>
            <div>
                <SideBar />
            </div>
            <div className={classes.Content}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita est iste fugit laudantium vel illum minima animi quisquam asperiores rem cumque ipsa pariatur unde, velit iure corrupti perspiciatis molestias.</p>

                <h4>Lengthy Title</h4>
                <div className={classes.center}>
                    <button>Sign up</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;