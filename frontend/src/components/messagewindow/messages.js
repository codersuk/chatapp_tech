import React from "react";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    // define states variables
    this.state = {
      hello: ""
    };

    // define the getters and setters here

    // function methods
    this.clicke = this.clicke.bind(this);
    this.clicke2 = this.clicke2.bind(this);
  }

//   convert this methods to something more useful
  clicke(event) {
    alert("test");
    // this.props.pr = "testss"
    this.props.setterHa("testee");
  }
  clicke2() {
    var h = this.props.getterHa();
    alert(h);
  }

  render() {
    return (
      <>
        <h3>hello this is a main menu</h3>
        <button onClick={this.clicke}>test</button>
        <button onClick={this.clicke2}>Test 2</button>
        <form action="" className="messageForm">
          <input type="text" id="message" autoComplete="off" />
        </form>
      </>
    );
  }
}

export default Messages;
