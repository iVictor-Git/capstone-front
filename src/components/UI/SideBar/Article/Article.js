import React from 'react';
import classes from './Article.css';

const Article = ({ text }) => {
    return (
        <div className={classes.Article}>
            <div className={classes.Row}>
                <div className={classes.Image}>
                    <img src="" alt="" />
                </div>
                <div className={classes.Content}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nihil liber.
                 </div>
            </div>
        </div>
    )
}

export default Article;