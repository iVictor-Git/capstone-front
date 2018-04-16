import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
    const splitContent = (content = '') => {
        if (!content) return [''];
        return content.split(' ');
    }

    const joinCotent = (messages) => {
        const joined = splitContent(messages).map((message, index) => {;
            // console.log(message);
            return <div key={index} className=''>{`${message} `}</div>
        })
        return joined;
    }

    let content = joinCotent(message.content);

    return (
        <div className={`chat-message-container ${message.type}`}>
            <div className='chat-message-user-info'>
                <div className='chat-message-user-img'>
                    <img src="#" alt="" />
                </div>
                <div className='chat-message-user-name'>
                    {message.name}
                </div>
            </div>

            <div className='chat-message-content'>
                {content}

            </div>
        </div>
    )
}

export default ChatMessage;