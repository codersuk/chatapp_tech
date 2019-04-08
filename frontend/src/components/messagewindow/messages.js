import React from "react";

class Messages extends React.Component {
    constructor(props) {
        super(props);
        // define states variables

        let state;
        state = {
            message: '',
            listOfMessages: []
        };

        this.state = state;
        //Define the list of messages
        this.state.listOfMessages = this.props.listOfMessages

        // define the getters and setters here
        // this is for the child elements
        // function methods
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(event) {
        event.preventDefault();
        // Submit the message back up to the parent
        this.props.setMessage(document.getElementById('message').value);
        document.getElementById('message').value =''; //clear up the message

        //    add emit to the socket.io here TODO: setup socket.io connection here to this channel
    }

    render() {
        return (
            <>
                <h3>Hello this is the main menu</h3>
                <div>
                    <ul>
                        {
                            this.state.listOfMessages.map((data)=>{
                                return (
                                    <li key={data.objectId}>{data}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <form action="" className="messageForm" onSubmit={this.sendMessage}>
                    <input type="text" id="message" autoComplete="off" />
                    <input type="submit" onClick={this.sendMessage}/>
                </form>
            </>
        );
    }
}

export default Messages;
