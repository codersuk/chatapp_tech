import React, { Component } from "react";


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
  constructor(props){
    super(props)
    this.state ={
      'ha':'test'
    }

    // Register Settings / Getters
    this.setterHa = this.setterHa.bind(this);
    this.getterHa = this.getterHa.bind(this);
    
  }
  // setter for HA
  setterHa(data){
    this.setState({ha:data});
  }

  // getter for HA
  getterHa(){
    return this.state.ha;
  }
  render() {
    return (
      <Container className="app">
        <Row>
          <Col md={3}>
            <Sidebar className="sidebar" pr={this.state.ha}  />
          </Col>
          <Col md={6}>
          <Messages className="messageContainer" setterHa={this.setterHa} getterHa={this.getterHa} /></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
