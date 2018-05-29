import React, { Component } from 'react';
import classes from './Chat.css';
import ChatMessageList from './ChatMessageList/ChatMessageList';
import NavBar from '../UI/NavBar/NavBar';
import { Redirect } from 'react-router-dom';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            chat: {
                id: '',
                name: '',
                created: '',
            },
            messages: [],
        }
    }

    componentDidMount() {
        const authenticated = this.props.user.isLoggedIn;
        if (!authenticated) return;
        fetch('http://localhost:3000/api/chat/load', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    chat: {
                        id: data.chat.id,
                        name: data.chat.name,
                        created: data.chat.created
                    },
                    messages: data.messages
                })
            })
            .catch(err => console.log('Could not fetch chat'));
        // console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.props.user.id) {
            this.setState({ input: 'Please sign in' });
            setTimeout(() => {
                this.setState({ input: '' });
            }, 2000);
        }

        else {
            const messages = {
                content: this.state.input,
                chat_id: this.state.chat.id,
                user_id: this.props.user.id,
            }
            fetch('http://localhost:3000/api/chat', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(messages)
            })
                .then(response => response.json())
                .then(response => {
                    const messages = response;
                    this.setState({
                        input: '',
                        messages: messages
                    }, this.loadMessages)
                })
                .catch(err => console.log('unable to connect to server.'));
        }
    }

    loadMessages = () => {
        console.log(this.state.messages);
    }

    render() {
        const items = ['All', 'Group', 'Private'];
        return (
            <div className={classes.Chat}>
                <div className={classes.Container}>
                    <div className={classes.Title}>
                        <h1>Chat</h1>
                    </div>

                    {/* <nav className='chat-menu'>
                            <div className='chat-menu-item btn'>All</div>
                            <div className='chat-menu-item btn'>Group</div>
                            <div className='chat-menu-item btn'>Private</div>
                        </nav> */}
                    <NavBar items={items} />

                    {/* Chat message component */}
                    <ChatMessageList messages={this.state.messages} />

                    <div >
                        <form onSubmit={this.handleSubmit}>
                            <div className={classes.ChatControls}>
                                {/* TODO ALLOW INPUT TO RESIZE HEIGHT AFTER CERTAIN LENGTH */}
                                <input maxLength='98' onChange={this.handleChange} type="text" value={this.state.input} />
                                <input type="submit" value="Enter" />
                            </div>
                        </form>
                    </div>
                </div>

                {!this.props.user.isLoggedIn ? <Redirect to={{
                    pathname: '/login'
                }} /> : null}
            </div>
        )
    }
}

export default Chat;