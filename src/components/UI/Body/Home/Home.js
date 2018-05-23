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
                <p>
                    You ever just want to move out and go off on your own, but just don't have the financial resource to do so on your own? You probably thought about getting a roommate, but who in the world could you get as a roommate that is reliable? I mean, take a look at the people above, do you trust them? It must be so incredibly frustrating not knowing for sure.
                </p>
                <p>
                    In this day and age, apartments need tenants to rent their rooms, and some individuals can’t rent an apartment on their own, and still live a comfortable life. Prices for apartments continually soar up, while wages stay stagnant. To live a comfortable life, it is suggested that an individual doesn’t spend more than 30% of their wages on rent. I don’t know about you, but the last time I looked forapartments, the prices were $800 and up.
                </p>
                <p>
                    That means, an individual has to make about $2,666 ($16.66/hourgross) and up. Given that problem, you’re likely to turn to finding one or more individuals also seekinga roommate. Now, I’ve lived with someone for a year, our rent was about $1,100 a month. That’s $550 between the two of us and equates to making about $1800(each) to be comfortable, translates to needing a job that pays $11.50 minimum ($11.50/hour gross). Now the only thing missing is finding a trustworthy roommate, and that’s where we come in.
                </p>

                <h4>What're you waiting for?</h4>
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