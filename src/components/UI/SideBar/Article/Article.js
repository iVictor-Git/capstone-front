import React from 'react';
import classes from './Article.css';

const Article = ({ text }) => {
    return (
        <div className={classes.Article}>
            <div className={classes.Content}>
                <img src="" alt="" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nihil liber.
            </div>
        </div>
    )
}

export default Article;