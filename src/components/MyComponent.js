import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="Phong" age="21" />
        <hr />
        <DisplayInfo name="Ly" age="22" />
      </div>
    );
  }
}

export default MyComponent;
