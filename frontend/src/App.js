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


        //  setup the getters and setters
        this.setterMessage = this.setterMessage.bind(this);

    }

    //Setter for messages
    setterMessage(data) {
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
                        <Sidebar className="sidebar"/>
                    </Col>
                    <Col md={6}>
                        <Messages className="messageContainer" listOfMessages={this.state.listOfMessages}
                                  setMessage={this.setterMessage}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
