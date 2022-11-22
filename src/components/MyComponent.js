import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Phong",
    address: "hanoi",
    age: 21,
  };

  handleClick(event) {
    // console.log("Click my button!");
    console.log(`My name is: ${this.state.name}`);
    console.log(`I'm: ${this.state.age}`);

    this.setState({
      name: "Moc Ly",
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMouseOver(event) {
    // console.log(`x = ${event.pageX}, y = ${event.pageY}`);
  }
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default MyComponent;
