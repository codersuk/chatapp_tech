import React, {Component} from "react";


// Import components
import Sidebar from "./components/sidebar/sidebar";
import Messages from "./components/messagewindow/messages";

// Import Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Run my own CSS 
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        let state;
        state = {
            message: '',
            listOfMessages: []
        };
        this.state = state;


        //  setup the getters and setters for this parent
        this.setMessages = this.setMessages.bind(this);
        this.setChannel = this.setChannel.bind(this);

    }
    setChannel(data){

    }

    //Setter for messages
    setMessages(data) {
        // TODO: Save the message to a database and broadcast it to the other people in this group
        // TODO: parse current group and channels to the server to allow us to connect to the correct namespace
        let runningMessage = this.state.listOfMessages;
        if (data !== "") {
            runningMessage.push(data);
        }
        this.setState({message: data});
    }

    render() {
        return (
            <Container className="app">
                <Row>
                    <Col md={2}>
                        <Sidebar className="sidebar" setChannel={this.setChannel}/>
                    </Col>
                    <Col md={6}>
                        <Messages className="messageContainer" listOfMessages={this.state.listOfMessages}
                                  setMessage={this.setMessages}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
