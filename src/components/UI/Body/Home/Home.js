import React from 'react';
import classes from './Home.css';
import Carousel from '../Carousel/Carousel';
import SideBar from '../../SideBar/SideBar';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <h1 className={classes.Title}>Home</h1>
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
                <Link to={{
                    pathname: '/register'
                }}>
                    <div className={classes.center}>
                        <button>Sign up</button>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Home;