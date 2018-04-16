import React, { Component } from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './ChatMessageList.css';

class ChatMessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            name: 'All'
        }
    }
    // https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react/41700815
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    loadMessages = (messages) => messages.map((message, index) => {
        return <ChatMessage message={message} key={index} />
    })

    render() {
        const { messages } = this.props;
        let listOfMessages = messages.length ?  this.loadMessages(messages).reverse() : ['']    ;
        return (
            <div className='chat-loaded-content-container'>

                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
                {listOfMessages}
            </div>
        )
    }
}

export default ChatMessageList;