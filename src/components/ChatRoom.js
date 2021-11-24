import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor() {
        super();
        //this.updateMessage = this.updateMessage.bind(this),
        this.state = {
            message: '',
            messages: [
                {id: 1, text:'hola'},
                {id: 2, text:'que tal'},
                {id: 3, text:'como estas?'}
            ]
        }
    }

    updateMessage(e){
        console.log(e.target.value)
    }

    render(){
        const currentMessages = this.state.messages.map((messages, i)  => {
            return (
                <li key={messages.id} className="list-group-item list-group-item-action">{messages.text}</li>
            )
        })

        return(
            <div className="card">
                <div className="card-body">
                    <ul className = 'list group'>
                        {currentMessages}
                    </ul>
                </div>

                <div className="card-footer">
                    <input 
                    onChange={this.updateMessage}
                    type="text" 
                    placeholder="Write a message"
                    className="form-control" 
                    />
                    <button className="btn btn-dark btn-block">
                        Send Message
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatRoom