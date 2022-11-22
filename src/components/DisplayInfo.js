import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //destructuring array/object
    const { age, name } = this.props; //object
    //props => viết tắt của properties
    return (
      <div>
        <div>My name is {name}</div>
        <div>I'm {age} years old</div>
      </div>
    );
  }
}

export default DisplayInfo;
