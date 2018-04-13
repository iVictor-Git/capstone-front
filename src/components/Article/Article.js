import React from 'react';
import './Article.css';

const Article = ({ text }) => {
    return (
        <div className='article-item-container row'>
            <div className='article-item-img-container col-6'>
                <div>
                    <img src="" alt="" />

                </div>
            </div>

            <div className='article-item-text-container col-6'>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nihil liber.
                </div>
            </div>
        </div>
    )
}

export default Article;