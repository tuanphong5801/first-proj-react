import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Phong",
    address: "hanoi",
    age: 21,
  };

  handleClick(event) {
    // console.log("Click my button!");
    console.log(`My name is: `);
  }

  handleOnMouseOver(event) {
    console.log(`x = ${event.clientX}, y = ${event.clientY}`);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default MyComponent;
