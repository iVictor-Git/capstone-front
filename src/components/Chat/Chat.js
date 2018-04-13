import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='chat-component-container'>
                <div className='chat-content-container container-fluid'>
                    <div className='chat-content-title'>
                        <h1>Chat</h1>
                    </div>

                    <div className='chat-container rounded'>
                        <nav className='chat-menu'>
                            <div className='chat-menu-item btn'>All</div>
                            <div className='chat-menu-item btn'>Group</div>
                            <div className='chat-menu-item btn'>Private</div>
                        </nav>

                        <div className='chat-loaded-content-container'>
                            {/* Chat message component */}
                        </div>

                        <div className='chat-input-container'>
                            <form onSubmit={(event) => event.preventDefault()}>
                                <div className='chat-form-container'>
                                    <div className='form-group chat-form-chat-input'><input className='form-control' type="text" value='' /></div>
                                    <div className='form-group chat-form-chat-submit'><input className='form-control' type="submit" value="Enter" /></div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;