import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tuan Phong",
    address: "hanoi",
    age: 21,
  };

  handleClick = (event) => {
    // console.log("Click my button!");
    console.log(`My name is: ${this.state.name}`);
    console.log(`I'm: ${this.state.age}`);

    this.setState({
      name: "Moc Ly",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value.trim(),
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
