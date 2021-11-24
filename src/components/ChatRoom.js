import React, { Component } from 'react';
class ChatRoom extends Component {
    constructor() {
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        
        this.state = {
            message: '',
            messages: []
        }
    }

    updateMessage(e) {
        this.setState({
          message: e.target.value
        });
      }

    submitMessage(){
        const message = {
            id: this.state.messages.length,
            text: this.state.message
        };
        
        let listMessages = this.state.messages;
        listMessages.push(message);
        this.setState({
            message: listMessages
        });

        this.setState({ message: ''})
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
                    value= {this.state.message}
                    onChange={this.updateMessage}
                    type="text" 
                    placeholder="Write a message"
                    className="form-control" 
                    />
                    <button 
                    onClick={() => this.submitMessage()}
                    className="btn btn-dark btn-block">
                        Send Message
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatRoom