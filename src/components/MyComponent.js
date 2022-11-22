import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Phong",
    address: "hanoi",
    age: 21,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
